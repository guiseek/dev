export const splitTags = (tags = '') => {
  return tags.split(',').map((t) => t.trim())
}
