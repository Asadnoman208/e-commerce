import { Document } from 'mongoose';
export declare class Categories extends Document {
    title: string;
}
export declare const CategoriesSchema: import("mongoose").Schema<Categories, import("mongoose").Model<Categories, any, any, any, Document<unknown, any, Categories> & Categories & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Categories, Document<unknown, {}, import("mongoose").FlatRecord<Categories>> & import("mongoose").FlatRecord<Categories> & Required<{
    _id: unknown;
}>>;
