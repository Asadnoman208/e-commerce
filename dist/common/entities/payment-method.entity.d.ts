import { Document, Types } from 'mongoose';
export declare class PaymentMethod extends Document {
    userId: Types.ObjectId;
    name: string;
    cardNumber: string;
    expireDate: string;
    cvv: string;
}
export declare const PaymentMethodSchema: import("mongoose").Schema<PaymentMethod, import("mongoose").Model<PaymentMethod, any, any, any, Document<unknown, any, PaymentMethod> & PaymentMethod & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PaymentMethod, Document<unknown, {}, import("mongoose").FlatRecord<PaymentMethod>> & import("mongoose").FlatRecord<PaymentMethod> & Required<{
    _id: unknown;
}>>;
