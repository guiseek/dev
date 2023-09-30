import {
  Node,
  forEachChild,
  ScriptTarget,
  createSourceFile,
  PropertySignature,
  isPropertySignature,
  isInterfaceDeclaration,
} from 'typescript'
import {Tree} from '@nx/devkit'
import {NormalizedEntity} from '../schema'

function analyzeInterface(node: Node) {
  if (isInterfaceDeclaration(node)) {
    return {
      name: node.name.text,
      props: node.members
        .filter((member) => isPropertySignature(member))
        .map(({name, type}: PropertySignature) => {
          return {
            name: name.getText(),
            type: type.getText(),
          }
        }),
    }
  }

  return forEachChild(node, analyzeInterface)
}

export function readEntity(tree: Tree, path: string): NormalizedEntity {
  if (!tree.exists(path)) {
    throw new Error(`Entity file ${path} not found`)
  }

  const interfaceCode = tree.read(path, 'utf8')

  const sourceFile = createSourceFile(
    'interface.ts',
    interfaceCode,
    ScriptTarget.Latest,
    true
  )

  return analyzeInterface(sourceFile)
}
