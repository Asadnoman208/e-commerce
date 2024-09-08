import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { AddReviewDto } from './../common/dtos/add-review.dto';
import { Reviews } from './../common/entities/reviews.entity';
import { ApiResponse } from 'src/common/utils/response.util';

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) { }

    @Post()
    async addReview(@Body() addReviewDto: AddReviewDto): Promise<ApiResponse<Reviews>> {
        return this.reviewsService.addReview(addReviewDto);
    }

    @Get(':userId')
    async getReviewsByUserId(@Param('userId') userId: string): Promise<ApiResponse<Reviews>> {
        return this.reviewsService.getReviewsByUserId(userId);
    }

    @Get('getReviewsByService/:serviceId')
    async getReviewsByServiceId(@Param('serviceId') serviceId: string): Promise<ApiResponse<Reviews>> {
        return this.reviewsService.getReviewsByServiceId(serviceId);
    }
}
