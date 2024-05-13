import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Product,
  FindFirstProductArgs,
  FindUniqueProductArgs,
  AggregateProduct,
  CreateOneProductArgs,
  DeleteManyProductArgs,
  DeleteOneProductArgs,
  FindManyProductArgs,
  UpdateOneProductArgs,
  ProductAggregateArgs,
  ProductGroupByArgs,
  ProductGroupBy,
} from '../../dtos/index'
import { ProductService } from '../../shared/services/product.service'
import PrismaSelect from 'src/decorators/prisma-select'
import { Prisma } from '@prisma/client'

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => Product, { nullable: false })
  findFirstProduct(@Args() args: FindFirstProductArgs) {
    this.productService.findFirst(args)
  }

  @Query(() => Product, { nullable: false })
  findUniqueProduct(@Args() args: FindUniqueProductArgs) {
    return this.productService.findUnique(args)
  }

  @Query(() => [Product], { nullable: false })
  listsProduct(@Args() args: FindManyProductArgs,
    @PrismaSelect() select: Prisma.OrderSelect,
) {
    return this.productService.findMany({
      ...args,
      select,
    })
  }

  @Query(() => [ProductGroupBy], { nullable: false })
  groupByProduct(@Args() args: ProductGroupByArgs) {
    return this.productService.groupBy(args)
  }

  @Query(() => AggregateProduct, { nullable: false })
  aggregateProduct(@Args() args: ProductAggregateArgs) {
    return this.productService.aggregate(args)
  }

  @Mutation(() => Product, { nullable: true })
  createProduct(@Args() args: CreateOneProductArgs) {
    return this.productService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyProduct() {
    return this.productService.createMany()
  }

  @Mutation(() => Product, { nullable: true })
  updateProduct(@Args() args: UpdateOneProductArgs) {
    return this.productService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyProduct() {
    return this.productService.updateMany()
  }

  @Mutation(() => Product, { nullable: true })
  deleteProduct(@Args() args: DeleteOneProductArgs) {
    return this.productService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyProduct(@Args() args: DeleteManyProductArgs) {
    return this.productService.deleteMany(args)
  }
}
