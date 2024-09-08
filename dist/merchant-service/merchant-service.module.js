"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantServiceModule = void 0;
const common_1 = require("@nestjs/common");
const merchant_service_controller_1 = require("./merchant-service.controller");
const merchant_service_service_1 = require("./merchant-service.service");
const mongoose_1 = require("@nestjs/mongoose");
const merchant_services_entity_1 = require("./../common/entities/merchant-services.entity");
let MerchantServiceModule = class MerchantServiceModule {
};
exports.MerchantServiceModule = MerchantServiceModule;
exports.MerchantServiceModule = MerchantServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: merchant_services_entity_1.MerchantServices.name, schema: merchant_services_entity_1.MerchantServicesSchema }])],
        controllers: [merchant_service_controller_1.MerchantServicesController],
        providers: [merchant_service_service_1.MerchantServicesService]
    })
], MerchantServiceModule);
//# sourceMappingURL=merchant-service.module.js.map