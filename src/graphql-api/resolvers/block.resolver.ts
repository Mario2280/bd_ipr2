import { AffectedRows,
  Block,
  FindFirstBlockArgs,
  FindUniqueBlockArgs,
  AggregateBlock,
  CreateOneBlockArgs,
  DeleteManyBlockArgs,
  DeleteOneBlockArgs,
  FindManyBlockArgs,
  UpdateOneBlockArgs,
  BlockAggregateArgs,
  BlockGroupByArgs,
  BlockGroupBy
 } from '../../dtos/index'
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { BlockService } from '../../shared/services/block.service'

@Resolver(() => Block)
export class BlockResolver {
  constructor(private readonly blockService: BlockService) {}

  @Query(() => Block, { nullable: false })
  findFirstBlock(@Args() args: FindFirstBlockArgs) {
    this.blockService.findFirst(args)
  }

  @Query(() => Block, { nullable: false })
  findUniqueBlock(@Args() args: FindUniqueBlockArgs) {
    return this.blockService.findUnique(args)
  }

  @Query(() => [Block], { nullable: false })
  listsBlock(@Args() args: FindManyBlockArgs) {
    return this.blockService.findMany(args)
  }

  @Query(() => [BlockGroupBy], { nullable: false })
  groupByBlock(@Args() args: BlockGroupByArgs) {
    return this.blockService.groupBy(args)
  }

  @Query(() => AggregateBlock, { nullable: false })
  aggregateBlock(@Args() args: BlockAggregateArgs) {
    return this.blockService.aggregate(args)
  }

  @Mutation(() => Block, { nullable: true })
  createBlock(@Args() args: CreateOneBlockArgs) {
    return this.blockService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyBlock() {
    return this.blockService.createMany()
  }

  @Mutation(() => Block, { nullable: true })
  updateBlock(@Args() args: UpdateOneBlockArgs) {
    return this.blockService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyBlock() {
    return this.blockService.updateMany()
  }

  @Mutation(() => Block, { nullable: true })
  deleteBlock(@Args() args: DeleteOneBlockArgs) {
    return this.blockService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyBlock(@Args() args: DeleteManyBlockArgs) {
    return this.blockService.deleteMany(args)
  }
}
