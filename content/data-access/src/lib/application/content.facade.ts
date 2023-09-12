import {
  Content,
  ContentService,
  CreateContent,
  UpdateContent,
} from '@dev/content-domain'
import {FindParams, Paged} from '@dev/shared-util-data'
import {Store} from '@dev/shared-data-access'
import {take} from 'rxjs'

interface ContentState extends Paged<Content> {
  selected: Content | null
}

const meta = {
  hasNextPage: false,
  hasPreviousPage: false,
  itemCount: 0,
  page: 1,
  pageCount: 0,
  take: 10,
}

export class ContentFacade extends Store<ContentState> {
  selected$ = this.select((state) => state.selected)
  data$ = this.select((state) => state.data)
  meta$ = this.select((state) => state.meta)

  constructor(private readonly service: ContentService) {
    super({data: [], meta, selected: null})
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
    create$.subscribe((selected) => {
      this.setState({selected})
      this.find()
    })
  }

  update(updateContent: UpdateContent) {
    const update$ = this.service.update(updateContent).pipe(take(1))
    update$.subscribe((selected) => {
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
}
