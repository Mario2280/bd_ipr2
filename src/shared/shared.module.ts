import { Module } from "@nestjs/common";
import { LikeService } from "./services/like.service";
import { PrismaService } from "../prisma/prisma.service";
import { UserService } from "./services/user.service";
import { BlockService } from './services/block.service';
import { MatchService } from './services/match.service';
import { MediaService } from './services/media.service';
import { MessageService } from './services/message.service';
import { VisitService } from './services/visit.service';
import { SubscriptionService } from './services/subscription.service';
import { NotificationService } from './services/notification.service';
import { SettingService } from './services/setting.service';
import { ReportService } from './services/report.service';

@Module({
  imports: [],
  providers: [
    PrismaService,
    BlockService,
    LikeService,
    MatchService,
    MediaService,
    MessageService,
    NotificationService,
    ReportService,
    SettingService,
    SubscriptionService,
    UserService,
    VisitService,
  ],
  exports: [
    PrismaService,
    BlockService,
    LikeService,
    MatchService,
    MediaService,
    MessageService,
    NotificationService,
    ReportService,
    SettingService,
    SubscriptionService,
    UserService,
    VisitService,
  ],
})
export class SharedModule {}