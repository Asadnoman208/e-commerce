import { Controller, Post, Body, Get, Param, BadRequestException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { SessionService } from '../sessions/sessions.service';
import { CreateUserDto, LoginUserDto } from '../common/dtos/user.dto';
import { User } from '../common/entities/user.entity';
import { Session } from '../common/entities/session.entity';
import { ApiResponse, createResponse } from '../common/utils/response.util';

@Controller('auth')
export class UserController {
    constructor(private readonly userService: UserService, private readonly sessionService: SessionService) { }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<ApiResponse<User>> {
        return await this.userService.createUser(createUserDto);
    }


    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<ApiResponse<any>> {
        return this.userService.login(loginUserDto);
    }

    @Get('logout/:userId')
    async expireSession(@Param('userId') userId: string): Promise<ApiResponse<Session>> {
        return this.sessionService.expireSession(userId);
    }

    @Get('getAllSessions')
    async getSessions(): Promise<ApiResponse<Session[] | null>> {
        return this.sessionService.getSessions();
    }
}