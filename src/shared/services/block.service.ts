import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Block, Prisma } from '@prisma/client'
@Injectable()
export class BlockService extends BaseCrudService<
  Block,
  Prisma.BlockFindFirstArgs,
  Prisma.BlockFindUniqueArgs,
  Prisma.BlockFindManyArgs,
  Prisma.BlockGroupByArgs,
  Prisma.BlockAggregateArgs,
  Prisma.BlockCreateArgs,
  Prisma.BlockCreateManyArgs,
  Prisma.BlockUpdateArgs,
  Prisma.BlockUpdateManyArgs,
  Prisma.BlockDeleteArgs,
  Prisma.BlockDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Block[]> {
    throw new NotFoundException()
  }

  
}
