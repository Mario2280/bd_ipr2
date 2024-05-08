import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Message,
  FindFirstMessageArgs,
  FindUniqueMessageArgs,
  AggregateMessage,
  CreateOneMessageArgs,
  DeleteManyMessageArgs,
  DeleteOneMessageArgs,
  FindManyMessageArgs,
  UpdateOneMessageArgs,
  MessageAggregateArgs,
  MessageGroupByArgs,
  MessageGroupBy,
} from '../../dtos/index'
import { MessageService } from '../../shared/services/message.service'

@Resolver(() => Message)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Query(() => Message, { nullable: false })
  findFirstMessage(@Args() args: FindFirstMessageArgs) {
    this.messageService.findFirst(args)
  }

  @Query(() => Message, { nullable: false })
  findUniqueMessage(@Args() args: FindUniqueMessageArgs) {
    return this.messageService.findUnique(args)
  }

  @Query(() => [Message], { nullable: false })
  listsMessage(@Args() args: FindManyMessageArgs) {
    return this.messageService.findMany(args)
  }

  @Query(() => [MessageGroupBy], { nullable: false })
  groupByMessage(@Args() args: MessageGroupByArgs) {
    return this.messageService.groupBy(args)
  }

  @Query(() => AggregateMessage, { nullable: false })
  aggregateMessage(@Args() args: MessageAggregateArgs) {
    return this.messageService.aggregate(args)
  }

  @Mutation(() => Message, { nullable: true })
  createMessage(@Args() args: CreateOneMessageArgs) {
    return this.messageService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyMessage() {
    return this.messageService.createMany()
  }

  @Mutation(() => Message, { nullable: true })
  updateMessage(@Args() args: UpdateOneMessageArgs) {
    return this.messageService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyMessage() {
    return this.messageService.updateMany()
  }

  @Mutation(() => Message, { nullable: true })
  deleteMessage(@Args() args: DeleteOneMessageArgs) {
    return this.messageService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyMessage(@Args() args: DeleteManyMessageArgs) {
    return this.messageService.deleteMany(args)
  }
}
