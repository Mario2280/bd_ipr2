import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { AccountService } from './services/account.service'
import { ClientService } from './services/client.service'
import { CompanyService } from './services/company.service'
import { InvoiceService } from './services/invoice.service'
import { OrderService } from './services/order.service'
import { ProductService } from './services/product.service'
import { StaffService } from './services/straff.service'
import { SupplierService } from './services/supplier.service'
import { TransportService } from './services/transport.service'
import { WarehouseService } from './services/warehouse.service'

@Module({
  imports: [],
  providers: [
    PrismaService,
    AccountService,
    ClientService,
    CompanyService,
    InvoiceService,
    OrderService,
    ProductService,
    StaffService,
    SupplierService,
    TransportService,
    WarehouseService,
  ],
  exports: [
    PrismaService,
    AccountService,
    ClientService,
    CompanyService,
    InvoiceService,
    OrderService,
    ProductService,
    StaffService,
    SupplierService,
    TransportService,
    WarehouseService,
  ],
})
export class SharedModule {}
