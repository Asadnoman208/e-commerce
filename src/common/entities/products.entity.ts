import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, IsNumber, Min, Max } from 'class-validator';
import { Document, Types } from 'mongoose';

@Schema()
export class Products extends Document {
    @IsNotEmpty()
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    categories: string;

    @Prop({ required: false })
    description: string;

    @IsNotEmpty()
    @Prop({ required: true })
    stock: number;

    @IsNotEmpty()
    @Prop({ required: true })
    salePrice: number;

    @IsNotEmpty()
    @Prop({ required: true })
    purchasePrice: number;

    @IsNotEmpty()
    @Prop({ required: true })
    images: string;

    @IsNotEmpty()
    @Prop({ required: false, default: 0 })
    discount: number;

    @Prop({ required: true, default: Date.now })
    createdAt: Date;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
