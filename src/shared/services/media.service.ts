import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Media, Prisma } from '@prisma/client'
@Injectable()
export class MediaService extends BaseCrudService<
  Media,
  Prisma.MediaFindFirstArgs,
  Prisma.MediaFindUniqueArgs,
  Prisma.MediaFindManyArgs,
  Prisma.MediaGroupByArgs,
  Prisma.MediaAggregateArgs,
  Prisma.MediaCreateArgs,
  Prisma.MediaCreateManyArgs,
  Prisma.MediaUpdateArgs,
  Prisma.MediaUpdateManyArgs,
  Prisma.MediaDeleteArgs,
  Prisma.MediaDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Media[]> {
    throw new NotFoundException()
  }

  
}
