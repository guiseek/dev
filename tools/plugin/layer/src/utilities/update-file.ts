import {ProjectConfiguration, Tree} from '@nx/devkit'

export function updateFile(
  tree: Tree,
  file: string,
  {sourceRoot}: ProjectConfiguration,
  content: string
) {
  const contents = tree.read(sourceRoot + '/' + file)
  tree.write(sourceRoot + '/' + file, contents.toString() + content)
}
