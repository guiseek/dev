export const by =
  <E, K extends keyof E>(key: K, value: E[K]) =>
  (item: E) =>
    item[key] === value
