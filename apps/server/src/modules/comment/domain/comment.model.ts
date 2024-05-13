import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { PostData } from '../../../modules/postData/domain'

import { User } from '../../../modules/user/domain'

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  text?: string

  @Column({})
  postId: string

  @ManyToOne(() => PostData, parent => parent.comments)
  @JoinColumn({ name: 'postId' })
  post?: PostData

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.comments)
  @JoinColumn({ name: 'userId' })
  user?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
