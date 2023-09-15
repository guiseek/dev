import {Content, ContentRepository} from '@dev/content-domain'
import {DataSourceFacade} from '@dev/shared-data-source'
import {CreateContentDto, UpdateContentDto} from '../dtos'

export class ContentFacade extends DataSourceFacade<Content> {
  constructor(repository: ContentRepository) {
    super(repository)
  }

  create(value: CreateContentDto) {
    return this.repository.create(value)
  }

  update(value: UpdateContentDto) {
    return this.repository.update(value)
  }
}
