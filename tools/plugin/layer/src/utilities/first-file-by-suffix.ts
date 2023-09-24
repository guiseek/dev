import {Tree} from '@nx/devkit'
import {join} from 'path'

export function firstFileBySuffix(
  tree: Tree,
  root: string,
  suffix: string,
  maxParent = 2
) {
  let parentN = 0
  const entries = [root]

  const findIn = (entry: string) => {
    parentN++
    entries.push(entry)

    if (parentN < maxParent) {
      const module = tree
        .children(join(...entries))
        .filter((child) => tree.isFile(join(...entries, child)))
        .find((filename) => new RegExp(`.${suffix}.(t|j)s$`).test(filename))

      return module ? join(...entries, module) : findIn('..')
    }
  }

  return findIn
}
