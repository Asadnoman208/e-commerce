import { Document } from 'mongoose';
export declare class MerchantServices extends Document {
    userId: string;
    serviceTitle: string;
    description: string;
    charges: number;
    latitude: number;
    longitude: number;
}
export declare const MerchantServicesSchema: import("mongoose").Schema<MerchantServices, import("mongoose").Model<MerchantServices, any, any, any, Document<unknown, any, MerchantServices> & MerchantServices & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MerchantServices, Document<unknown, {}, import("mongoose").FlatRecord<MerchantServices>> & import("mongoose").FlatRecord<MerchantServices> & Required<{
    _id: unknown;
}>>;
