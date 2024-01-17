import { Controller, Get, UseGuards } from '@nestjs/common';
import { TokenGuard } from '../auth/token.guard';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  @UseGuards(TokenGuard)
  listCategories() {
    return this.categoryService.listCategories();
  }
}
