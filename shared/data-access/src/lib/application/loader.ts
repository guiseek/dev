import {Store} from './store'

interface LoaderState {
  active: boolean
}

export class Loader extends Store<LoaderState> {
  active$ = this.select((state) => state.active)

  constructor() {
    super({active: false})
  }

  activate() {
    this.setState({active: true})
  }

  deActivate() {
    this.setState({active: false})
  }
}
