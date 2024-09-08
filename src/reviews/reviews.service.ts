import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddReviewDto } from './../common/dtos/add-review.dto';
import { Reviews } from './../common/entities/reviews.entity';
import { ApiResponse, createResponse } from './../common/utils/response.util';
import { MESSAGES } from './../common/utils/responseMessages';

@Injectable()
export class ReviewsService {
    constructor(@InjectModel(Reviews.name) private reviewsModel: Model<Reviews>) { }

    async addReview(addReviewDto: AddReviewDto): Promise<ApiResponse<Reviews>> {
        const newReview = new this.reviewsModel(addReviewDto);
        const _review = newReview.save();
        return createResponse(HttpStatus.CREATED, MESSAGES.CREATED, newReview);
    }

    async getReviewsByServiceId(serviceId: string): Promise<ApiResponse<Reviews>> {
        const reviews = await this.reviewsModel.find({ serviceId }).exec();
        console.log(reviews)
        if (!reviews.length) {
            return createResponse(HttpStatus.OK, MESSAGES.NOT_FOUND, []);
        }
        return createResponse(HttpStatus.OK, MESSAGES.FETCHED, reviews);
    }

    async getReviewsByUserId(userId: string): Promise<ApiResponse<Reviews>> {
        const reviews = await this.reviewsModel.find({ userId }).exec();
        if (!reviews.length) {
            return createResponse(HttpStatus.OK, MESSAGES.NOT_FOUND, []);
        }
        return createResponse(HttpStatus.OK, MESSAGES.FETCHED, reviews);
    }
}
