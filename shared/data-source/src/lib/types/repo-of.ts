import {Repository} from 'typeorm'

export type RepoOf<E extends object, T = unknown> = new (
  repo: Repository<E>
) => T
