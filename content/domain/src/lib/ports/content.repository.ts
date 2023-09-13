import {Paged, FindParams, Repository, BulkResult} from '@dev/shared-util-data'
import {CreateContent, UpdateContent} from '../dtos'
import {Content} from '../entities'

export abstract class ContentRepository implements Repository<Content> {
  abstract find(
    params?: FindParams<Content> | undefined
  ): Promise<Paged<Content>>
  abstract create(value: CreateContent): Promise<Content>
  abstract update(value: UpdateContent): Promise<Content>
  abstract remove(id: string): Promise<Content>
  abstract removeBulk(...ids: string[]): Promise<BulkResult>
  abstract findOne<K extends keyof Content>(
    key: K,
    value: Content[K]
  ): Promise<Content | null>
}
