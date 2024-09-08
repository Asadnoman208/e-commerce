import { MerchantServicesService } from './merchant-service.service';
import { CreateMerchantServicesDto, UpdateMerchantServicesDto } from './../common/dtos/merchant-services.dto';
import { ApiResponse } from './../common/utils/response.util';
import { MerchantServices } from './../common/entities/merchant-services.entity';
export declare class MerchantServicesController {
    private readonly merchantServicesService;
    constructor(merchantServicesService: MerchantServicesService);
    addNewService(createDto: CreateMerchantServicesDto): Promise<ApiResponse<MerchantServices>>;
    getAllServicesByUserId(userId: string): Promise<ApiResponse<MerchantServices[]>>;
    updateService(id: string, updateDto: UpdateMerchantServicesDto): Promise<ApiResponse<MerchantServices>>;
    deleteService(id: string): Promise<ApiResponse<null>>;
}
