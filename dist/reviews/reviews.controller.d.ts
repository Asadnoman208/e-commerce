import { ReviewsService } from './reviews.service';
import { AddReviewDto } from './../common/dtos/add-review.dto';
import { Reviews } from './../common/entities/reviews.entity';
import { ApiResponse } from 'src/common/utils/response.util';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    addReview(addReviewDto: AddReviewDto): Promise<ApiResponse<Reviews>>;
    getReviewsByUserId(userId: string): Promise<ApiResponse<Reviews>>;
    getReviewsByServiceId(serviceId: string): Promise<ApiResponse<Reviews>>;
}
