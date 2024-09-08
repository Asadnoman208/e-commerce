import { IsNotEmpty, IsString, IsNumber, Min, Max, isNumber } from 'class-validator';
import { MESSAGES } from '../utils/responseMessages';

export class addCategory {
    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    title: string;
}


