/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common'
import { SharedModule } from '../shared/shared.module'
import { BlockResolver } from './resolvers/block.resolver'
import { LikeResolver } from './resolvers/like.resolver'
import { MatchResolver } from './resolvers/match.resolver'
import { MediaResolver } from './resolvers/media.resolver'
import { MessageResolver } from './resolvers/message.resolver'
import { NotificationResolver } from './resolvers/notification.resolver'
import { ReportResolver } from './resolvers/report.resolver'
import { SettingResolver } from './resolvers/setting.resolver'
import { SubscriptionResolver } from './resolvers/subscription.resolver'
import { UserResolver } from './resolvers/user.resolver'
import { VisitResolver } from './resolvers/visit.resolver'

@Module({
  imports: [SharedModule],
  controllers: [],
  providers: [
    BlockResolver,
    LikeResolver,
    MatchResolver,
    MediaResolver,
    MessageResolver,
    NotificationResolver,
    ReportResolver,
    SettingResolver,
    SubscriptionResolver,
    UserResolver,
    VisitResolver,
  ],
})
export class GraphqlApiModule {}
