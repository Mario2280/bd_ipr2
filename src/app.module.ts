import { GraphqlApiModule } from './graphql-api/graphql-api.module'
import { SharedModule } from './shared/shared.module'
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { PrismaExcludeNullableFieldsMiddleware } from './middlewares'

@Module({
  imports: [
    GraphqlApiModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PrismaExcludeNullableFieldsMiddleware)
      .forRoutes(SharedModule)
  }
}
