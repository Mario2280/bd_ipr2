import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Match,
  FindFirstMatchArgs,
  FindUniqueMatchArgs,
  AggregateMatch,
  CreateOneMatchArgs,
  DeleteManyMatchArgs,
  DeleteOneMatchArgs,
  FindManyMatchArgs,
  UpdateOneMatchArgs,
  MatchAggregateArgs,
  MatchGroupByArgs,
  MatchGroupBy,
} from '../../dtos/index'
import { MatchService } from '../../shared/services/match.service'

@Resolver(() => Match)
export class MatchResolver {
  constructor(private readonly matchService: MatchService) {}

  @Query(() => Match, { nullable: false })
  findFirstMatch(@Args() args: FindFirstMatchArgs) {
    this.matchService.findFirst(args)
  }

  @Query(() => Match, { nullable: false })
  findUniqueMatch(@Args() args: FindUniqueMatchArgs) {
    return this.matchService.findUnique(args)
  }

  @Query(() => [Match], { nullable: false })
  listsMatch(@Args() args: FindManyMatchArgs) {
    return this.matchService.findMany(args)
  }

  @Query(() => [MatchGroupBy], { nullable: false })
  groupByMatch(@Args() args: MatchGroupByArgs) {
    return this.matchService.groupBy(args)
  }

  @Query(() => AggregateMatch, { nullable: false })
  aggregateMatch(@Args() args: MatchAggregateArgs) {
    return this.matchService.aggregate(args)
  }

  @Mutation(() => Match, { nullable: true })
  createMatch(@Args() args: CreateOneMatchArgs) {
    return this.matchService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyMatch() {
    return this.matchService.createMany()
  }

  @Mutation(() => Match, { nullable: true })
  updateMatch(@Args() args: UpdateOneMatchArgs) {
    return this.matchService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyMatch() {
    return this.matchService.updateMany()
  }

  @Mutation(() => Match, { nullable: true })
  deleteMatch(@Args() args: DeleteOneMatchArgs) {
    return this.matchService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyMatch(@Args() args: DeleteManyMatchArgs) {
    return this.matchService.deleteMany(args)
  }
}
