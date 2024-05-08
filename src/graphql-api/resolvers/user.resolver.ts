import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  User,
  FindFirstUserArgs,
  FindUniqueUserArgs,
  AggregateUser,
  CreateOneUserArgs,
  DeleteManyUserArgs,
  DeleteOneUserArgs,
  FindManyUserArgs,
  UpdateOneUserArgs,
  UserAggregateArgs,
  UserGroupByArgs,
  UserGroupBy,
} from '../../dtos/index'
import { UserService } from '../../shared/services/user.service'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { nullable: false })
  findFirstUser(@Args() args: FindFirstUserArgs) {
    this.userService.findFirst(args)
  }

  @Query(() => User, { nullable: false })
  findUniqueUser(@Args() args: FindUniqueUserArgs) {
    return this.userService.findUnique(args)
  }

  @Query(() => [User], { nullable: false })
  listsUser(@Args() args: FindManyUserArgs) {
    return this.userService.findMany(args)
  }

  @Query(() => [UserGroupBy], { nullable: false })
  groupByUser(@Args() args: UserGroupByArgs) {
    return this.userService.groupBy(args)
  }

  @Query(() => AggregateUser, { nullable: false })
  aggregateUser(@Args() args: UserAggregateArgs) {
    return this.userService.aggregate(args)
  }

  @Mutation(() => User, { nullable: true })
  createUser(@Args() args: CreateOneUserArgs) {
    return this.userService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyUser() {
    return this.userService.createMany()
  }

  @Mutation(() => User, { nullable: true })
  updateUser(@Args() args: UpdateOneUserArgs) {
    return this.userService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyUser() {
    return this.userService.updateMany()
  }

  @Mutation(() => User, { nullable: true })
  deleteUser(@Args() args: DeleteOneUserArgs) {
    return this.userService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyUser(@Args() args: DeleteManyUserArgs) {
    return this.userService.deleteMany(args)
  }
}
