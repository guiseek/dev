import {CreateContent, UpdateContent} from '../dtos'
import {Repository} from '@dev/shared-util-data'
import {Content} from '../entities'

export abstract class ContentRepository extends Repository<Content> {
  abstract override create(value: CreateContent): Promise<Content>
  abstract override update(value: UpdateContent): Promise<Content>
}
