import { HttpStatus, Injectable } from '@nestjs/common';
import { addCategory } from './../common/dtos//add-category.dto';
import { ApiResponse, createResponse } from './../common/utils/response.util';
import { MESSAGES } from './../common/utils/responseMessages';
import { Categories } from 'src/common/entities/category.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Categories.name) private categoriesModel: Model<Categories>) { }


    async add(createDto: addCategory): Promise<ApiResponse<Categories>> {

        // Check if the category with the same title already exists
        const exists = await this.categoriesModel.findOne({ title: createDto.title.toLowerCase() }).exec();

        // If the category exists, throw an error
        if (exists) {
            return createResponse(HttpStatus.CONFLICT, MESSAGES.ALREADY_EXISTS, []);
        }

        const newService = new this.categoriesModel(createDto);
        await newService.save();
        return createResponse(HttpStatus.CREATED, MESSAGES.CREATED, newService);
    }

    async getAll(): Promise<ApiResponse<Categories[]>> {
        const response = await this.categoriesModel.find().exec();
        if (!response.length) {
            return createResponse(HttpStatus.OK, MESSAGES.NOT_FOUND, []);
        }
        return createResponse(HttpStatus.OK, MESSAGES.FETCHED, response);
    }

    async edit(id: string, updateDto: addCategory): Promise<ApiResponse<Categories>> {
        const response = await this.categoriesModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
        if (!response) {
            return createResponse(HttpStatus.NOT_FOUND, MESSAGES.NOT_FOUND, null);
        }
        return createResponse(HttpStatus.OK, MESSAGES.UPDATED, response);
    }

    async delete(id: string): Promise<ApiResponse<null>> {
        const response = await this.categoriesModel.findByIdAndDelete(id).exec();
        if (!response) {
            return createResponse(HttpStatus.NOT_FOUND, MESSAGES.NOT_FOUND, null);
        }
        return createResponse(HttpStatus.OK, MESSAGES.DELETED, response);
    }
}
