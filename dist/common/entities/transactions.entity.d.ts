import { Document } from 'mongoose';
export declare enum TransactionStatus {
    PAID = "PAID",
    PENDING = "PENDING",
    FAILED = "FAILED"
}
export declare class Transactions extends Document {
    userId: string;
    serviceId: string;
    paymentMethodId: string;
    amount: number;
    transactionDate: Date;
    status: TransactionStatus;
}
export declare const TransactionsSchema: import("mongoose").Schema<Transactions, import("mongoose").Model<Transactions, any, any, any, Document<unknown, any, Transactions> & Transactions & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Transactions, Document<unknown, {}, import("mongoose").FlatRecord<Transactions>> & import("mongoose").FlatRecord<Transactions> & Required<{
    _id: unknown;
}>>;
