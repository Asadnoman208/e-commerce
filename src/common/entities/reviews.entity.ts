import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, IsNumber, Min, Max } from 'class-validator';
import { Document, Types } from 'mongoose';

@Schema()
export class Reviews extends Document {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    @IsNotEmpty()
    @IsString()
    userId: string;

    @Prop({ type: Types.ObjectId, ref: 'MerchantServices', required: true })
    @IsNotEmpty()
    @IsString()
    serviceId: string;

    @Prop({ required: true, default: Date.now })
    createdAt: Date;

    @IsNotEmpty()
    @Prop({ required: true })
    reviewText: string;

    @Prop({ required: true, default: 1 })
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(5)
    rating: number;
}

export const ReviewsSchema = SchemaFactory.createForClass(Reviews);
