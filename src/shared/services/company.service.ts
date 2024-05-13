import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Company, Prisma } from '@prisma/client'
@Injectable()
export class CompanyService extends BaseCrudService<
  Company,
  Prisma.CompanyFindFirstArgs,
  Prisma.CompanyFindUniqueArgs,
  Prisma.CompanyFindManyArgs,
  Prisma.CompanyGroupByArgs,
  Prisma.CompanyAggregateArgs,
  Prisma.CompanyCreateArgs,
  Prisma.CompanyCreateManyArgs,
  Prisma.CompanyUpdateArgs,
  Prisma.CompanyUpdateManyArgs,
  Prisma.CompanyDeleteArgs,
  Prisma.CompanyDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Company[]> {
    throw new NotFoundException()
  }

  
}
