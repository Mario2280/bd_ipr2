import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Notification,
  FindFirstNotificationArgs,
  FindUniqueNotificationArgs,
  AggregateNotification,
  CreateOneNotificationArgs,
  DeleteManyNotificationArgs,
  DeleteOneNotificationArgs,
  FindManyNotificationArgs,
  UpdateOneNotificationArgs,
  NotificationAggregateArgs,
  NotificationGroupByArgs,
  NotificationGroupBy,
} from '../../dtos/index'
import { NotificationService } from '../../shared/services/notification.service'

@Resolver(() => Notification)
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Query(() => Notification, { nullable: false })
  findFirstNotification(@Args() args: FindFirstNotificationArgs) {
    this.notificationService.findFirst(args)
  }

  @Query(() => Notification, { nullable: false })
  findUniqueNotification(@Args() args: FindUniqueNotificationArgs) {
    return this.notificationService.findUnique(args)
  }

  @Query(() => [Notification], { nullable: false })
  listsNotification(@Args() args: FindManyNotificationArgs) {
    return this.notificationService.findMany(args)
  }

  @Query(() => [NotificationGroupBy], { nullable: false })
  groupByNotification(@Args() args: NotificationGroupByArgs) {
    return this.notificationService.groupBy(args)
  }

  @Query(() => AggregateNotification, { nullable: false })
  aggregateNotification(@Args() args: NotificationAggregateArgs) {
    return this.notificationService.aggregate(args)
  }

  @Mutation(() => Notification, { nullable: true })
  createNotification(@Args() args: CreateOneNotificationArgs) {
    return this.notificationService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyNotification() {
    return this.notificationService.createMany()
  }

  @Mutation(() => Notification, { nullable: true })
  updateNotification(@Args() args: UpdateOneNotificationArgs) {
    return this.notificationService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyNotification() {
    return this.notificationService.updateMany()
  }

  @Mutation(() => Notification, { nullable: true })
  deleteNotification(@Args() args: DeleteOneNotificationArgs) {
    return this.notificationService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyNotification(@Args() args: DeleteManyNotificationArgs) {
    return this.notificationService.deleteMany(args)
  }
}
