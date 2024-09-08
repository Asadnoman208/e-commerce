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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const responseMessages_1 = require("../common/utils/responseMessages");
const response_util_1 = require("../common/utils/response.util");
const user_entity_1 = require("../common/entities/user.entity");
const sessions_service_1 = require("../sessions/sessions.service");
let UserService = class UserService {
    constructor(jwtService, sessionService, userModel) {
        this.jwtService = jwtService;
        this.sessionService = sessionService;
        this.userModel = userModel;
    }
    async createUser(createUserDto) {
        const { email, password } = createUserDto;
        const existingUser = await this.userModel.findOne({ email }).exec();
        if (existingUser) {
            throw new common_1.ConflictException((0, response_util_1.createResponse)(common_1.HttpStatus.CONFLICT, responseMessages_1.MESSAGES.EMAIL_EXISTS, null));
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new this.userModel({
            ...createUserDto,
            password: hashedPassword,
        });
        const savedUser = await user.save();
        return (0, response_util_1.createResponse)(common_1.HttpStatus.CREATED, responseMessages_1.MESSAGES.CREATED, savedUser);
    }
    async login(loginUserDto) {
        const user = await this.validateUser(loginUserDto);
        const payload = { email: user.email, sub: user._id };
        const token = this.jwtService.sign(payload);
        await this.sessionService.createSession(user._id.toString(), token);
        return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.SUCCESS, { authToken: token, userId: user._id.toString() });
    }
    async validateUser(loginUserDto) {
        const { email, password } = loginUserDto;
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new common_1.BadRequestException((0, response_util_1.createResponse)(common_1.HttpStatus.UNAUTHORIZED, responseMessages_1.MESSAGES.INVALID_CREDENTIALS, null));
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException((0, response_util_1.createResponse)(common_1.HttpStatus.UNAUTHORIZED, responseMessages_1.MESSAGES.INVALID_CREDENTIALS, null));
        }
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        sessions_service_1.SessionService,
        mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map