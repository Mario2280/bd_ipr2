import { AffectedRows,
  Supplier,
  FindFirstSupplierArgs,
  FindUniqueSupplierArgs,
  AggregateSupplier,
  CreateOneSupplierArgs,
  DeleteManySupplierArgs,
  DeleteOneSupplierArgs,
  FindManySupplierArgs,
  UpdateOneSupplierArgs,
  SupplierAggregateArgs,
  SupplierGroupByArgs,
  SupplierGroupBy
 } from '../../dtos/index'
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { SupplierService } from '../../shared/services/supplier.service'

@Resolver(() => Supplier)
export class SupplierResolver {
  constructor(private readonly supplierService: SupplierService) {}

  @Query(() => Supplier, { nullable: false })
  findFirstSupplier(@Args() args: FindFirstSupplierArgs) {
    this.supplierService.findFirst(args)
  }

  @Query(() => Supplier, { nullable: false })
  findUniqueSupplier(@Args() args: FindUniqueSupplierArgs) {
    return this.supplierService.findUnique(args)
  }

  @Query(() => [Supplier], { nullable: false })
  listsSupplier(@Args() args: FindManySupplierArgs) {
    return this.supplierService.findMany(args)
  }

  @Query(() => [SupplierGroupBy], { nullable: false })
  groupBySupplier(@Args() args: SupplierGroupByArgs) {
    return this.supplierService.groupBy(args)
  }

  @Query(() => AggregateSupplier, { nullable: false })
  aggregateSupplier(@Args() args: SupplierAggregateArgs) {
    return this.supplierService.aggregate(args)
  }

  @Mutation(() => Supplier, { nullable: true })
  createSupplier(@Args() args: CreateOneSupplierArgs) {
    return this.supplierService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManySupplier() {
    return this.supplierService.createMany()
  }

  @Mutation(() => Supplier, { nullable: true })
  updateSupplier(@Args() args: UpdateOneSupplierArgs) {
    return this.supplierService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManySupplier() {
    return this.supplierService.updateMany()
  }

  @Mutation(() => Supplier, { nullable: true })
  deleteSupplier(@Args() args: DeleteOneSupplierArgs) {
    return this.supplierService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManySupplier(@Args() args: DeleteManySupplierArgs) {
    return this.supplierService.deleteMany(args)
  }
}
