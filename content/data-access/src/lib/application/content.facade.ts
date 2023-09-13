import {
  Content,
  ContentService,
  CreateContent,
  UpdateContent,
} from '@dev/content-domain'
import {FindParams, Paged} from '@dev/shared-util-data'
import {Store} from '@dev/shared-data-access'
import {Observable, catchError, take} from 'rxjs'

interface ContentState extends Paged<Content> {
  selected: Content | null
  warning: string | null
  loading: boolean
}

const initialState: ContentState = {
  data: [],
  meta: {
    hasNextPage: false,
    hasPreviousPage: false,
    itemCount: 0,
    page: 1,
    pageCount: 0,
    take: 10,
  },
  loading: false,
  selected: null,
  warning: null,
}

export class ContentFacade extends Store<ContentState> {
  selected$ = this.select((state) => state.selected)
  loading$ = this.select((state) => state.loading)
  warning$ = this.select((state) => state.warning)
  data$ = this.select((state) => state.data)
  meta$ = this.select((state) => state.meta)

  constructor(private readonly service: ContentService) {
    super(initialState)
  }

  find(params?: FindParams<Content>) {
    const find$ = this.service.find(params).pipe(take(1))
    find$.subscribe((response) => this.setState(response))
  }

  filter(params: FindParams<Content>) {
    const find$ = this.service.filter(params).pipe(take(1))
    find$.subscribe((response) => this.setState(response))
  }

  findOne(id: string) {
    const findOne$ = this.service.findOne(id).pipe(take(1))
    findOne$.subscribe((selected) => this.setState({selected}))
  }

  create(createContent: CreateContent) {
    const create$ = this.service.create(createContent).pipe(take(1))
    create$.pipe(catchError(this.handleError)).subscribe((selected) => {
      this.setState({selected})
      this.find()
    })
  }

  update(updateContent: UpdateContent) {
    const update$ = this.service.update(updateContent).pipe(take(1))
    update$.pipe(catchError(this.handleError)).subscribe((selected) => {
      this.setState({selected})
      this.find()
    })
  }

  remove(id: string) {
    const remove$ = this.service.remove(id).pipe(take(1))
    remove$.subscribe((selected) => {
      this.setState({selected})
      this.find()
    })
  }

  handleError = (err: {error: Error}, caught: Observable<Content>) => {
    if (err) {
      this.setState({warning: err.error.message})
      throw err.error.message
    }
    return caught
  }
}
