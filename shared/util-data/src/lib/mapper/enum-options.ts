export const enumOptions = <T extends object>(value: T) =>
  Object.entries(value).map(
    ([value, text]) =>
      ({value, text} as {
        value: keyof T
        text: string
      })
  )
