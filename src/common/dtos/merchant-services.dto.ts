import { IsOptional, IsNotEmpty, IsString, IsNumber, isNumber } from 'class-validator';
import { MESSAGES } from '../utils/responseMessages';

export class CreateMerchantServicesDto {
    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    userId: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    serviceTitle: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    description: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsNumber({}, { message: MESSAGES.INVALID_FORMAT })
    charges: number;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsNumber({}, { message: MESSAGES.INVALID_FORMAT })
    latitude: number;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsNumber({}, { message: MESSAGES.INVALID_FORMAT })
    longitude: number;
}


export class UpdateMerchantServicesDto {
    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    serviceTitle: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    description: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    charges: number;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    latitude: number;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    longitude: number;
}
