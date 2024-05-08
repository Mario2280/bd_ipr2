import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Notification, Prisma } from '@prisma/client'
@Injectable()
export class NotificationService extends BaseCrudService<
  Notification,
  Prisma.NotificationFindFirstArgs,
  Prisma.NotificationFindUniqueArgs,
  Prisma.NotificationFindManyArgs,
  Prisma.NotificationGroupByArgs,
  Prisma.NotificationAggregateArgs,
  Prisma.NotificationCreateArgs,
  Prisma.NotificationCreateManyArgs,
  Prisma.NotificationUpdateArgs,
  Prisma.NotificationUpdateManyArgs,
  Prisma.NotificationDeleteArgs,
  Prisma.NotificationDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Notification[]> {
    throw new NotFoundException()
  }

  
}
