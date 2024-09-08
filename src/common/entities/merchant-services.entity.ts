import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class MerchantServices extends Document {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: string;

    @Prop({ required: true })
    serviceTitle: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    charges: number;

    @Prop({ required: true })
    latitude: number;

    @Prop({ required: true })
    longitude: number;
}

export const MerchantServicesSchema = SchemaFactory.createForClass(MerchantServices);
