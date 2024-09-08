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
exports.TransactionsSchema = exports.Transactions = exports.TransactionStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const class_validator_1 = require("class-validator");
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PAID"] = "PAID";
    TransactionStatus["PENDING"] = "PENDING";
    TransactionStatus["FAILED"] = "FAILED";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
let Transactions = class Transactions extends mongoose_2.Document {
};
exports.Transactions = Transactions;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Transactions.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'MerchantServices', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Transactions.prototype, "serviceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'PaymentMethod', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Transactions.prototype, "paymentMethodId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Transactions.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: Date.now }),
    __metadata("design:type", Date)
], Transactions.prototype, "transactionDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: TransactionStatus, default: TransactionStatus.PAID }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(TransactionStatus),
    __metadata("design:type", String)
], Transactions.prototype, "status", void 0);
exports.Transactions = Transactions = __decorate([
    (0, mongoose_1.Schema)()
], Transactions);
exports.TransactionsSchema = mongoose_1.SchemaFactory.createForClass(Transactions);
//# sourceMappingURL=transactions.entity.js.map