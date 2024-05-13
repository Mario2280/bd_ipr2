import { Module } from '@nestjs/common'
import { SharedModule } from '../shared/shared.module'
import { SupplierResolver } from './resolvers/supplier.resolver'
import { AccountResolver } from './resolvers/account.resolver'
import { ProductResolver } from './resolvers/product.resolver'
import { ClientResolver } from './resolvers/client.resolver'
import { CompanyResolver } from './resolvers/company.resolver'
import { OrderResolver } from './resolvers/order.resolver'
import { InvoiceResolver } from './resolvers/invoice.resolver'
import { WarehouseResolver } from './resolvers/warehouse.resolver'
import { StaffResolver } from './resolvers/staff.resolver'
import { TransportResolver } from './resolvers/transport.resolver'

@Module({
  imports: [SharedModule],
  controllers: [],
  providers: [
    SupplierResolver,
    AccountResolver,
    ProductResolver,
    ClientResolver,
    CompanyResolver,
    OrderResolver,
    InvoiceResolver,
    WarehouseResolver,
    StaffResolver,
    TransportResolver
  ],
})
export class GraphqlApiModule {}
