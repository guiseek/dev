import {Rail, RailRepository} from '@dev/learning-domain'
import {BaseRepository} from '@dev/shared-data-source'

export class RailRepositoryImpl
  extends BaseRepository<Rail>
  implements RailRepository
{
  name = 'rail'
}
