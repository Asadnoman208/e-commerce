import { addCategory } from './../common/dtos//add-category.dto';
import { ApiResponse } from './../common/utils/response.util';
import { Categories } from 'src/common/entities/category.entity';
import { Model } from 'mongoose';
export declare class CategoryService {
    private categoriesModel;
    constructor(categoriesModel: Model<Categories>);
    add(createDto: addCategory): Promise<ApiResponse<Categories>>;
    getAll(): Promise<ApiResponse<Categories[]>>;
    edit(id: string, updateDto: addCategory): Promise<ApiResponse<Categories>>;
    delete(id: string): Promise<ApiResponse<null>>;
}
