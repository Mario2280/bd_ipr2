import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BaseCrudService } from './basic-crud.service'
import { Invoice, Prisma } from '@prisma/client'
@Injectable()
export class InvoiceService extends BaseCrudService<
  Invoice,
  Prisma.InvoiceFindFirstArgs,
  Prisma.InvoiceFindUniqueArgs,
  Prisma.InvoiceFindManyArgs,
  Prisma.InvoiceGroupByArgs,
  Prisma.InvoiceAggregateArgs,
  Prisma.InvoiceCreateArgs,
  Prisma.InvoiceCreateManyArgs,
  Prisma.InvoiceUpdateArgs,
  Prisma.InvoiceUpdateManyArgs,
  Prisma.InvoiceDeleteArgs,
  Prisma.InvoiceDeleteManyArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma)
  }

  async createMany() {
    throw new NotFoundException()
  }

  async updateMany(): Promise<Invoice[]> {
    throw new NotFoundException()
  }

  
}
