import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationPostDataSubscriber } from './subscribers/notification.postData.subscriber'

import { NotificationCommentSubscriber } from './subscribers/notification.comment.subscriber'

import { NotificationLikeSubscriber } from './subscribers/notification.like.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationPostDataSubscriber,

    NotificationCommentSubscriber,

    NotificationLikeSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
