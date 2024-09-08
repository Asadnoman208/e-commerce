import { Model } from 'mongoose';
import { CreateTransactionDto } from './../common/dtos/transaction.dto';
import { Transactions } from './../common/entities/transactions.entity';
import { ApiResponse } from './../common/utils/response.util';
export declare class TransactionsService {
    private transactionsModel;
    constructor(transactionsModel: Model<Transactions>);
    PayNow(createTransactionDto: CreateTransactionDto): Promise<any>;
    addTransaction(createTransactionDto: CreateTransactionDto): Promise<ApiResponse<Transactions>>;
    getTransactionDetails(userId: string): Promise<ApiResponse<Transactions>>;
}
