import {User} from '@dev/account-domain'
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import {GroupImpl} from './group.impl'

@Entity({name: 'user'})
export class UserImpl implements User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column({type: 'date'})
  birthdate: Date

  @Column()
  username: string

  @Column()
  password: string

  @ManyToMany(() => GroupImpl)
  @JoinTable()
  groups: GroupImpl[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
