import {User, UserService, CreateUser, UpdateUser} from '@dev/account-domain'
import {FindParams, Paged} from '@dev/shared-util-data'
import {Observable, catchError, take} from 'rxjs'
import {Store} from '@dev/shared-data-access'

interface UserState extends Paged<User> {
  selected: User | null
  warning: string | null
  loading: boolean
}

const initialState: UserState = {
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

export class UserFacade extends Store<UserState> {
  selected$ = this.select((state) => state.selected)
  loading$ = this.select((state) => state.loading)
  warning$ = this.select((state) => state.warning)
  data$ = this.select((state) => state.data)
  meta$ = this.select((state) => state.meta)

  constructor(private readonly service: UserService) {
    super(initialState)
  }

  find(params?: FindParams<User>) {
    const find$ = this.service.find(params).pipe(take(1))
    find$.subscribe((response) => this.setState(response))
  }

  filter(params: FindParams<User>) {
    const find$ = this.service.filter(params).pipe(take(1))
    find$.subscribe((response) => this.setState(response))
  }

  findOne(id: string) {
    const findOne$ = this.service.findOne(id).pipe(take(1))
    findOne$.subscribe((selected) => this.setState({selected}))
  }

  create(createUser: CreateUser) {
    const create$ = this.service.create(createUser).pipe(take(1))
    create$.pipe(catchError(this.handleError)).subscribe((selected) => {
      this.setState({selected})
      this.find()
    })
  }

  update(updateUser: UpdateUser) {
    const update$ = this.service.update(updateUser).pipe(take(1))
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

  handleError = (err: {error: Error}, caught: Observable<User>) => {
    if (err) {
      this.setState({warning: err.error.message})
      throw err.error.message
    }
    return caught
  }
}
