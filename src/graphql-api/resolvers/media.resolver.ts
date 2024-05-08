import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Media,
  FindFirstMediaArgs,
  FindUniqueMediaArgs,
  AggregateMedia,
  CreateOneMediaArgs,
  DeleteManyMediaArgs,
  DeleteOneMediaArgs,
  FindManyMediaArgs,
  UpdateOneMediaArgs,
  MediaAggregateArgs,
  MediaGroupByArgs,
  MediaGroupBy,
} from '../../dtos/index'
import { MediaService } from '../../shared/services/media.service'

@Resolver(() => Media)
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query(() => Media, { nullable: false })
  findFirstMedia(@Args() args: FindFirstMediaArgs) {
    this.mediaService.findFirst(args)
  }

  @Query(() => Media, { nullable: false })
  findUniqueMedia(@Args() args: FindUniqueMediaArgs) {
    return this.mediaService.findUnique(args)
  }

  @Query(() => [Media], { nullable: false })
  listsMedia(@Args() args: FindManyMediaArgs) {
    return this.mediaService.findMany(args)
  }

  @Query(() => [MediaGroupBy], { nullable: false })
  groupByMedia(@Args() args: MediaGroupByArgs) {
    return this.mediaService.groupBy(args)
  }

  @Query(() => AggregateMedia, { nullable: false })
  aggregateMedia(@Args() args: MediaAggregateArgs) {
    return this.mediaService.aggregate(args)
  }

  @Mutation(() => Media, { nullable: true })
  createMedia(@Args() args: CreateOneMediaArgs) {
    return this.mediaService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyMedia() {
    return this.mediaService.createMany()
  }

  @Mutation(() => Media, { nullable: true })
  updateMedia(@Args() args: UpdateOneMediaArgs) {
    return this.mediaService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyMedia() {
    return this.mediaService.updateMany()
  }

  @Mutation(() => Media, { nullable: true })
  deleteMedia(@Args() args: DeleteOneMediaArgs) {
    return this.mediaService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyMedia(@Args() args: DeleteManyMediaArgs) {
    return this.mediaService.deleteMany(args)
  }
}
