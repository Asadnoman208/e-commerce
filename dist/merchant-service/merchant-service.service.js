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
exports.MerchantServicesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const merchant_services_entity_1 = require("./../common/entities/merchant-services.entity");
const response_util_1 = require("./../common/utils/response.util");
const responseMessages_1 = require("./../common/utils/responseMessages");
let MerchantServicesService = class MerchantServicesService {
    constructor(merchantServicesModel) {
        this.merchantServicesModel = merchantServicesModel;
    }
    async addNewService(createDto) {
        const newService = new this.merchantServicesModel(createDto);
        await newService.save();
        return (0, response_util_1.createResponse)(common_1.HttpStatus.CREATED, responseMessages_1.MESSAGES.CREATED, newService);
    }
    async getAllServicesByUserId(userId) {
        const services = await this.merchantServicesModel.find({ userId }).exec();
        if (!services.length) {
            return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.NOT_FOUND, []);
        }
        return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.FETCHED, services);
    }
    async updateService(id, updateDto) {
        const updatedService = await this.merchantServicesModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
        if (!updatedService) {
            return (0, response_util_1.createResponse)(common_1.HttpStatus.NOT_FOUND, responseMessages_1.MESSAGES.NOT_FOUND, null);
        }
        return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.UPDATED, updatedService);
    }
    async deleteService(id) {
        const deletedService = await this.merchantServicesModel.findByIdAndDelete(id).exec();
        if (!deletedService) {
            return (0, response_util_1.createResponse)(common_1.HttpStatus.NOT_FOUND, responseMessages_1.MESSAGES.NOT_FOUND, null);
        }
        return (0, response_util_1.createResponse)(common_1.HttpStatus.OK, responseMessages_1.MESSAGES.DELETED, deletedService);
    }
};
exports.MerchantServicesService = MerchantServicesService;
exports.MerchantServicesService = MerchantServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(merchant_services_entity_1.MerchantServices.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MerchantServicesService);
//# sourceMappingURL=merchant-service.service.js.map