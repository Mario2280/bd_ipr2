import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Order,
  FindFirstOrderArgs,
  FindUniqueOrderArgs,
  AggregateOrder,
  CreateOneOrderArgs,
  DeleteManyOrderArgs,
  DeleteOneOrderArgs,
  FindManyOrderArgs,
  UpdateOneOrderArgs,
  OrderAggregateArgs,
  OrderGroupByArgs,
  OrderGroupBy,
} from '../../dtos/index'
import { OrderService } from '../../shared/services/order.service'
import PrismaSelect from 'src/decorators/prisma-select'
import { Prisma } from '@prisma/client'

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query(() => Order, { nullable: false })
  findFirstOrder(@Args() args: FindFirstOrderArgs) {
    this.orderService.findFirst(args)
  }

  @Query(() => Order, { nullable: false })
  findUniqueOrder(@Args() args: FindUniqueOrderArgs) {
    return this.orderService.findUnique(args)
  }

  @Query(() => [Order], { nullable: false })
  listsOrder(
    @Args() args: FindManyOrderArgs,
    @PrismaSelect() select: Prisma.OrderSelect,
  ) {
    return this.orderService.findMany({
      ...args,
      select
    })
  }

  @Query(() => [OrderGroupBy], { nullable: false })
  groupByOrder(@Args() args: OrderGroupByArgs) {
    return this.orderService.groupBy(args)
  }

  @Query(() => AggregateOrder, { nullable: false })
  aggregateOrder(@Args() args: OrderAggregateArgs) {
    return this.orderService.aggregate(args)
  }

  @Mutation(() => Order, { nullable: true })
  createOrder(@Args() args: CreateOneOrderArgs) {
    return this.orderService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyOrder() {
    return this.orderService.createMany()
  }

  @Mutation(() => Order, { nullable: true })
  updateOrder(@Args() args: UpdateOneOrderArgs) {
    return this.orderService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyOrder() {
    return this.orderService.updateMany()
  }

  @Mutation(() => Order, { nullable: true })
  deleteOrder(@Args() args: DeleteOneOrderArgs) {
    return this.orderService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyOrder(@Args() args: DeleteManyOrderArgs) {
    return this.orderService.deleteMany(args)
  }
}
