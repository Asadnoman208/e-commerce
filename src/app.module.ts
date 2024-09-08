import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { PaymentMethodModule } from './payment-methods/payment-methods.module';
import { ReviewsModule } from './reviews/reviews.module';
import { MerchantServiceModule } from './merchant-service/merchant-service.module';
import { TransactionsModule } from './transaction/transaction.module';
import { TokenValidationMiddleware } from './common/middleware/token-validation.middleware';
import { JwtModule } from '@nestjs/jwt';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';


import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      connectionFactory: (connection) => {
        return connection;
      },
    }),
    JwtModule.register({
      secret: 'abc',
      signOptions: { expiresIn: '1h' },
    }),
    UserModule,
    PaymentMethodModule,
    ReviewsModule,
    MerchantServiceModule,
    TransactionsModule,
    ProductsModule,
    CategoryModule
  ],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenValidationMiddleware)
      .exclude(
        { path: 'auth/login', method: RequestMethod.POST },
        { path: 'auth/register', method: RequestMethod.POST },
      )
      .forRoutes('*');
  }
}

