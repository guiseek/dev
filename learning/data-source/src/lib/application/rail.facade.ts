import {Rail, RailRepository} from '@dev/learning-domain'
import {DataSourceFacade} from '@dev/shared-data-source'
import {CreateRailDto, UpdateRailDto} from '../dtos'

export class RailFacade extends DataSourceFacade<Rail> {
  constructor(repository: RailRepository) {
    super(repository)
  }

  create(value: CreateRailDto) {
    return this.repository.create(value)
  }

  update(value: UpdateRailDto) {
    return this.repository.update(value)
  }
}
