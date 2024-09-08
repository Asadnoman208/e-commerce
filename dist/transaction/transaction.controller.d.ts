import { CreateTransactionDto } from './../common/dtos/transaction.dto';
import { Transactions } from './../common/entities/transactions.entity';
import { ApiResponse } from './../common/utils/response.util';
import { TransactionsService } from './transaction.service';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    addTransaction(createTransactionDto: CreateTransactionDto): Promise<ApiResponse<Transactions>>;
    getTransactionDetails(userId: string): Promise<ApiResponse<Transactions>>;
}
