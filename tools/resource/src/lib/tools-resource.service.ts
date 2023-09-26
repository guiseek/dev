import {BadRequestException, Injectable} from '@nestjs/common'
import {CreateDomainDto} from './dtos/create-domain'
import {
  CreateDataAccessDto,
  CreateDataSourceDto,
  CreateResourceDto,
  CreateFeatureDto,
} from './dtos'
import {execSync} from 'child_process'
import {join} from 'path'

function makeParams<T extends object>(schema: T) {
  return Object.entries(schema)
    .filter(([, value]) => !!value)
    .map(([param, value]) => `--${param}=${value}`)
    .join(' ')
}

@Injectable()
export class ToolsResourceService {
  createDomain(createDomainDto: CreateDomainDto) {
    const command = `nx g @dev/plugin-layer:domain`
    const params = makeParams(createDomainDto)
    return this.#run(`${command} ${params}`)
  }

  createDataAccess(createDataAccessDto: CreateDataAccessDto) {
    const command = `nx g @dev/plugin-layer:data-access`
    const params = makeParams(createDataAccessDto)
    return this.#run(`${command} ${params}`)
  }

  createDataSource(createDataSourceDto: CreateDataSourceDto) {
    const command = `nx g @dev/plugin-layer:data-source`
    const params = makeParams(createDataSourceDto)
    return this.#run(`${command} ${params}`)
  }

  createResource(createResourceDto: CreateResourceDto) {
    const command = `nx g @dev/plugin-layer:resource`
    const params = makeParams(createResourceDto)
    return this.#run(`${command} ${params}`)
  }

  createFeature(createFeatureDto: CreateFeatureDto) {
    const command = `nx g @dev/plugin-layer:feature`
    const params = makeParams(createFeatureDto)
    return this.#run(`${command} ${params}`)
  }

  #run(command: string) {
    try {
      const encoding = 'utf8'
      const cwd = join(__dirname, '..', '..')

      const result = execSync(command, {cwd, encoding})

      return result.split('\n')
    } catch (err) {
      throw new BadRequestException(err)
    }
  }
}
