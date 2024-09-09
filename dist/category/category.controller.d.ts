import { CategoryService } from './category.service';
import { ApiResponse } from './../common/utils/response.util';
import { addCategory } from './../common/dtos/add-category.dto';
import { Categories } from './../common/entities/category.entity';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    add(createDto: addCategory): Promise<ApiResponse<Categories>>;
    getAll(): Promise<ApiResponse<Categories[]>>;
    edit(id: string, updateDto: addCategory): Promise<ApiResponse<Categories>>;
    delete(id: string): Promise<ApiResponse<null>>;
}
