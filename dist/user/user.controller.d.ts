import { UserService } from '../user/user.service';
import { SessionService } from '../sessions/sessions.service';
import { CreateUserDto, LoginUserDto } from '../common/dtos/user.dto';
import { User } from '../common/entities/user.entity';
import { Session } from '../common/entities/session.entity';
import { ApiResponse } from '../common/utils/response.util';
export declare class UserController {
    private readonly userService;
    private readonly sessionService;
    constructor(userService: UserService, sessionService: SessionService);
    register(createUserDto: CreateUserDto): Promise<ApiResponse<User>>;
    login(loginUserDto: LoginUserDto): Promise<ApiResponse<any>>;
    expireSession(userId: string): Promise<ApiResponse<Session>>;
    getSessions(): Promise<ApiResponse<Session[] | null>>;
}
