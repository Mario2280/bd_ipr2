import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { prismaSelect } from '../utils/prisma'
import { GqlExecutionContext } from '@nestjs/graphql'

const PrismaSelect = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const gqlCtx = GqlExecutionContext.create(ctx)
    const info = gqlCtx.getInfo()

    return prismaSelect(info)
  },
)

export default PrismaSelect
