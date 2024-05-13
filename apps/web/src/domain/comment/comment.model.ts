import { PostData } from '../postData'

import { User } from '../user'

export class Comment {
  id: string

  text?: string

  dateCreated: string

  dateUpdated: string

  postId: string

  post?: PostData

  userId: string

  user?: User

  dateDeleted: string
}
