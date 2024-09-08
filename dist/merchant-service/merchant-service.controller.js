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
exports.MerchantServicesController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const merchant_service_service_1 = require("./merchant-service.service");
const merchant_services_dto_1 = require("./../common/dtos/merchant-services.dto");
const logger = new common_2.Logger('MerchantServicesController');
let MerchantServicesController = class MerchantServicesController {
    constructor(merchantServicesService) {
        this.merchantServicesService = merchantServicesService;
    }
    async addNewService(createDto) {
        logger.log('Request received:', createDto);
        return this.merchantServicesService.addNewService(createDto);
    }
    async getAllServicesByUserId(userId) {
        return this.merchantServicesService.getAllServicesByUserId(userId);
    }
    async updateService(id, updateDto) {
        return this.merchantServicesService.updateService(id, updateDto);
    }
    async deleteService(id) {
        return this.merchantServicesService.deleteService(id);
    }
};
exports.MerchantServicesController = MerchantServicesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [merchant_services_dto_1.CreateMerchantServicesDto]),
    __metadata("design:returntype", Promise)
], MerchantServicesController.prototype, "addNewService", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MerchantServicesController.prototype, "getAllServicesByUserId", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, merchant_services_dto_1.UpdateMerchantServicesDto]),
    __metadata("design:returntype", Promise)
], MerchantServicesController.prototype, "updateService", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MerchantServicesController.prototype, "deleteService", null);
exports.MerchantServicesController = MerchantServicesController = __decorate([
    (0, common_1.Controller)('merchant-services'),
    __metadata("design:paramtypes", [merchant_service_service_1.MerchantServicesService])
], MerchantServicesController);
//# sourceMappingURL=merchant-service.controller.js.map