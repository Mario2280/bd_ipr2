import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Order, Prisma } from '@prisma/client'
@Injectable()
export class OrderService extends BaseCrudService<
  Order,
  Prisma.OrderFindFirstArgs,
  Prisma.OrderFindUniqueArgs,
  Prisma.OrderFindManyArgs,
  Prisma.OrderGroupByArgs,
  Prisma.OrderAggregateArgs,
  Prisma.OrderCreateArgs,
  Prisma.OrderCreateManyArgs,
  Prisma.OrderUpdateArgs,
  Prisma.OrderUpdateManyArgs,
  Prisma.OrderDeleteArgs,
  Prisma.OrderDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Order[]> {
    throw new NotFoundException()
  }

  
}
