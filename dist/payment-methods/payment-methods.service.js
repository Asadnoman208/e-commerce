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
exports.PaymentMethodService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const payment_method_entity_1 = require("./../common/entities/payment-method.entity");
const response_util_1 = require("./../common/utils/response.util");
const responseMessages_1 = require("./../common/utils/responseMessages");
let PaymentMethodService = class PaymentMethodService {
    constructor(paymentMethodModel) {
        this.paymentMethodModel = paymentMethodModel;
    }
    async addNewCard(addNewCardDto) {
        try {
            const newCard = new this.paymentMethodModel(addNewCardDto);
            const savedCard = await newCard.save();
            return (0, response_util_1.createResponse)(common_1.HttpStatus.CREATED, responseMessages_1.MESSAGES.CREATED, newCard);
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException((0, response_util_1.createResponse)(common_1.HttpStatus.CONFLICT, responseMessages_1.MESSAGES.CARD_ALREADY_EXISTS, null));
            }
            throw error;
        }
    }
    async getAllByUserId(userId) {
        const cards = await this.paymentMethodModel.find({ userId }).exec();
        return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.FETCHED, cards);
    }
    async updateCard(id, updateCardDto) {
        const updatedCard = await this.paymentMethodModel.findByIdAndUpdate(id, updateCardDto, { new: true }).exec();
        if (!updatedCard)
            throw new common_1.NotFoundException(responseMessages_1.MESSAGES.NOT_FOUND);
        return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.UPDATED, updatedCard);
    }
    async deleteCard(id) {
        const result = await this.paymentMethodModel.findByIdAndDelete(id).exec();
        if (!result)
            throw new common_1.NotFoundException(responseMessages_1.MESSAGES.NOT_FOUND);
        return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.DELETED, null);
    }
};
exports.PaymentMethodService = PaymentMethodService;
exports.PaymentMethodService = PaymentMethodService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(payment_method_entity_1.PaymentMethod.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PaymentMethodService);
//# sourceMappingURL=payment-methods.service.js.map