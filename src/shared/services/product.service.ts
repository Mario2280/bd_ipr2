import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Product, Prisma } from '@prisma/client'
@Injectable()
export class ProductService extends BaseCrudService<
  Product,
  Prisma.ProductFindFirstArgs,
  Prisma.ProductFindUniqueArgs,
  Prisma.ProductFindManyArgs,
  Prisma.ProductGroupByArgs,
  Prisma.ProductAggregateArgs,
  Prisma.ProductCreateArgs,
  Prisma.ProductCreateManyArgs,
  Prisma.ProductUpdateArgs,
  Prisma.ProductUpdateManyArgs,
  Prisma.ProductDeleteArgs,
  Prisma.ProductDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Product[]> {
    throw new NotFoundException()
  }

 
}
