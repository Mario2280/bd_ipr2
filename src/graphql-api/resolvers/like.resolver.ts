import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Like,
  FindFirstLikeArgs,
  FindUniqueLikeArgs,
  AggregateLike,
  CreateOneLikeArgs,
  DeleteManyLikeArgs,
  DeleteOneLikeArgs,
  FindManyLikeArgs,
  UpdateOneLikeArgs,
  LikeAggregateArgs,
  LikeGroupByArgs,
  LikeGroupBy,
} from '../../dtos/index'
import { LikeService } from '../../shared/services/like.service'

@Resolver(() => Like)
export class LikeResolver {
  constructor(private readonly likeService: LikeService) {}

  @Query(() => Like, { nullable: false })
  findFirstLike(@Args() args: FindFirstLikeArgs) {
    this.likeService.findFirst(args)
  }

  @Query(() => Like, { nullable: false })
  findUniqueLike(@Args() args: FindUniqueLikeArgs) {
    return this.likeService.findUnique(args)
  }

  @Query(() => [Like], { nullable: false })
  listsLike(@Args() args: FindManyLikeArgs) {
    return this.likeService.findMany(args)
  }

  @Query(() => [LikeGroupBy], { nullable: false })
  groupByLike(@Args() args: LikeGroupByArgs) {
    return this.likeService.groupBy(args)
  }

  @Query(() => AggregateLike, { nullable: false })
  aggregateLike(@Args() args: LikeAggregateArgs) {
    return this.likeService.aggregate(args)
  }

  @Mutation(() => Like, { nullable: true })
  createLike(@Args() args: CreateOneLikeArgs) {
    return this.likeService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyLike() {
    return this.likeService.createMany()
  }

  @Mutation(() => Like, { nullable: true })
  updateLike(@Args() args: UpdateOneLikeArgs) {
    return this.likeService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyLike() {
    return this.likeService.updateMany()
  }

  @Mutation(() => Like, { nullable: true })
  deleteLike(@Args() args: DeleteOneLikeArgs) {
    return this.likeService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyLike(@Args() args: DeleteManyLikeArgs) {
    return this.likeService.deleteMany(args)
  }
}
