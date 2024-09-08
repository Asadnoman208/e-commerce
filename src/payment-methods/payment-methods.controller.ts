import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { PaymentMethodService } from './payment-methods.service';
import { AddNewCardDto, UpdateCardDto } from './../common/dtos/payment-method.dto';
import { ApiResponse } from './../common/utils/response.util';
import { PaymentMethod } from './../common/entities/payment-method.entity';

@Controller('payment-method')
export class PaymentMethodController {
    constructor(private readonly paymentMethodService: PaymentMethodService) { }

    @Post()
    async addNewCard(@Body() addNewCardDto: AddNewCardDto): Promise<ApiResponse<PaymentMethod>> {
        return this.paymentMethodService.addNewCard(addNewCardDto);
    }

    @Get(':userId')
    async getAllByUserId(@Param('userId') userId: string): Promise<ApiResponse<PaymentMethod[]>> {
        return this.paymentMethodService.getAllByUserId(userId);
    }

    @Patch(':id')
    async updateCard(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto): Promise<ApiResponse<PaymentMethod>> {
        return this.paymentMethodService.updateCard(id, updateCardDto);
    }

    @Delete(':id')
    async deleteCard(@Param('id') id: string): Promise<ApiResponse<null>> {
        return this.paymentMethodService.deleteCard(id);
    }
}
