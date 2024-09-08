import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class PaymentMethod extends Document {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    cardNumber: string;

    @Prop({ required: true })
    expireDate: string;

    @Prop({ required: true })
    cvv: string;
}

export const PaymentMethodSchema = SchemaFactory.createForClass(PaymentMethod);
