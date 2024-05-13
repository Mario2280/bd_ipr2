import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Supplier, Prisma } from '@prisma/client'
@Injectable()
export class SupplierService extends BaseCrudService<
  Supplier,
  Prisma.SupplierFindFirstArgs,
  Prisma.SupplierFindUniqueArgs,
  Prisma.SupplierFindManyArgs,
  Prisma.SupplierGroupByArgs,
  Prisma.SupplierAggregateArgs,
  Prisma.SupplierCreateArgs,
  Prisma.SupplierCreateManyArgs,
  Prisma.SupplierUpdateArgs,
  Prisma.SupplierUpdateManyArgs,
  Prisma.SupplierDeleteArgs,
  Prisma.SupplierDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Supplier[]> {
    throw new NotFoundException()
  }

  
}
