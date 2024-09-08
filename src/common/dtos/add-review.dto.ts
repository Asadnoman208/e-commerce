import { IsNotEmpty, IsString, IsNumber, Min, Max, isNumber } from 'class-validator';
import { MESSAGES } from '../utils/responseMessages';

export class AddReviewDto {
    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    userId: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    serviceId: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    reviewText: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsNumber({}, { message: MESSAGES.INVALID_FORMAT })
    @Min(1)
    @Max(5)
    rating: number;
}
