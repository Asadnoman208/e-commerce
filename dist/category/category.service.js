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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const response_util_1 = require("./../common/utils/response.util");
const responseMessages_1 = require("./../common/utils/responseMessages");
const category_entity_1 = require("../common/entities/category.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CategoryService = class CategoryService {
    constructor(categoriesModel) {
        this.categoriesModel = categoriesModel;
    }
    async add(createDto) {
        const exists = await this.categoriesModel.findOne({ title: createDto.title.toLowerCase() }).exec();
        if (exists) {
            return (0, response_util_1.createResponse)(common_1.HttpStatus.CONFLICT, responseMessages_1.MESSAGES.ALREADY_EXISTS, []);
        }
        const newService = new this.categoriesModel(createDto);
        await newService.save();
        return (0, response_util_1.createResponse)(common_1.HttpStatus.CREATED, responseMessages_1.MESSAGES.CREATED, newService);
    }
    async getAll() {
        const response = await this.categoriesModel.find().exec();
        if (!response.length) {
            return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.NOT_FOUND, []);
        }
        return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.FETCHED, response);
    }
    async edit(id, updateDto) {
        const response = await this.categoriesModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
        if (!response) {
            return (0, response_util_1.createResponse)(common_1.HttpStatus.NOT_FOUND, responseMessages_1.MESSAGES.NOT_FOUND, null);
        }
        return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.UPDATED, response);
    }
    async delete(id) {
        const response = await this.categoriesModel.findByIdAndDelete(id).exec();
        if (!response) {
            return (0, response_util_1.createResponse)(common_1.HttpStatus.NOT_FOUND, responseMessages_1.MESSAGES.NOT_FOUND, null);
        }
        return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.DELETED, response);
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(category_entity_1.Categories.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CategoryService);
//# sourceMappingURL=category.service.js.map