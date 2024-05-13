import { User } from '../user'

import { Comment } from '../comment'

import { Like } from '../like'

export class PostData {
  id: string

  content?: string

  imageUrl?: string

  dateCreated: string

  dateUpdated: string

  userId: string

  user?: User

  dateDeleted: string

  comments?: Comment[]

  likes?: Like[]
}
