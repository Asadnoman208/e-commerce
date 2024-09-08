import { IsOptional, IsNotEmpty, IsString, IsNumber, isNumber } from 'class-validator';
import { MESSAGES } from '../utils/responseMessages';

export class addProduct {
    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    title: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    categories: string;

    @IsString({ message: MESSAGES.INVALID_FORMAT })
    description: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsNumber({}, { message: MESSAGES.INVALID_FORMAT })
    stock: number;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsNumber({}, { message: MESSAGES.INVALID_FORMAT })
    salePrice: number;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsNumber({}, { message: MESSAGES.INVALID_FORMAT })
    purchasePrice: number;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    images: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsNumber({}, { message: MESSAGES.INVALID_FORMAT })
    discount: number;

}