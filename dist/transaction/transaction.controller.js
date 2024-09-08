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
exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const transaction_dto_1 = require("./../common/dtos/transaction.dto");
const transaction_service_1 = require("./transaction.service");
let TransactionsController = class TransactionsController {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    async addTransaction(createTransactionDto) {
        return this.transactionsService.addTransaction(createTransactionDto);
    }
    async getTransactionDetails(userId) {
        return this.transactionsService.getTransactionDetails(userId);
    }
};
exports.TransactionsController = TransactionsController;
__decorate([
    (0, common_1.Post)('payNow'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_dto_1.CreateTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "addTransaction", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getTransactionDetails", null);
exports.TransactionsController = TransactionsController = __decorate([
    (0, common_1.Controller)('transactions'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionsService])
], TransactionsController);
//# sourceMappingURL=transaction.controller.js.map