import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiResponse } from 'src/common/utils/response.util';
import { addCategory } from 'src/common/dtos/add-category.dto';
import { Categories } from 'src/common/entities/category.entity';


@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Post()
    async add(@Body() createDto: addCategory): Promise<ApiResponse<Categories>> {
        return this.categoryService.add(createDto);
    }

    @Get()
    async getAll(): Promise<ApiResponse<Categories[]>> {
        return this.categoryService.getAll();
    }




    @Patch(':id')
    async edit(@Param('id') id: string, @Body() updateDto: addCategory): Promise<ApiResponse<Categories>> {
        return this.categoryService.edit(id, updateDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<ApiResponse<null>> {
        return this.categoryService.delete(id);
    }
}
