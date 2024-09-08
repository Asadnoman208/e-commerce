import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentMethodController } from './payment-methods.controller';
import { PaymentMethod, PaymentMethodSchema } from './../common/entities/payment-method.entity';
import { PaymentMethodService } from './payment-methods.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: PaymentMethod.name, schema: PaymentMethodSchema }])],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
})
export class PaymentMethodModule { }