import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Invoice,
  FindFirstInvoiceArgs,
  FindUniqueInvoiceArgs,
  AggregateInvoice,
  CreateOneInvoiceArgs,
  DeleteManyInvoiceArgs,
  DeleteOneInvoiceArgs,
  FindManyInvoiceArgs,
  UpdateOneInvoiceArgs,
  InvoiceAggregateArgs,
  InvoiceGroupByArgs,
  InvoiceGroupBy,
} from '../../dtos/index'
import { InvoiceService } from '../../shared/services/invoice.service'

@Resolver(() => Invoice)
export class InvoiceResolver {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Query(() => Invoice, { nullable: false })
  findFirstInvoice(@Args() args: FindFirstInvoiceArgs) {
    this.invoiceService.findFirst(args)
  }

  @Query(() => Invoice, { nullable: false })
  findUniqueInvoice(@Args() args: FindUniqueInvoiceArgs) {
    return this.invoiceService.findUnique(args)
  }

  @Query(() => [Invoice], { nullable: false })
  listsInvoice(@Args() args: FindManyInvoiceArgs) {
    return this.invoiceService.findMany(args)
  }

  @Query(() => [InvoiceGroupBy], { nullable: false })
  groupByInvoice(@Args() args: InvoiceGroupByArgs) {
    return this.invoiceService.groupBy(args)
  }

  @Query(() => AggregateInvoice, { nullable: false })
  aggregateInvoice(@Args() args: InvoiceAggregateArgs) {
    return this.invoiceService.aggregate(args)
  }

  @Mutation(() => Invoice, { nullable: true })
  createInvoice(@Args() args: CreateOneInvoiceArgs) {
    return this.invoiceService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyInvoice() {
    return this.invoiceService.createMany()
  }

  @Mutation(() => Invoice, { nullable: true })
  updateInvoice(@Args() args: UpdateOneInvoiceArgs) {
    return this.invoiceService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyInvoice() {
    return this.invoiceService.updateMany()
  }

  @Mutation(() => Invoice, { nullable: true })
  deleteInvoice(@Args() args: DeleteOneInvoiceArgs) {
    return this.invoiceService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyInvoice(@Args() args: DeleteManyInvoiceArgs) {
    return this.invoiceService.deleteMany(args)
  }
}
