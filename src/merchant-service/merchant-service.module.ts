import { Module } from '@nestjs/common';
import { MerchantServicesController } from './merchant-service.controller';
import { MerchantServicesService } from './merchant-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MerchantServices, MerchantServicesSchema } from './../common/entities/merchant-services.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: MerchantServices.name, schema: MerchantServicesSchema }])],
  controllers: [MerchantServicesController],
  providers: [MerchantServicesService]
})
export class MerchantServiceModule { }
