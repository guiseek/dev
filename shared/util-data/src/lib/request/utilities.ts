export const objKeys = <T extends object>(val: T): string[] => Object.keys(val)

export const getOwnPropNames = <T>(val: T): string[] =>
  Object.getOwnPropertyNames(val)

export const isUndefined = <T>(val: T): boolean => typeof val === 'undefined'

export const isNull = <T>(val: T): boolean => val === null

export const isNil = <T>(val: T): boolean => isUndefined(val) || isNull(val)

export const isString = <T>(val: T): boolean => typeof val === 'string'

export const hasLength = <T extends string>(
  val: T | (T | unknown)[]
): boolean => val.length > 0

export const isStringFull = <T extends string>(val: T | T[]): boolean =>
  isString(val) && hasLength(val)

export const isArrayFull = <T>(val: T): boolean =>
  Array.isArray(val) && hasLength(val)

export const isArrayStrings = <T>(val: T): boolean =>
  isArrayFull(val) && (val as string[]).every((v) => isStringFull(v))

export const isObject = <T>(val: T): boolean =>
  typeof val === 'object' && !isNull(val)

export const isObjectFull = <T extends object>(val: T) =>
  isObject(val) && hasLength(objKeys(val))

export const isNumber = <T>(val: T): boolean =>
  typeof val === 'number' && !Number.isNaN(val) && Number.isFinite(val)

export const isEqual = <T>(val: T, eq: T): boolean => val === eq

export const isFalse = <T>(val: T): boolean => val === false

export const isTrue = <T>(val: T): boolean => val === true

export const isIn = <T>(val: T, arr: T[] = []): boolean =>
  arr.some((o) => isEqual(val, o))

export const isBoolean = <T>(val: T): boolean => typeof val === 'boolean'

export const isNumeric = <T extends string>(val: T): boolean =>
  /^[+-]?([0-9]*[.])?[0-9]+$/.test(val)

export const isDateString = <T extends string>(val: T): boolean =>
  isStringFull(val) &&
  /^\d{4}-[01]\d-[0-3]\d(?:T[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[-+][0-2]\d(?::?[0-5]\d)?)?)?$/g.test(
    val
  )

export const isDate = (val: unknown): val is Date => val instanceof Date

export const isValue = <T extends string>(val: T | T[]): boolean =>
  isStringFull(val) || isNumber(val) || isBoolean(val) || isDate(val)

export const hasValue = <T extends string>(val: T | T[]): boolean =>
  isArrayFull(val) ? (val as T[]).every((o) => isValue(o)) : isValue(val)

export const isFunction = <T>(val: T): boolean => typeof val === 'function'
