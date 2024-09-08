import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMerchantServicesDto, UpdateMerchantServicesDto } from './../common/dtos/merchant-services.dto';
import { MerchantServices } from './../common/entities/merchant-services.entity';
import { ApiResponse, createResponse } from './../common/utils/response.util';
import { MESSAGES } from './../common/utils/responseMessages';


@Injectable()
export class MerchantServicesService {
    constructor(
        @InjectModel(MerchantServices.name) private readonly merchantServicesModel: Model<MerchantServices>,
    ) { }

    async addNewService(createDto: CreateMerchantServicesDto): Promise<ApiResponse<MerchantServices>> {
        const newService = new this.merchantServicesModel(createDto);
        await newService.save();
        return createResponse(HttpStatus.CREATED, MESSAGES.CREATED, newService);
    }

    async getAllServicesByUserId(userId: string): Promise<ApiResponse<MerchantServices[]>> {
        const services = await this.merchantServicesModel.find({ userId }).exec();
        if (!services.length) {
            return createResponse(HttpStatus.OK, MESSAGES.NOT_FOUND, []);
        }
        return createResponse(HttpStatus.OK, MESSAGES.FETCHED, services);
    }

    async updateService(id: string, updateDto: UpdateMerchantServicesDto): Promise<ApiResponse<MerchantServices>> {
        const updatedService = await this.merchantServicesModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
        if (!updatedService) {
            return createResponse(HttpStatus.NOT_FOUND, MESSAGES.NOT_FOUND, null);
        }
        return createResponse(HttpStatus.OK, MESSAGES.UPDATED, updatedService);
    }

    async deleteService(id: string): Promise<ApiResponse<null>> {
        const deletedService = await this.merchantServicesModel.findByIdAndDelete(id).exec();
        if (!deletedService) {
            return createResponse(HttpStatus.NOT_FOUND, MESSAGES.NOT_FOUND, null);
        }
        return createResponse(HttpStatus.OK, MESSAGES.DELETED, deletedService);
    }
}
