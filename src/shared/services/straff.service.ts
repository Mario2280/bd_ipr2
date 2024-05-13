import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Staff, Prisma } from '@prisma/client'
@Injectable()
export class StaffService extends BaseCrudService<
  Staff,
  Prisma.StaffFindFirstArgs,
  Prisma.StaffFindUniqueArgs,
  Prisma.StaffFindManyArgs,
  Prisma.StaffGroupByArgs,
  Prisma.StaffAggregateArgs,
  Prisma.StaffCreateArgs,
  Prisma.StaffCreateManyArgs,
  Prisma.StaffUpdateArgs,
  Prisma.StaffUpdateManyArgs,
  Prisma.StaffDeleteArgs,
  Prisma.StaffDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Staff[]> {
    throw new NotFoundException()
  }

  
}
