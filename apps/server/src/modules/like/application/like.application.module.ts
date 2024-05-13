import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { LikeDomainModule } from '../domain'
import { LikeController } from './like.controller'

import { PostDataDomainModule } from '../../../modules/postData/domain'

import { LikeByPostDataController } from './likeByPostData.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { LikeByUserController } from './likeByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    LikeDomainModule,

    PostDataDomainModule,

    UserDomainModule,
  ],
  controllers: [LikeController, LikeByPostDataController, LikeByUserController],
  providers: [],
})
export class LikeApplicationModule {}
