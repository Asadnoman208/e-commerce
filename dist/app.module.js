"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./user/user.module");
const payment_methods_module_1 = require("./payment-methods/payment-methods.module");
const reviews_module_1 = require("./reviews/reviews.module");
const merchant_service_module_1 = require("./merchant-service/merchant-service.module");
const transaction_module_1 = require("./transaction/transaction.module");
const token_validation_middleware_1 = require("./common/middleware/token-validation.middleware");
const jwt_1 = require("@nestjs/jwt");
const products_module_1 = require("./products/products.module");
const category_module_1 = require("./category/category.module");
const dotenv = require("dotenv");
dotenv.config();
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(token_validation_middleware_1.TokenValidationMiddleware)
            .exclude({ path: 'auth/login', method: common_1.RequestMethod.POST }, { path: 'auth/register', method: common_1.RequestMethod.POST })
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI, {
                connectionFactory: (connection) => {
                    return connection;
                },
            }),
            jwt_1.JwtModule.register({
                secret: 'abc',
                signOptions: { expiresIn: '1h' },
            }),
            user_module_1.UserModule,
            payment_methods_module_1.PaymentMethodModule,
            reviews_module_1.ReviewsModule,
            merchant_service_module_1.MerchantServiceModule,
            transaction_module_1.TransactionsModule,
            products_module_1.ProductsModule,
            category_module_1.CategoryModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map