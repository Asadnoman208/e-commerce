import { Document } from 'mongoose';
export declare class Reviews extends Document {
    userId: string;
    serviceId: string;
    createdAt: Date;
    reviewText: string;
    rating: number;
}
export declare const ReviewsSchema: import("mongoose").Schema<Reviews, import("mongoose").Model<Reviews, any, any, any, Document<unknown, any, Reviews> & Reviews & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reviews, Document<unknown, {}, import("mongoose").FlatRecord<Reviews>> & import("mongoose").FlatRecord<Reviews> & Required<{
    _id: unknown;
}>>;
