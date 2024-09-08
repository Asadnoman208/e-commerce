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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDto = exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const responseMessages_1 = require("./../utils/responseMessages");
const regex_1 = require("../utils/regex");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsString)({ message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsString)({ message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    (0, class_validator_1.IsEmail)({}, { message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.Matches)(regex_1.REGEX.PASSWORD_FORMAT, {
        message: responseMessages_1.MESSAGES.PASSWORD_FORMAT,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsEnum)(['consumer', 'merchant'], { message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userType", void 0);
class LoginUserDto {
}
exports.LoginUserDto = LoginUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsEmail)({}, { message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", String)
], LoginUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);
//# sourceMappingURL=user.dto.js.map