import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator';

export enum TransactionStatus {
    PAID = 'PAID',
    PENDING = 'PENDING',
    FAILED = 'FAILED',
}

@Schema()
export class Transactions extends Document {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    @IsNotEmpty()
    @IsString()
    userId: string;

    @Prop({ type: Types.ObjectId, ref: 'MerchantServices', required: true })
    @IsNotEmpty()
    @IsString()
    serviceId: string;

    @Prop({ type: Types.ObjectId, ref: 'PaymentMethod', required: true })
    @IsNotEmpty()
    @IsString()
    paymentMethodId: string;

    @Prop({ required: true })
    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @Prop({ required: true, default: Date.now })
    transactionDate: Date;

    // status can be defined on the basis of logic
    @Prop({ required: true, enum: TransactionStatus, default: TransactionStatus.PAID })
    @IsNotEmpty()
    @IsEnum(TransactionStatus)
    status: TransactionStatus;
}

export const TransactionsSchema = SchemaFactory.createForClass(Transactions);
