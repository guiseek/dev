import {Repository} from 'typeorm'

export type RepoOf<E extends object, T = unknown> = new (
  repo: Repository<E>
) => T

export type RepoMockOf<E extends object, T = unknown> = new (
  collection: E[]
) => T
