import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Warehouse, Prisma } from '@prisma/client'
@Injectable()
export class WarehouseService extends BaseCrudService<
  Warehouse,
  Prisma.WarehouseFindFirstArgs,
  Prisma.WarehouseFindUniqueArgs,
  Prisma.WarehouseFindManyArgs,
  Prisma.WarehouseGroupByArgs,
  Prisma.WarehouseAggregateArgs,
  Prisma.WarehouseCreateArgs,
  Prisma.WarehouseCreateManyArgs,
  Prisma.WarehouseUpdateArgs,
  Prisma.WarehouseUpdateManyArgs,
  Prisma.WarehouseDeleteArgs,
  Prisma.WarehouseDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Warehouse[]> {
    throw new NotFoundException()
  }

  async update(args: Partial<Prisma.WarehouseUpdateArgs>): Promise<Warehouse> {
    return this.prisma[this.modelName].update(args)
  }
}
