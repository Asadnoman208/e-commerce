import { Model } from 'mongoose';
import { AddNewCardDto, UpdateCardDto } from './../common/dtos/payment-method.dto';
import { PaymentMethod } from './../common/entities/payment-method.entity';
import { ApiResponse } from './../common/utils/response.util';
export declare class PaymentMethodService {
    private paymentMethodModel;
    constructor(paymentMethodModel: Model<PaymentMethod>);
    addNewCard(addNewCardDto: AddNewCardDto): Promise<ApiResponse<PaymentMethod>>;
    getAllByUserId(userId: string): Promise<ApiResponse<PaymentMethod[]>>;
    updateCard(id: string, updateCardDto: UpdateCardDto): Promise<ApiResponse<PaymentMethod>>;
    deleteCard(id: string): Promise<ApiResponse<null>>;
}
