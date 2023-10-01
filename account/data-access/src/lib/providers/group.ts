import {Http, provideByEnv, provideServiceMock} from '@dev/shared-data-access'
import {GroupServiceImpl, GroupServiceMock} from '../infrastructure'
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

export const provideGroup = provideByEnv(
  provideGroupService,
  provideGroupServiceMock,
  provideGroupFacade()
)
