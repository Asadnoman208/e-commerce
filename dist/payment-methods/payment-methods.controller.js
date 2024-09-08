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
exports.PaymentMethodController = void 0;
const common_1 = require("@nestjs/common");
const payment_methods_service_1 = require("./payment-methods.service");
const payment_method_dto_1 = require("./../common/dtos/payment-method.dto");
let PaymentMethodController = class PaymentMethodController {
    constructor(paymentMethodService) {
        this.paymentMethodService = paymentMethodService;
    }
    async addNewCard(addNewCardDto) {
        return this.paymentMethodService.addNewCard(addNewCardDto);
    }
    async getAllByUserId(userId) {
        return this.paymentMethodService.getAllByUserId(userId);
    }
    async updateCard(id, updateCardDto) {
        return this.paymentMethodService.updateCard(id, updateCardDto);
    }
    async deleteCard(id) {
        return this.paymentMethodService.deleteCard(id);
    }
};
exports.PaymentMethodController = PaymentMethodController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_method_dto_1.AddNewCardDto]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "addNewCard", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "getAllByUserId", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, payment_method_dto_1.UpdateCardDto]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "updateCard", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "deleteCard", null);
exports.PaymentMethodController = PaymentMethodController = __decorate([
    (0, common_1.Controller)('payment-method'),
    __metadata("design:paramtypes", [payment_methods_service_1.PaymentMethodService])
], PaymentMethodController);
//# sourceMappingURL=payment-methods.controller.js.map