import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Client, Prisma } from '@prisma/client'

@Injectable()
export class ClientService extends BaseCrudService<
  Client,
  Prisma.ClientFindFirstArgs,
  Prisma.ClientFindUniqueArgs,
  Prisma.ClientFindManyArgs,
  Prisma.ClientGroupByArgs,
  Prisma.ClientAggregateArgs,
  Prisma.ClientCreateArgs,
  Prisma.ClientCreateManyArgs,
  Prisma.ClientUpdateArgs,
  Prisma.ClientUpdateManyArgs,
  Prisma.ClientDeleteArgs,
  Prisma.ClientDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Client[]> {
    throw new NotFoundException()
  }

  
}
