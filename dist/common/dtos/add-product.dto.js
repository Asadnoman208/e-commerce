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
exports.addProduct = void 0;
const class_validator_1 = require("class-validator");
const responseMessages_1 = require("../utils/responseMessages");
class addProduct {
}
exports.addProduct = addProduct;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsString)({ message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", String)
], addProduct.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsString)({ message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", String)
], addProduct.prototype, "categories", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", String)
], addProduct.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsNumber)({}, { message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", Number)
], addProduct.prototype, "stock", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsNumber)({}, { message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", Number)
], addProduct.prototype, "salePrice", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsNumber)({}, { message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", Number)
], addProduct.prototype, "purchasePrice", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsString)({ message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", String)
], addProduct.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: responseMessages_1.MESSAGES.REQUIRED_FIELD }),
    (0, class_validator_1.IsNumber)({}, { message: responseMessages_1.MESSAGES.INVALID_FORMAT }),
    __metadata("design:type", Number)
], addProduct.prototype, "discount", void 0);
//# sourceMappingURL=add-product.dto.js.map