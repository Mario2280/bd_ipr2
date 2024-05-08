
import { Prisma } from '@prisma/client'

export function PrismaExcludeNullableFieldsMiddleware<
  T extends Prisma.BatchPayload = Prisma.BatchPayload,
>(): Prisma.Middleware {
  return async (
    params: Prisma.MiddlewareParams,
    next: (params: Prisma.MiddlewareParams) => Promise<T>,
  ): Promise<T> => {
    const args = params.args || {}

    for (const key in args) {
      const nullable = !args[key] ?? !Object.keys(args[key]).length
      if (nullable) delete args[key]
    }

    if (args?.select && !Object.keys(args.select).length) {
      args.select.id = true
    }

    return next(params)
  }
}
