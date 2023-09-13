import {BehaviorSubject, distinctUntilChanged, map} from 'rxjs'

export abstract class Store<T> {
  #state: BehaviorSubject<T>

  protected get state(): T {
    return this.#state.getValue()
  }

  constructor(initialState: T) {
    const state = Object.freeze(initialState)
    this.#state = new BehaviorSubject<T>(state)
  }

  protected select<K>(mapFn: (state: T) => K) {
    return this.#state.asObservable().pipe(
      map((state: T) => mapFn(state)),
      distinctUntilChanged()
    )
  }

  protected setState(newState: Partial<T>) {
    this.#state.next({
      ...this.state,
      ...newState,
    })
  }
}
