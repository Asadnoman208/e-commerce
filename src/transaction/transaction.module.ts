import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Transactions, TransactionsSchema } from './../common/entities/transactions.entity';
import { TransactionsController } from './transaction.controller';
import { TransactionsService } from './transaction.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Transactions.name, schema: TransactionsSchema }]),
    ],
    controllers: [TransactionsController],
    providers: [TransactionsService],
})
export class TransactionsModule { }
