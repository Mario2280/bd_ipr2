import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  Visit,
  AffectedRows,
  FindFirstVisitArgs,
  FindUniqueVisitArgs,
  AggregateVisit,
  CreateOneVisitArgs,
  DeleteManyVisitArgs,
  DeleteOneVisitArgs,
  FindManyVisitArgs,
  UpdateOneVisitArgs,
  VisitAggregateArgs,
  VisitGroupByArgs,
  VisitGroupBy,
} from '../../dtos/index'
import { VisitService } from '../../shared/services/visit.service'

@Resolver(() => Visit)
export class VisitResolver {
  constructor(private readonly visitService: VisitService) {}

  @Query(() => Visit, { nullable: false })
  findFirstVisit(@Args() args: FindFirstVisitArgs) {
    this.visitService.findFirst(args)
  }

  @Query(() => Visit, { nullable: false })
  findUniqueVisit(@Args() args: FindUniqueVisitArgs) {
    return this.visitService.findUnique(args)
  }

  @Query(() => [Visit], { nullable: false })
  listsVisit(@Args() args: FindManyVisitArgs) {
    return this.visitService.findMany(args)
  }

  @Query(() => [VisitGroupBy], { nullable: false })
  groupByVisit(@Args() args: VisitGroupByArgs) {
    return this.visitService.groupBy(args)
  }

  @Query(() => AggregateVisit, { nullable: false })
  aggregateVisit(@Args() args: VisitAggregateArgs) {
    return this.visitService.aggregate(args)
  }

  @Mutation(() => Visit, { nullable: true })
  createVisit(@Args() args: CreateOneVisitArgs) {
    return this.visitService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyVisit() {
    return this.visitService.createMany()
  }

  @Mutation(() => Visit, { nullable: true })
  updateVisit(@Args() args: UpdateOneVisitArgs) {
    return this.visitService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyVisit() {
    return this.visitService.updateMany()
  }

  @Mutation(() => Visit, { nullable: true })
  deleteVisit(@Args() args: DeleteOneVisitArgs) {
    return this.visitService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyVisit(@Args() args: DeleteManyVisitArgs) {
    return this.visitService.deleteMany(args)
  }
}
