import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Company,
  FindFirstCompanyArgs,
  FindUniqueCompanyArgs,
  AggregateCompany,
  CreateOneCompanyArgs,
  DeleteManyCompanyArgs,
  DeleteOneCompanyArgs,
  FindManyCompanyArgs,
  UpdateOneCompanyArgs,
  CompanyAggregateArgs,
  CompanyGroupByArgs,
  CompanyGroupBy,
} from '../../dtos/index'
import { CompanyService } from '../../shared/services/company.service'

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query(() => Company, { nullable: false })
  findFirstCompany(@Args() args: FindFirstCompanyArgs) {
    this.companyService.findFirst(args)
  }

  @Query(() => Company, { nullable: false })
  findUniqueCompany(@Args() args: FindUniqueCompanyArgs) {
    return this.companyService.findUnique(args)
  }

  @Query(() => [Company], { nullable: false })
  listsCompany(@Args() args: FindManyCompanyArgs) {
    return this.companyService.findMany(args)
  }

  @Query(() => [CompanyGroupBy], { nullable: false })
  groupByCompany(@Args() args: CompanyGroupByArgs) {
    return this.companyService.groupBy(args)
  }

  @Query(() => AggregateCompany, { nullable: false })
  aggregateCompany(@Args() args: CompanyAggregateArgs) {
    return this.companyService.aggregate(args)
  }

  @Mutation(() => Company, { nullable: true })
  createCompany(@Args() args: CreateOneCompanyArgs) {
    return this.companyService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyCompany() {
    return this.companyService.createMany()
  }

  @Mutation(() => Company, { nullable: true })
  updateCompany(@Args() args: UpdateOneCompanyArgs) {
    return this.companyService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyCompany() {
    return this.companyService.updateMany()
  }

  @Mutation(() => Company, { nullable: true })
  deleteCompany(@Args() args: DeleteOneCompanyArgs) {
    return this.companyService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyCompany(@Args() args: DeleteManyCompanyArgs) {
    return this.companyService.deleteMany(args)
  }
}
