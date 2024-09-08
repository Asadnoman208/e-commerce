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
exports.ProductsSchema = exports.Products = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
let Products = class Products extends mongoose_2.Document {
};
exports.Products = Products;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Products.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Products.prototype, "categories", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Products.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Products.prototype, "stock", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Products.prototype, "salePrice", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Products.prototype, "purchasePrice", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Products.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, mongoose_1.Prop)({ required: false, default: 0 }),
    __metadata("design:type", Number)
], Products.prototype, "discount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: Date.now }),
    __metadata("design:type", Date)
], Products.prototype, "createdAt", void 0);
exports.Products = Products = __decorate([
    (0, mongoose_1.Schema)()
], Products);
exports.ProductsSchema = mongoose_1.SchemaFactory.createForClass(Products);
//# sourceMappingURL=products.entity.js.map