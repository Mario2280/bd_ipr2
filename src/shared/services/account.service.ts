import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Account, Prisma } from '@prisma/client'
@Injectable()
export class AccountService extends BaseCrudService<
  Account,
  Prisma.AccountFindFirstArgs,
  Prisma.AccountFindUniqueArgs,
  Prisma.AccountFindManyArgs,
  Prisma.AccountGroupByArgs,
  Prisma.AccountAggregateArgs,
  Prisma.AccountCreateArgs,
  Prisma.AccountCreateManyArgs,
  Prisma.AccountUpdateArgs,
  Prisma.AccountUpdateManyArgs,
  Prisma.AccountDeleteArgs,
  Prisma.AccountDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Account[]> {
    throw new NotFoundException()
  }

  
}
