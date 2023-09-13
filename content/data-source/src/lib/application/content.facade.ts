import {Content, ContentRepository} from '@dev/content-domain'
import {CreateContentDto, UpdateContentDto} from '../dtos'
import {FindParams} from '@dev/shared-util-data'

export class ContentFacade {
  constructor(private readonly repository: ContentRepository) {}

  create(value: CreateContentDto) {
    return this.repository.create(value)
  }

  find(value: FindParams<Content>) {
    return this.repository.find(value)
  }

  findOne(id: string) {
    return this.repository.findOne('id', id)
  }

  update(value: UpdateContentDto) {
    return this.repository.update(value)
  }

  remove(id: string) {
    return this.repository.remove(id)
  }

  removeBulk(ids: string[]) {
    return this.repository.removeBulk(...ids)
  }
}
