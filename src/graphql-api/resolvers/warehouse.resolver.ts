import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Warehouse,
  FindFirstWarehouseArgs,
  FindUniqueWarehouseArgs,
  AggregateWarehouse,
  CreateOneWarehouseArgs,
  DeleteManyWarehouseArgs,
  DeleteOneWarehouseArgs,
  FindManyWarehouseArgs,
  UpdateOneWarehouseArgs,
  WarehouseAggregateArgs,
  WarehouseGroupByArgs,
  WarehouseGroupBy,
} from '../../dtos/index'
import { WarehouseService } from '../../shared/services/warehouse.service'

@Resolver(() => Warehouse)
export class WarehouseResolver {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Query(() => Warehouse, { nullable: false })
  findFirstWarehouse(@Args() args: FindFirstWarehouseArgs) {
    this.warehouseService.findFirst(args)
  }

  @Query(() => Warehouse, { nullable: false })
  findUniqueWarehouse(@Args() args: FindUniqueWarehouseArgs) {
    return this.warehouseService.findUnique(args)
  }

  @Query(() => [Warehouse], { nullable: false })
  listsWarehouse(@Args() args: FindManyWarehouseArgs) {
    return this.warehouseService.findMany(args)
  }

  @Query(() => [WarehouseGroupBy], { nullable: false })
  groupByWarehouse(@Args() args: WarehouseGroupByArgs) {
    return this.warehouseService.groupBy(args)
  }

  @Query(() => AggregateWarehouse, { nullable: false })
  aggregateWarehouse(@Args() args: WarehouseAggregateArgs) {
    return this.warehouseService.aggregate(args)
  }

  @Mutation(() => Warehouse, { nullable: true })
  createWarehouse(@Args() args: CreateOneWarehouseArgs) {
    return this.warehouseService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyWarehouse() {
    return this.warehouseService.createMany()
  }

  @Mutation(() => Warehouse, { nullable: true })
  updateWarehouse(@Args() args: UpdateOneWarehouseArgs) {
    return this.warehouseService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyWarehouse() {
    return this.warehouseService.updateMany()
  }

  @Mutation(() => Warehouse, { nullable: true })
  deleteWarehouse(@Args() args: DeleteOneWarehouseArgs) {
    return this.warehouseService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyWarehouse(@Args() args: DeleteManyWarehouseArgs) {
    return this.warehouseService.deleteMany(args)
  }
}
