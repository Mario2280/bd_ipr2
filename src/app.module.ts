import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphqlApiModule } from './graphql-api/graphql-api.module'
import { SharedModule } from './shared/shared.module'
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { PrismaExcludeNullableFieldsMiddleware } from './middlewares'
import { PrismaService } from './prisma/prisma.service'
import { LoggerMiddleware } from './middlewares/response-time'

@Module({
  imports: [
    GraphqlApiModule,
    SharedModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    GraphqlApiModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PrismaExcludeNullableFieldsMiddleware)
      .forRoutes(SharedModule)
      .apply(LoggerMiddleware)
      .forRoutes('*')
  }
}
