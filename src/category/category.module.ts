import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Categories, CategoriesSchema } from 'src/common/entities/category.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Categories.name, schema: CategoriesSchema }])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule { }
