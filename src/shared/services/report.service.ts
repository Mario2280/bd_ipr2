import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Report, Prisma } from '@prisma/client'
@Injectable()
export class ReportService extends BaseCrudService<
  Report,
  Prisma.ReportFindFirstArgs,
  Prisma.ReportFindUniqueArgs,
  Prisma.ReportFindManyArgs,
  Prisma.ReportGroupByArgs,
  Prisma.ReportAggregateArgs,
  Prisma.ReportCreateArgs,
  Prisma.ReportCreateManyArgs,
  Prisma.ReportUpdateArgs,
  Prisma.ReportUpdateManyArgs,
  Prisma.ReportDeleteArgs,
  Prisma.ReportDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Report[]> {
    throw new NotFoundException()
  }

  
}
