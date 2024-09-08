import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { ApiResponse } from '../common/utils/response.util';
import { User } from '../common/entities/user.entity';
import { CreateUserDto, LoginUserDto } from '../common/dtos/user.dto';
import { SessionService } from '../sessions/sessions.service';
export declare class UserService {
    private readonly jwtService;
    private readonly sessionService;
    private readonly userModel;
    constructor(jwtService: JwtService, sessionService: SessionService, userModel: Model<User>);
    createUser(createUserDto: CreateUserDto): Promise<ApiResponse<User>>;
    login(loginUserDto: LoginUserDto): Promise<ApiResponse<{
        token: string;
    }>>;
    private validateUser;
}
