// @src/utils/prisma.ts

import { GraphQLResolveInfo } from 'graphql'
import * as graphqlFields from 'graphql-fields'

export const prismaSelect = (info: GraphQLResolveInfo) => {
  const parsedFields = graphqlFields(info)

  const parse = (fields: any) => {
    let result: any = {}

    for (const key in fields) {
      if (key === '__typename') {
        delete fields[key]
        continue
      }
      const value = fields[key]

      if (typeof value !== 'object' || !Object.keys(value).length) {
        result[key] = true
      } else {
        result[key] = {
          select: parse(fields[key]),
        }
      }
    }

    return result
  }

  return parse(parsedFields)
}
