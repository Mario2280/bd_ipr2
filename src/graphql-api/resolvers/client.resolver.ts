import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Client,
  FindFirstClientArgs,
  FindUniqueClientArgs,
  AggregateClient,
  CreateOneClientArgs,
  DeleteManyClientArgs,
  DeleteOneClientArgs,
  FindManyClientArgs,
  UpdateOneClientArgs,
  ClientAggregateArgs,
  ClientGroupByArgs,
  ClientGroupBy,
} from '../../dtos/index'
import { ClientService } from '../../shared/services/client.service'

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Query(() => Client, { nullable: false })
  findFirstClient(@Args() args: FindFirstClientArgs) {
    this.clientService.findFirst(args)
  }

  @Query(() => Client, { nullable: false })
  findUniqueClient(@Args() args: FindUniqueClientArgs) {
    return this.clientService.findUnique(args)
  }

  @Query(() => [Client], { nullable: false })
  listsClient(@Args() args: FindManyClientArgs) {
    return this.clientService.findMany(args)
  }

  @Query(() => [ClientGroupBy], { nullable: false })
  groupByClient(@Args() args: ClientGroupByArgs) {
    return this.clientService.groupBy(args)
  }

  @Query(() => AggregateClient, { nullable: false })
  aggregateClient(@Args() args: ClientAggregateArgs) {
    return this.clientService.aggregate(args)
  }

  @Mutation(() => Client, { nullable: true })
  createClient(@Args() args: CreateOneClientArgs) {
    return this.clientService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyClient() {
    return this.clientService.createMany()
  }

  @Mutation(() => Client, { nullable: true })
  updateClient(@Args() args: UpdateOneClientArgs) {
    return this.clientService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyClient() {
    return this.clientService.updateMany()
  }

  @Mutation(() => Client, { nullable: true })
  deleteClient(@Args() args: DeleteOneClientArgs) {
    return this.clientService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyClient(@Args() args: DeleteManyClientArgs) {
    return this.clientService.deleteMany(args)
  }
}
