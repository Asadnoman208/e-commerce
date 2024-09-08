import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTransactionDto } from './../common/dtos/transaction.dto';
import { Transactions } from './../common/entities/transactions.entity';
import { ApiResponse, createResponse } from './../common/utils/response.util';
import { MESSAGES } from './../common/utils/responseMessages';

@Injectable()
export class TransactionsService {
    constructor(
        @InjectModel(Transactions.name) private transactionsModel: Model<Transactions>,
    ) { }

    async PayNow(createTransactionDto: CreateTransactionDto): Promise<any> {
        //get payment method details by selected payment method id,
        //validate the payment info,
        //try to charge
        // other payment process logic placed here 

    }

    async addTransaction(createTransactionDto: CreateTransactionDto): Promise<ApiResponse<Transactions>> {
        const response = this.PayNow(createTransactionDto)

        // save the transaction details on the basis of paynow response.
        const newTransaction = new this.transactionsModel(createTransactionDto);
        const savedTransaction = await newTransaction.save();
        return createResponse(HttpStatus.OK, MESSAGES.FETCHED, savedTransaction);
    }

    async getTransactionDetails(userId: string): Promise<ApiResponse<Transactions>> {
        const transaction = await this.transactionsModel.find({ userId }).populate('userId').exec();
        if (!transaction) {
            return createResponse(HttpStatus.OK, MESSAGES.NOT_FOUND, []);
        }
        return createResponse(HttpStatus.OK, MESSAGES.FETCHED, transaction);
    }

}
