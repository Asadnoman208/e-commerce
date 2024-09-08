import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator';
import { MESSAGES } from '../utils/responseMessages';

export class CreateTransactionDto {
    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    userId: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    serviceId: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    paymentMethodId: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsNumber({}, { message: MESSAGES.INVALID_FORMAT })
    amount: number;
}
