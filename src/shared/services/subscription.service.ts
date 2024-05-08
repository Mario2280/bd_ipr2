import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Subscription, Prisma } from '@prisma/client'
@Injectable()
export class SubscriptionService extends BaseCrudService<
  Subscription,
  Prisma.SubscriptionFindFirstArgs,
  Prisma.SubscriptionFindUniqueArgs,
  Prisma.SubscriptionFindManyArgs,
  Prisma.SubscriptionGroupByArgs,
  Prisma.SubscriptionAggregateArgs,
  Prisma.SubscriptionCreateArgs,
  Prisma.SubscriptionCreateManyArgs,
  Prisma.SubscriptionUpdateArgs,
  Prisma.SubscriptionUpdateManyArgs,
  Prisma.SubscriptionDeleteArgs,
  Prisma.SubscriptionDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Subscription[]> {
    throw new NotFoundException()
  }

  
}
