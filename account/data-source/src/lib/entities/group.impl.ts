import {Group} from '@dev/account-domain'
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity({name: 'group'})
export class GroupImpl implements Group {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({default: ''})
  label: string

  @Column()
  permission: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
