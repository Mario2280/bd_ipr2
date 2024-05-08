import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Like, Prisma } from '@prisma/client'
@Injectable()
export class LikeService extends BaseCrudService<
  Like,
  Prisma.LikeFindFirstArgs,
  Prisma.LikeFindUniqueArgs,
  Prisma.LikeFindManyArgs,
  Prisma.LikeGroupByArgs,
  Prisma.LikeAggregateArgs,
  Prisma.LikeCreateArgs,
  Prisma.LikeCreateManyArgs,
  Prisma.LikeUpdateArgs,
  Prisma.LikeUpdateManyArgs,
  Prisma.LikeDeleteArgs,
  Prisma.LikeDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Like[]> {
    throw new NotFoundException()
  }

 
}
