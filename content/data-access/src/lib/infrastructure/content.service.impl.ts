import {Content, ContentService} from '@dev/content-domain'
import {BaseService} from '@dev/shared-data-access'

export class ContentServiceImpl
  extends BaseService<Content>
  implements ContentService {}
