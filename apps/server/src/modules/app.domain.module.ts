import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { PostDataDomainModule } from './postData/domain'

import { CommentDomainModule } from './comment/domain'

import { LikeDomainModule } from './like/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    PostDataDomainModule,

    CommentDomainModule,

    LikeDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
