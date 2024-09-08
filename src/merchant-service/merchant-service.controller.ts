import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { MerchantServicesService } from './merchant-service.service';
import { CreateMerchantServicesDto, UpdateMerchantServicesDto } from './../common/dtos/merchant-services.dto';
import { ApiResponse } from './../common/utils/response.util';
import { MerchantServices } from './../common/entities/merchant-services.entity';
const logger = new Logger('MerchantServicesController');

@Controller('merchant-services')
export class MerchantServicesController {
    constructor(private readonly merchantServicesService: MerchantServicesService) { }

    @Post()
    async addNewService(@Body() createDto: CreateMerchantServicesDto): Promise<ApiResponse<MerchantServices>> {
        logger.log('Request received:', createDto);
        return this.merchantServicesService.addNewService(createDto);
    }

    @Get(':userId')
    async getAllServicesByUserId(@Param('userId') userId: string): Promise<ApiResponse<MerchantServices[]>> {
        return this.merchantServicesService.getAllServicesByUserId(userId);
    }

    @Patch(':id')
    async updateService(@Param('id') id: string, @Body() updateDto: UpdateMerchantServicesDto): Promise<ApiResponse<MerchantServices>> {
        return this.merchantServicesService.updateService(id, updateDto);
    }

    @Delete(':id')
    async deleteService(@Param('id') id: string): Promise<ApiResponse<null>> {
        return this.merchantServicesService.deleteService(id);
    }
}
