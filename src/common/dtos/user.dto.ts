import { IsNotEmpty, Matches, IsString, IsEmail, IsEnum, } from 'class-validator';
import { MESSAGES } from './../utils/responseMessages';
import { REGEX } from '../utils/regex';

export class CreateUserDto {
    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    readonly name: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsString({ message: MESSAGES.INVALID_FORMAT })
    @IsEmail({}, { message: MESSAGES.INVALID_FORMAT })
    readonly email: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @Matches(REGEX.PASSWORD_FORMAT, {
        message: MESSAGES.PASSWORD_FORMAT,
    })
    readonly password: string;

    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsEnum(['consumer', 'merchant'], { message: MESSAGES.INVALID_FORMAT })
    readonly userType: string;

}

export class LoginUserDto {
    @IsNotEmpty({ message: MESSAGES.REQUIRED_FIELD })
    @IsEmail({}, { message: MESSAGES.INVALID_FORMAT })
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;
}
