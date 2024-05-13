import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Transport, Prisma } from '@prisma/client'
@Injectable()
export class TransportService extends BaseCrudService<
  Transport,
  Prisma.TransportFindFirstArgs,
  Prisma.TransportFindUniqueArgs,
  Prisma.TransportFindManyArgs,
  Prisma.TransportGroupByArgs,
  Prisma.TransportAggregateArgs,
  Prisma.TransportCreateArgs,
  Prisma.TransportCreateManyArgs,
  Prisma.TransportUpdateArgs,
  Prisma.TransportUpdateManyArgs,
  Prisma.TransportDeleteArgs,
  Prisma.TransportDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Transport[]> {
    throw new NotFoundException()
  }

  async update(args: Partial<Prisma.TransportUpdateArgs>): Promise<Transport> {
    return this.prisma[this.modelName].update(args)
  }
}
