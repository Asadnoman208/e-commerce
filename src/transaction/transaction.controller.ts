import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateTransactionDto } from './../common/dtos/transaction.dto';
import { Transactions } from './../common/entities/transactions.entity';
import { ApiResponse } from './../common/utils/response.util';
import { TransactionsService } from './transaction.service';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) { }

    @Post('payNow')
    async addTransaction(@Body() createTransactionDto: CreateTransactionDto): Promise<ApiResponse<Transactions>> {
        return this.transactionsService.addTransaction(createTransactionDto);
    }

    @Get(':userId')
    async getTransactionDetails(@Param('userId') userId: string): Promise<ApiResponse<Transactions>> {
        return this.transactionsService.getTransactionDetails(userId);
    }

}
