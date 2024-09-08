import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@Schema()
export class Categories extends Document {
    @Prop({ required: true })
    @IsNotEmpty()
    title: string;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
