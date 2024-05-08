import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Setting, Prisma } from '@prisma/client'
@Injectable()
export class SettingService extends BaseCrudService<
  Setting,
  Prisma.SettingFindFirstArgs,
  Prisma.SettingFindUniqueArgs,
  Prisma.SettingFindManyArgs,
  Prisma.SettingGroupByArgs,
  Prisma.SettingAggregateArgs,
  Prisma.SettingCreateArgs,
  Prisma.SettingCreateManyArgs,
  Prisma.SettingUpdateArgs,
  Prisma.SettingUpdateManyArgs,
  Prisma.SettingDeleteArgs,
  Prisma.SettingDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Setting[]> {
    throw new NotFoundException()
  }

  async update(args: Partial<Prisma.SettingUpdateArgs>): Promise<Setting> {
    return this.prisma[this.modelName].update(args)
  }
}
