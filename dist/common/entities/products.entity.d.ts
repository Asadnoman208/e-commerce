import { Document } from 'mongoose';
export declare class Products extends Document {
    title: string;
    categories: string;
    description: string;
    stock: number;
    salePrice: number;
    purchasePrice: number;
    images: string;
    discount: number;
    createdAt: Date;
}
export declare const ProductsSchema: import("mongoose").Schema<Products, import("mongoose").Model<Products, any, any, any, Document<unknown, any, Products> & Products & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Products, Document<unknown, {}, import("mongoose").FlatRecord<Products>> & import("mongoose").FlatRecord<Products> & Required<{
    _id: unknown;
}>>;
