import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Message, Prisma } from '@prisma/client'
@Injectable()
export class MessageService extends BaseCrudService<
  Message,
  Prisma.MessageFindFirstArgs,
  Prisma.MessageFindUniqueArgs,
  Prisma.MessageFindManyArgs,
  Prisma.MessageGroupByArgs,
  Prisma.MessageAggregateArgs,
  Prisma.MessageCreateArgs,
  Prisma.MessageCreateManyArgs,
  Prisma.MessageUpdateArgs,
  Prisma.MessageUpdateManyArgs,
  Prisma.MessageDeleteArgs,
  Prisma.MessageDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Message[]> {
    throw new NotFoundException()
  }

  
}
