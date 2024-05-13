/*
https://docs.nestjs.com/providers#services
*/
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, 'query'>
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: [
        {
          level: 'query',
          emit: 'stdout',
        },
      ],
    })
    this.$on('query', (e) => {
      ;(<Array<number | string>>JSON.parse(e.params)).forEach((p) => {
        e.query = e.query.replace(/\$\d+/, p.toString())
      }),
      console.log(e.query)
    })
  }

  async onModuleInit() {
    await this.$connect()
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}

