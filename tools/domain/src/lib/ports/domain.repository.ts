import {CreateDomain, UpdateDomain} from '../dtos'
import {Repository} from '@dev/shared-util-data'
import {Domain} from '../entities'

export abstract class DomainRepository extends Repository<Domain> {
  abstract override create(value: CreateDomain): Promise<Domain>
  abstract override update(value: UpdateDomain): Promise<Domain>
}
