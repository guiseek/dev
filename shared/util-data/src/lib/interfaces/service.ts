import {Create} from './create'
import {Find} from './find'
import {FindOne} from './find-one'
import {Remove} from './remove'
import {Update} from './update'

export interface Service<T extends object>
  extends Find<T>,
    Create<T>,
    Update<T>,
    Remove<T>,
    FindOne<T> {}
