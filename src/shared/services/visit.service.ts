import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Visit, Prisma } from '@prisma/client'
@Injectable()
export class VisitService extends BaseCrudService<
  Visit,
  Prisma.VisitFindFirstArgs,
  Prisma.VisitFindUniqueArgs,
  Prisma.VisitFindManyArgs,
  Prisma.VisitGroupByArgs,
  Prisma.VisitAggregateArgs,
  Prisma.VisitCreateArgs,
  Prisma.VisitCreateManyArgs,
  Prisma.VisitUpdateArgs,
  Prisma.VisitUpdateManyArgs,
  Prisma.VisitDeleteArgs,
  Prisma.VisitDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Visit[]> {
    throw new NotFoundException()
  }
  
}
