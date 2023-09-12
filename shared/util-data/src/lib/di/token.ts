export const token = (name: string) => {
  const symbol: unique symbol = Symbol(name)
  return symbol
}
