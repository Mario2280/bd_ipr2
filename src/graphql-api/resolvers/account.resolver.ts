import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Account,
  FindFirstAccountArgs,
  FindUniqueAccountArgs,
  AggregateAccount,
  CreateOneAccountArgs,
  DeleteManyAccountArgs,
  DeleteOneAccountArgs,
  FindManyAccountArgs,
  UpdateOneAccountArgs,
  AccountAggregateArgs,
  AccountGroupByArgs,
  AccountGroupBy,
} from '../../dtos/index'
import { AccountService } from '../../shared/services/account.service'

@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Query(() => Account, { nullable: false })
  findFirstAccount(@Args() args: FindFirstAccountArgs) {
    this.accountService.findFirst(args)
  }

  @Query(() => Account, { nullable: false })
  findUniqueAccount(@Args() args: FindUniqueAccountArgs) {
    return this.accountService.findUnique(args)
  }

  @Query(() => [Account], { nullable: false })
  listsAccount(@Args() args: FindManyAccountArgs) {
    return this.accountService.findMany(args)
  }

  @Query(() => [AccountGroupBy], { nullable: false })
  groupByAccount(@Args() args: AccountGroupByArgs) {
    return this.accountService.groupBy(args)
  }

  @Query(() => AggregateAccount, { nullable: false })
  aggregateAccount(@Args() args: AccountAggregateArgs) {
    return this.accountService.aggregate(args)
  }

  @Mutation(() => Account, { nullable: true })
  createAccount(@Args() args: CreateOneAccountArgs) {
    return this.accountService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyAccount() {
    return this.accountService.createMany()
  }

  @Mutation(() => Account, { nullable: true })
  updateAccount(@Args() args: UpdateOneAccountArgs) {
    return this.accountService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyAccount() {
    return this.accountService.updateMany()
  }

  @Mutation(() => Account, { nullable: true })
  deleteAccount(@Args() args: DeleteOneAccountArgs) {
    return this.accountService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyAccount(@Args() args: DeleteManyAccountArgs) {
    return this.accountService.deleteMany(args)
  }
}
