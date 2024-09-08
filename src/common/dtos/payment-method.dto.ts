import { IsString, IsNotEmpty, IsCreditCard, Matches, Length } from 'class-validator';
import { MESSAGES } from './../utils/responseMessages';

export class AddNewCardDto {
    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    userId: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    name: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_CARD })
    cardNumber: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @Matches(MESSAGES.REGEX.EXPIRE_CARD_DATE, { message: MESSAGES.INVALID_EXPIREDATE_FORMAT })
    expireDate: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @Length(3, 3, { message: MESSAGES.INVALID_CVV_FORMAT })
    cvv: string;
}

export class UpdateCardDto {
    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    name: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @Matches(MESSAGES.REGEX.EXPIRE_CARD_DATE, { message: MESSAGES.INVALID_EXPIREDATE_FORMAT })
    expireDate: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @Length(3, 3, { message: MESSAGES.INVALID_CVV_FORMAT })
    cvv: string;
}