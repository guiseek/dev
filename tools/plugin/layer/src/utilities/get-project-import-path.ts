import {ProjectConfiguration, readJsonFile} from '@nx/devkit'
import {TSConfigBase} from '../interfaces/ts-config-base'

export function getProjectImportPath({sourceRoot}: ProjectConfiguration) {
  const {compilerOptions} = readJsonFile<TSConfigBase>('tsconfig.base.json')

  return Object.keys(compilerOptions.paths).find((importPath) => {
    return compilerOptions.paths[importPath].find(
      (path) => path.indexOf(sourceRoot + '/index.ts') > -1
    )
  })
}
