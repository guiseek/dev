import {Tree} from '@nx/devkit'

export function addExport(
  tree: Tree,
  sourceFile: string,
  ...exportFiles: string[]
) {
  const contents = tree.read(sourceFile)
  const content = exportFiles.map((file) => `\nexport * from '${file}'`)
  tree.write(sourceFile, contents.toString() + content.join(''))
}
