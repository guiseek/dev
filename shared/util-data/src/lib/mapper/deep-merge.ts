type Mergeable = Record<string, any>

export function deepMerge<T extends Mergeable, U extends Mergeable>(
  target: T,
  source: U
): T & U {
  const merged = {...target} as T | U

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (
        typeof source[key] === 'object' &&
        source[key] !== null &&
        !Array.isArray(source[key])
      ) {
        if (
          typeof merged[key] === 'object' &&
          merged[key] !== null &&
          !Array.isArray(merged[key])
        ) {
          merged[key] = deepMerge(merged[key], source[key])
        } else {
          merged[key] = {...source[key]}
        }
      } else {
        merged[key] = source[key]
      }
    }
  }

  return merged as T & U
}
