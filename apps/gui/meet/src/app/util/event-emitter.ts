type Fn = () => void | Function

export class EventEmitter {
  private _listeners: Record<string, Fn[]> = {}

  addEvent(name: string, fn: Fn) {

    if (!this._listeners[name]) {

      this._listeners[name] = []
    }
    this._listeners[name].push(fn)
  }

  removeEvent(name: string, fn: Fn) {
    if (this._listeners[name]) {

      const idx = this._listeners[name].findIndex(fn)

      if (idx > -1) {

        this._listeners[name].splice(idx, 1)
      }
    }
  }

  emit(...args: [string, ...any]) {

    const arg = args.shift()
    let listeners: Fn[]

    if (typeof arg !== 'string') {
      throw Error('O primeiro parâmetro deve ser uma string')
    } else {

      listeners = this._listeners[arg]
      for (const fn of listeners) {

        fn.apply(null, args)

      }
    }
  }
}
