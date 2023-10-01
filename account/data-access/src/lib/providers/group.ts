import {GroupServiceImpl, GroupServiceMock} from '../infrastructure'
import {Http, provideServiceMock} from '@dev/shared-data-access'
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

export function provideGroup(production = false, api: string | Group[] = []) {
  const providers = []
  providers.push(
    production
      ? provideGroupService(api as string)
      : provideGroupServiceMock(api as Group[])
  )

  providers.push(provideGroupFacade())
  return providers
}
