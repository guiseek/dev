import {Entity, FindParams, Repository, Where} from '@dev/shared-util-data'

export abstract class DataSourceFacade<T extends Entity> {
  constructor(protected readonly repository: Repository<T>) {}

  find(params: FindParams<T>) {
    return this.repository.find(params)
  }

  count(where: Where<T>) {
    return this.repository.count(where)
  }

  findOne(id: string) {
    return this.repository.findOne('id', id)
  }

  remove(id: string) {
    return this.repository.remove(id)
  }

  removeBulk(ids: string[]) {
    return this.repository.removeBulk(...ids)
  }
}
