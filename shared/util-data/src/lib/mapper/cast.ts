export class Cast {
  static toString<T>(value: T) {
    return String(value) === '[object Object]'
      ? JSON.stringify(value)
      : (String(value) as string)
  }

  static fromString<R>(value: string) {
    if (!isNaN(+value)) return +value as R

    try {
      return JSON.parse(value) as R
    } catch {
      return value as R
    }
  }
}
