import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { PostData as PostDataModel } from './postData/postData.model'

import { Comment as CommentModel } from './comment/comment.model'

import { Like as LikeModel } from './like/like.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class PostData extends PostDataModel {}

  export class Comment extends CommentModel {}

  export class Like extends LikeModel {}
}
