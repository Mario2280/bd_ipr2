import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Match, Prisma } from '@prisma/client'
@Injectable()
export class MatchService extends BaseCrudService<
  Match,
  Prisma.MatchFindFirstArgs,
  Prisma.MatchFindUniqueArgs,
  Prisma.MatchFindManyArgs,
  Prisma.MatchGroupByArgs,
  Prisma.MatchAggregateArgs,
  Prisma.MatchCreateArgs,
  Prisma.MatchCreateManyArgs,
  Prisma.MatchUpdateArgs,
  Prisma.MatchUpdateManyArgs,
  Prisma.MatchDeleteArgs,
  Prisma.MatchDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Match[]> {
    throw new NotFoundException()
  }

  
}
