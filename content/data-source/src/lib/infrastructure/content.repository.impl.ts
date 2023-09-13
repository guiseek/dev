import {
  Content,
  CreateContent,
  UpdateContent,
  ContentRepository,
} from '@dev/content-domain'
import {PageMetaDto, PagedDto, findLike} from '@dev/shared-data-source'
import {FindParams} from '@dev/shared-util-data'
import {Repository} from 'typeorm'

export class ContentRepositoryImpl implements ContentRepository {
  constructor(private readonly repository: Repository<Content>) {}

  async find({where, options = {}}: FindParams<Content>) {
    const {skip, take, sort, order} = options

    const query = this.repository.createQueryBuilder('content')

    console.log(where)

    query
      .orderBy(`content.${sort ?? 'createdAt'}`, order)
      .skip(skip)
      .take(take)

    if (where) {
      query.orWhere(findLike(where))
    }

    const [entities, itemCount] = await query.getManyAndCount()

    const meta = new PageMetaDto({itemCount, options})
    return new PagedDto(entities, meta)
  }

  create(value: CreateContent) {
    return this.repository.save(value)
  }

  update(value: UpdateContent) {
    return this.repository.save(value)
  }

  async remove(id: string) {
    const content = await this.findOne('id', id)
    if (content) return this.repository.remove(content)
    else throw new Error(`${id} not found`)
  }

  removeBulk(...ids: string[]) {
    return this.repository.delete(ids)
  }

  findOne<K extends keyof Content>(key: K, value: Content[K]) {
    return this.repository.findOneByOrFail({[key]: value})
  }
}
