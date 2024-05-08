import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Subscription,
  FindFirstSubscriptionArgs,
  FindUniqueSubscriptionArgs,
  AggregateSubscription,
  CreateOneSubscriptionArgs,
  DeleteManySubscriptionArgs,
  DeleteOneSubscriptionArgs,
  FindManySubscriptionArgs,
  UpdateOneSubscriptionArgs,
  SubscriptionAggregateArgs,
  SubscriptionGroupByArgs,
  SubscriptionGroupBy,
} from '../../dtos/index'
import { SubscriptionService } from '../../shared/services/subscription.service'

@Resolver(() => Subscription)
export class SubscriptionResolver {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Query(() => Subscription, { nullable: false })
  findFirstSubscription(@Args() args: FindFirstSubscriptionArgs) {
    this.subscriptionService.findFirst(args)
  }

  @Query(() => Subscription, { nullable: false })
  findUniqueSubscription(@Args() args: FindUniqueSubscriptionArgs) {
    return this.subscriptionService.findUnique(args)
  }

  @Query(() => [Subscription], { nullable: false })
  listsSubscription(@Args() args: FindManySubscriptionArgs) {
    return this.subscriptionService.findMany(args)
  }

  @Query(() => [SubscriptionGroupBy], { nullable: false })
  groupBySubscription(@Args() args: SubscriptionGroupByArgs) {
    return this.subscriptionService.groupBy(args)
  }

  @Query(() => AggregateSubscription, { nullable: false })
  aggregateSubscription(@Args() args: SubscriptionAggregateArgs) {
    return this.subscriptionService.aggregate(args)
  }

  @Mutation(() => Subscription, { nullable: true })
  createSubscription(@Args() args: CreateOneSubscriptionArgs) {
    return this.subscriptionService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManySubscription() {
    return this.subscriptionService.createMany()
  }

  @Mutation(() => Subscription, { nullable: true })
  updateSubscription(@Args() args: UpdateOneSubscriptionArgs) {
    return this.subscriptionService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManySubscription() {
    return this.subscriptionService.updateMany()
  }

  @Mutation(() => Subscription, { nullable: true })
  deleteSubscription(@Args() args: DeleteOneSubscriptionArgs) {
    return this.subscriptionService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManySubscription(@Args() args: DeleteManySubscriptionArgs) {
    return this.subscriptionService.deleteMany(args)
  }
}
