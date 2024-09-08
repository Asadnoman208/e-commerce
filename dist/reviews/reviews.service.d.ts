import { Model } from 'mongoose';
import { AddReviewDto } from './../common/dtos/add-review.dto';
import { Reviews } from './../common/entities/reviews.entity';
import { ApiResponse } from './../common/utils/response.util';
export declare class ReviewsService {
    private reviewsModel;
    constructor(reviewsModel: Model<Reviews>);
    addReview(addReviewDto: AddReviewDto): Promise<ApiResponse<Reviews>>;
    getReviewsByServiceId(serviceId: string): Promise<ApiResponse<Reviews>>;
    getReviewsByUserId(userId: string): Promise<ApiResponse<Reviews>>;
}
