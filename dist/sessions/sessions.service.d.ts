import { Model } from 'mongoose';
import { ApiResponse } from '../common/utils/response.util';
import { Session } from '../common/entities/session.entity';
export declare class SessionService {
    private sessionModel;
    constructor(sessionModel: Model<Session>);
    createSession(userId: string, jwtToken: string): Promise<ApiResponse<Session>>;
    findActiveSession(userId: string): Promise<Session | null>;
    getSessions(): Promise<ApiResponse<Session[]>>;
    expireSession(userId: string): Promise<ApiResponse<Session>>;
}
