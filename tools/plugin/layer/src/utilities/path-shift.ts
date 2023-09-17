export const pathShift = (path: string, fallback = '') => {
  return path.split('/').shift() ?? fallback
}
