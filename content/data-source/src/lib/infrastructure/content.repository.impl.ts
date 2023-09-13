import {Content, ContentRepository} from '@dev/content-domain'
import {BaseRepository} from '@dev/shared-data-source'

export class ContentRepositoryImpl
  extends BaseRepository<Content>
  implements ContentRepository
{
  name = 'content'
}
