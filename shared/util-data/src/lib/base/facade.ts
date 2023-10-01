import {FindParams, Service} from '../interfaces'
import {Observable, catchError, take} from 'rxjs'
import {Store} from './store'
import {Where} from '../types'
import {Paged} from './paged'

interface FacadeState<T> extends Paged<T> {
  selected: T | null
  warning: string | null
  loading: boolean
  count: number
}

export abstract class Facade<
  T extends object,
  S extends Service<T> = Service<T>
> extends Store<FacadeState<T>> {
  selected$ = this.select((state) => state.selected)
  loading$ = this.select((state) => state.loading)
  warning$ = this.select((state) => state.warning)
  count$ = this.select((state) => state.count)
  data$ = this.select((state) => state.data)
  meta$ = this.select((state) => state.meta)

  constructor(protected readonly service: S) {
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
      count: 0,
    })
  }

  find(params?: FindParams<T>) {
    const find$ = this.service.find(params).pipe(take(1))
    find$.subscribe((response) => this.setState(response))
  }

  count(where?: Where<T>) {
    const find$ = this.service.count(where).pipe(take(1))
    find$.subscribe((count) => this.setState({count}))
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
