import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { User, Prisma } from '@prisma/client'
import { genSalt, hash } from 'bcryptjs'
@Injectable()
export class UserService extends BaseCrudService<
  User,
  Prisma.UserFindFirstArgs,
  Prisma.UserFindUniqueArgs,
  Prisma.UserFindManyArgs,
  Prisma.UserGroupByArgs,
  Prisma.UserAggregateArgs,
  Prisma.UserCreateArgs,
  Prisma.UserCreateManyArgs,
  Prisma.UserUpdateArgs,
  Prisma.UserUpdateManyArgs,
  Prisma.UserDeleteArgs,
  Prisma.UserDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async create(args: Prisma.UserCreateArgs): Promise<User> {
    const salt = await genSalt(10)
    args.data.password = await hash(args.data.password, salt)
    args.data.salt = salt
    return this.prisma.user.create(args)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async update(args: Partial<Prisma.UserUpdateArgs>): Promise<User> {
    let newPasswordHash = null
    let salt = null
    if (args.data.password) {
      salt = await genSalt(10)
      args.data.salt = salt
      newPasswordHash = await hash(args.data.password.toString(), salt)
      args.data.password = newPasswordHash
    }
    return this.prisma[this.modelName].update(args)
  }

  async updateMany(): Promise<User[]> {
    throw new NotFoundException()
  }

  
}
