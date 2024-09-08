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
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const transactions_entity_1 = require("./../common/entities/transactions.entity");
const response_util_1 = require("./../common/utils/response.util");
const responseMessages_1 = require("./../common/utils/responseMessages");
let TransactionsService = class TransactionsService {
    constructor(transactionsModel) {
        this.transactionsModel = transactionsModel;
    }
    async PayNow(createTransactionDto) {
    }
    async addTransaction(createTransactionDto) {
        const response = this.PayNow(createTransactionDto);
        const newTransaction = new this.transactionsModel(createTransactionDto);
        const savedTransaction = await newTransaction.save();
        return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.FETCHED, savedTransaction);
    }
    async getTransactionDetails(userId) {
        const transaction = await this.transactionsModel.find({ userId }).populate('userId').exec();
        if (!transaction) {
            return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.NOT_FOUND, []);
        }
        return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.FETCHED, transaction);
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(transactions_entity_1.Transactions.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TransactionsService);
//# sourceMappingURL=transaction.service.js.map