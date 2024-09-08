import { PaymentMethodService } from './payment-methods.service';
import { AddNewCardDto, UpdateCardDto } from './../common/dtos/payment-method.dto';
import { ApiResponse } from './../common/utils/response.util';
import { PaymentMethod } from './../common/entities/payment-method.entity';
export declare class PaymentMethodController {
    private readonly paymentMethodService;
    constructor(paymentMethodService: PaymentMethodService);
    addNewCard(addNewCardDto: AddNewCardDto): Promise<ApiResponse<PaymentMethod>>;
    getAllByUserId(userId: string): Promise<ApiResponse<PaymentMethod[]>>;
    updateCard(id: string, updateCardDto: UpdateCardDto): Promise<ApiResponse<PaymentMethod>>;
    deleteCard(id: string): Promise<ApiResponse<null>>;
}
