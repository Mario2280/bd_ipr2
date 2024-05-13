import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Staff,
  FindFirstStaffArgs,
  FindUniqueStaffArgs,
  AggregateStaff,
  CreateOneStaffArgs,
  DeleteManyStaffArgs,
  DeleteOneStaffArgs,
  FindManyStaffArgs,
  UpdateOneStaffArgs,
  StaffAggregateArgs,
  StaffGroupByArgs,
  StaffGroupBy,
} from '../../dtos/index'
import { StaffService } from '../../shared/services/straff.service'

@Resolver(() => Staff)
export class StaffResolver {
  constructor(private readonly staffService: StaffService) {}

  @Query(() => Staff, { nullable: false })
  findFirstStaff(@Args() args: FindFirstStaffArgs) {
    this.staffService.findFirst(args)
  }

  @Query(() => Staff, { nullable: false })
  findUniqueStaff(@Args() args: FindUniqueStaffArgs) {
    return this.staffService.findUnique(args)
  }

  @Query(() => [Staff], { nullable: false })
  listsStaff(@Args() args: FindManyStaffArgs) {
    return this.staffService.findMany(args)
  }

  @Query(() => [StaffGroupBy], { nullable: false })
  groupByStaff(@Args() args: StaffGroupByArgs) {
    return this.staffService.groupBy(args)
  }

  @Query(() => AggregateStaff, { nullable: false })
  aggregateStaff(@Args() args: StaffAggregateArgs) {
    return this.staffService.aggregate(args)
  }

  @Mutation(() => Staff, { nullable: true })
  createStaff(@Args() args: CreateOneStaffArgs) {
    return this.staffService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyStaff() {
    return this.staffService.createMany()
  }

  @Mutation(() => Staff, { nullable: true })
  updateStaff(@Args() args: UpdateOneStaffArgs) {
    return this.staffService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyStaff() {
    return this.staffService.updateMany()
  }

  @Mutation(() => Staff, { nullable: true })
  deleteStaff(@Args() args: DeleteOneStaffArgs) {
    return this.staffService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyStaff(@Args() args: DeleteManyStaffArgs) {
    return this.staffService.deleteMany(args)
  }
}
