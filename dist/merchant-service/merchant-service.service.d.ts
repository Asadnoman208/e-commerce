import { Model } from 'mongoose';
import { CreateMerchantServicesDto, UpdateMerchantServicesDto } from './../common/dtos/merchant-services.dto';
import { MerchantServices } from './../common/entities/merchant-services.entity';
import { ApiResponse } from './../common/utils/response.util';
export declare class MerchantServicesService {
    private readonly merchantServicesModel;
    constructor(merchantServicesModel: Model<MerchantServices>);
    addNewService(createDto: CreateMerchantServicesDto): Promise<ApiResponse<MerchantServices>>;
    getAllServicesByUserId(userId: string): Promise<ApiResponse<MerchantServices[]>>;
    updateService(id: string, updateDto: UpdateMerchantServicesDto): Promise<ApiResponse<MerchantServices>>;
    deleteService(id: string): Promise<ApiResponse<null>>;
}
