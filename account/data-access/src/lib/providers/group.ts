import {GroupServiceImpl, GroupServiceMock} from '../infrastructure'
import {Env, Http, provideServiceMock} from '@dev/shared-data-access'
import {Group, GroupService} from '@dev/account-domain'
import {GroupFacade} from '../application'

export function provideGroupService(api: string) {
  return {
    provide: GroupService,
    useFactory(http: Http) {
      return new GroupServiceImpl(http, api)
    },
    deps: [Http],
  }
}

export function provideGroupServiceMock(collection: Group[] = []) {
  return provideServiceMock(GroupService, GroupServiceMock, collection)
}

export function provideGroupFacade() {
  return {
    provide: GroupFacade,
    deps: [GroupService],
  }
}

function getServiceByEnv(level: Env | string, api: string | Group[] = []) {
  switch (level) {
    case 'staging':
    case 'production':
    case 'development':
      return provideGroupService(api as string)
    case 'testing':
    default:
      return provideGroupServiceMock(api as Group[])
  }
}

export function provideGroup(level: Env | string, api: string | Group[] = []) {
  return [getServiceByEnv(level, api), provideGroupFacade()]
}
