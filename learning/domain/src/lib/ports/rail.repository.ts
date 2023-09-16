import {CreateRail, UpdateRail} from '../dtos'
import {Repository} from '@dev/shared-util-data'
import {Rail} from '../entities'

export abstract class RailRepository extends Repository<Rail> {
  abstract override create(value: CreateRail): Promise<Rail>
  abstract override update(value: UpdateRail): Promise<Rail>
}
