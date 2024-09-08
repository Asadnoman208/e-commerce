"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_2 = require("@nestjs/common");
const responseMessages_1 = require("../common/utils/responseMessages");
const response_util_1 = require("../common/utils/response.util");
const session_entity_1 = require("../common/entities/session.entity");
let SessionService = class SessionService {
    constructor(sessionModel) {
        this.sessionModel = sessionModel;
    }
    async createSession(userId, jwtToken) {
        const newSession = new this.sessionModel({
            userId,
            loggedInTime: new Date(),
            isExpired: false,
            jwtToken,
        });
        const savedSession = await newSession.save();
        return (0, response_util_1.createResponse)(common_2.HttpStatus.CREATED, responseMessages_1.MESSAGES.CREATED, savedSession);
    }
    async findActiveSession(userId) {
        return this.sessionModel.findOne({ userId, isExpired: false }).exec();
    }
    async getSessions() {
        const sessions = await this.sessionModel.find();
        return (0, response_util_1.createResponse)(common_2.HttpStatus.OK, responseMessages_1.MESSAGES.FETCHED, sessions);
    }
    async expireSession(userId) {
        try {
            const objectId = new mongoose_2.Types.ObjectId(userId);
            const updatedSession = await this.sessionModel.findOneAndUpdate({ userId: userId, isExpired: false }, { isExpired: true }, { new: true }).exec();
            if (!updatedSession) {
                return (0, response_util_1.createResponse)(common_2.HttpStatus.BAD_REQUEST, responseMessages_1.MESSAGES.NOT_FOUND, null);
            }
            return (0, response_util_1.createResponse)(common_2.HttpStatus.OK, responseMessages_1.MESSAGES.UPDATED, updatedSession);
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException(responseMessages_1.MESSAGES.INTERNAL_ERROR);
        }
    }
};
exports.SessionService = SessionService;
exports.SessionService = SessionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(session_entity_1.Session.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SessionService);
//# sourceMappingURL=sessions.service.js.map