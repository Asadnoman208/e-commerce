import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { HttpStatus } from '@nestjs/common';
import { MESSAGES } from '../common/utils/responseMessages';
import { ApiResponse, createResponse } from '../common/utils/response.util';
import { Session } from '../common/entities/session.entity';

@Injectable()
export class SessionService {
    constructor(@InjectModel(Session.name) private sessionModel: Model<Session>) { }

    async createSession(userId: string, jwtToken: string): Promise<ApiResponse<Session>> {
        const newSession = new this.sessionModel({
            userId,
            loggedInTime: new Date(),
            isExpired: false,
            jwtToken,
        });

        const savedSession = await newSession.save();
        return createResponse(HttpStatus.CREATED, MESSAGES.CREATED, savedSession);
    }

    async findActiveSession(userId: string): Promise<Session | null> {
        return this.sessionModel.findOne({ userId, isExpired: false }).exec();
    }

    async getSessions(): Promise<ApiResponse<Session[]>> {
        const sessions = await this.sessionModel.find();
        return createResponse(HttpStatus.OK, MESSAGES.FETCHED, sessions);
    }

    async expireSession(userId: string): Promise<ApiResponse<Session>> {
        try {
            const objectId = new Types.ObjectId(userId);

            const updatedSession = await this.sessionModel.findOneAndUpdate(
                { userId: userId, isExpired: false },
                { isExpired: true },
                { new: true }
            ).exec();

            if (!updatedSession) {
                return createResponse(HttpStatus.BAD_REQUEST, MESSAGES.NOT_FOUND, null);
            }

            return createResponse(HttpStatus.OK, MESSAGES.UPDATED, updatedSession);
        } catch (error) {
            console.log(error)
            throw new InternalServerErrorException(MESSAGES.INTERNAL_ERROR);
        }
    }
}
