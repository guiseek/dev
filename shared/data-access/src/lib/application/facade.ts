import {FindParams, Paged, Service} from '@dev/shared-util-data'
import {Observable, catchError, take} from 'rxjs'
import {Store} from './store'

interface FacadeState<T> extends Paged<T> {
  selected: T | null
  warning: string | null
  loading: boolean
}

export abstract class Facade<T extends object> extends Store<FacadeState<T>> {
  selected$ = this.select((state) => state.selected)
  loading$ = this.select((state) => state.loading)
  warning$ = this.select((state) => state.warning)
  data$ = this.select((state) => state.data)
  meta$ = this.select((state) => state.meta)

  constructor(protected readonly service: Service<T>) {
    super({
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
    })
  }

  find(params?: FindParams<T>) {
    const find$ = this.service.find(params).pipe(take(1))
    find$.subscribe((response) => this.setState(response))
  }

  filter(params: FindParams<T>) {
    const find$ = this.service.filter(params).pipe(take(1))
    find$.subscribe((response) => this.setState(response))
  }

  findOne(id: string) {
    const findOne$ = this.service.findOne(id).pipe(take(1))
    findOne$.subscribe((selected) => this.setState({selected}))
  }

  create(createContent: Partial<T>) {
    const create$ = this.service.create(createContent).pipe(take(1))
    create$.pipe(catchError(this.handleError)).subscribe((selected) => {
      this.setState({selected})
      this.find()
    })
  }

  update(updateContent: Partial<T>) {
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

  removeBulk(ids: string[]) {
    const remove$ = this.service.removeBulk(...ids).pipe(take(1))
    remove$.subscribe(() => this.find())
  }

  handleError = (err: {error: Error}, caught: Observable<T>) => {
    if (err) {
      this.setState({warning: err.error.message})
      throw err.error.message
    }
    return caught
  }
}
