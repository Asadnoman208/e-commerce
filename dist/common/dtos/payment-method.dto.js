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
exports.UpdateCardDto = exports.AddNewCardDto = void 0;
const class_validator_1 = require("class-validator");
const responseMessages_1 = require("./../utils/responseMessages");
class AddNewCardDto {
}
exports.AddNewCardDto = AddNewCardDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsString)({ message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", String)
], AddNewCardDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsString)({ message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", String)
], AddNewCardDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsString)({ message: responseMessages_1.MESSAGES.INVALID_CARD }),
    __metadata("design:type", String)
], AddNewCardDto.prototype, "cardNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.Matches)(responseMessages_1.MESSAGES.REGEX.EXPIRE_CARD_DATE, { message: responseMessages_1.MESSAGES.INVALID_EXPIREDATE_FORMAT }),
    __metadata("design:type", String)
], AddNewCardDto.prototype, "expireDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.Length)(3, 3, { message: responseMessages_1.MESSAGES.INVALID_CVV_FORMAT }),
    __metadata("design:type", String)
], AddNewCardDto.prototype, "cvv", void 0);
class UpdateCardDto {
}
exports.UpdateCardDto = UpdateCardDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsString)({ message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", String)
], UpdateCardDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.Matches)(responseMessages_1.MESSAGES.REGEX.EXPIRE_CARD_DATE, { message: responseMessages_1.MESSAGES.INVALID_EXPIREDATE_FORMAT }),
    __metadata("design:type", String)
], UpdateCardDto.prototype, "expireDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.Length)(3, 3, { message: responseMessages_1.MESSAGES.INVALID_CVV_FORMAT }),
    __metadata("design:type", String)
], UpdateCardDto.prototype, "cvv", void 0);
//# sourceMappingURL=payment-method.dto.js.map