import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { Reviews, ReviewsSchema } from './../common/entities/reviews.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Reviews.name, schema: ReviewsSchema }])],
  controllers: [ReviewsController],
  providers: [ReviewsService],
  exports: [ReviewsService],
})
export class ReviewsModule { }
