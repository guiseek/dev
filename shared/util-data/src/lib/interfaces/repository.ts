import {Remove} from './remove'
import {Update} from './update'
import {Create} from './create'
import {Find} from './find'
import { FindOneBy } from './find-one-by'

export interface Repository<T extends object>
  extends Find<T>,
    Create<T>,
    Update<T>,
    Remove<T>,
    FindOneBy<T> {}
