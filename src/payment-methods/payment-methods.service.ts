import { ConflictException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddNewCardDto, UpdateCardDto } from './../common/dtos/payment-method.dto';
import { PaymentMethod } from './../common/entities/payment-method.entity';
import { ApiResponse, createResponse } from './../common/utils/response.util';
import { MESSAGES } from './../common/utils/responseMessages';



@Injectable()
export class PaymentMethodService {
    constructor(@InjectModel(PaymentMethod.name) private paymentMethodModel: Model<PaymentMethod>) { }


    async addNewCard(addNewCardDto: AddNewCardDto): Promise<ApiResponse<PaymentMethod>> {
        try {
            const newCard = new this.paymentMethodModel(addNewCardDto);
            const savedCard = await newCard.save();
            return createResponse(HttpStatus.CREATED, MESSAGES.CREATED, newCard);
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException(createResponse(HttpStatus.CONFLICT, MESSAGES.CARD_ALREADY_EXISTS, null));
            }
            throw error;
        }
    }

    async getAllByUserId(userId: string): Promise<ApiResponse<PaymentMethod[]>> {
        const cards = await this.paymentMethodModel.find({ userId }).exec();
        return createResponse(HttpStatus.OK, MESSAGES.FETCHED, cards);
    }

    async updateCard(id: string, updateCardDto: UpdateCardDto): Promise<ApiResponse<PaymentMethod>> {
        const updatedCard = await this.paymentMethodModel.findByIdAndUpdate(id, updateCardDto, { new: true }).exec();
        if (!updatedCard) throw new NotFoundException(MESSAGES.NOT_FOUND);
        return createResponse(HttpStatus.OK, MESSAGES.UPDATED, updatedCard);
    }

    async deleteCard(id: string): Promise<ApiResponse<null>> {
        const result = await this.paymentMethodModel.findByIdAndDelete(id).exec();
        if (!result) throw new NotFoundException(MESSAGES.NOT_FOUND);
        return createResponse(HttpStatus.OK, MESSAGES.DELETED, null);
    }
}
