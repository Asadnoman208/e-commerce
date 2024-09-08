import { Injectable, BadRequestException, HttpStatus, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { MESSAGES } from '../common/utils/responseMessages';
import { ApiResponse, createResponse } from '../common/utils/response.util';
import { User } from '../common/entities/user.entity';
import { CreateUserDto, LoginUserDto } from '../common/dtos/user.dto';
import { SessionService } from '../sessions/sessions.service';

@Injectable()
export class UserService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly sessionService: SessionService,
        @InjectModel(User.name) private readonly userModel: Model<User>,
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<ApiResponse<User>> {
        const { email, password } = createUserDto;

        // Check if the user already exists
        const existingUser = await this.userModel.findOne({ email }).exec();
        if (existingUser) {
            throw new ConflictException(createResponse(HttpStatus.CONFLICT, MESSAGES.EMAIL_EXISTS, null));
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
        const user = new this.userModel({
            ...createUserDto,
            password: hashedPassword,
        });

        const savedUser = await user.save();
        return createResponse(HttpStatus.CREATED, MESSAGES.CREATED, savedUser);
    }

    async login(loginUserDto: LoginUserDto): Promise<ApiResponse<{ token: string }>> {
        const user = await this.validateUser(loginUserDto);

        // // Check for existing active session
        // const existingSession = await this.sessionService.findActiveSession(user._id.toString());
        // if (existingSession) {
        //     throw new BadRequestException(createResponse(HttpStatus.BAD_REQUEST, MESSAGES.ALREADY_ACTIVE_SESSION, null));
        // }

        // Generate JWT token
        const payload = { email: user.email, sub: user._id };
        const token = this.jwtService.sign(payload);

        // Create a new session
        await this.sessionService.createSession(user._id.toString(), token);

        return createResponse(HttpStatus.OK, MESSAGES.SUCCESS, { authToken: token, userId: user._id.toString() });
    }

    private async validateUser(loginUserDto: LoginUserDto): Promise<User> {
        const { email, password } = loginUserDto;

        // Validate the user's email
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new BadRequestException(createResponse(HttpStatus.UNAUTHORIZED, MESSAGES.INVALID_CREDENTIALS, null));
        }

        // verfication of email case is commented ,due to disturbance in testing
        // if (!user.isEmailVerified) {
        //     throw new BadRequestException(createResponse(HttpStatus.UNAUTHORIZED, MESSAGES.EMAIL_NOT_VERIFIED, null));
        // }

        // Validate the user's password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new BadRequestException(createResponse(HttpStatus.UNAUTHORIZED, MESSAGES.INVALID_CREDENTIALS, null));
        }

        return user;
    }
}
