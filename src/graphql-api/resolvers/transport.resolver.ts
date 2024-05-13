import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Transport,
  FindFirstTransportArgs,
  FindUniqueTransportArgs,
  AggregateTransport,
  CreateOneTransportArgs,
  DeleteManyTransportArgs,
  DeleteOneTransportArgs,
  FindManyTransportArgs,
  UpdateOneTransportArgs,
  TransportAggregateArgs,
  TransportGroupByArgs,
  TransportGroupBy,
} from '../../dtos/index'
import { TransportService } from '../../shared/services/transport.service'

@Resolver(() => Transport)
export class TransportResolver {
  constructor(private readonly transportService: TransportService) {}

  @Query(() => Transport, { nullable: false })
  findFirstTransport(@Args() args: FindFirstTransportArgs) {
    this.transportService.findFirst(args)
  }

  @Query(() => Transport, { nullable: false })
  findUniqueTransport(@Args() args: FindUniqueTransportArgs) {
    return this.transportService.findUnique(args)
  }

  @Query(() => [Transport], { nullable: false })
  listsTransport(@Args() args: FindManyTransportArgs) {
    return this.transportService.findMany(args)
  }

  @Query(() => [TransportGroupBy], { nullable: false })
  groupByTransport(@Args() args: TransportGroupByArgs) {
    return this.transportService.groupBy(args)
  }

  @Query(() => AggregateTransport, { nullable: false })
  aggregateTransport(@Args() args: TransportAggregateArgs) {
    return this.transportService.aggregate(args)
  }

  @Mutation(() => Transport, { nullable: true })
  createTransport(@Args() args: CreateOneTransportArgs) {
    return this.transportService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyTransport() {
    return this.transportService.createMany()
  }

  @Mutation(() => Transport, { nullable: true })
  updateTransport(@Args() args: UpdateOneTransportArgs) {
    return this.transportService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyTransport() {
    return this.transportService.updateMany()
  }

  @Mutation(() => Transport, { nullable: true })
  deleteTransport(@Args() args: DeleteOneTransportArgs) {
    return this.transportService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyTransport(@Args() args: DeleteManyTransportArgs) {
    return this.transportService.deleteMany(args)
  }
}
