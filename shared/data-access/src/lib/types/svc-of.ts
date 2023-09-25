import {Service} from '@dev/shared-util-data'

export type SvcOf<E extends object, T = unknown> = new (repo: Service<E>) => T

export type SvcMockOf<E extends object, T = unknown> = new (
  collection: E[]
) => T
