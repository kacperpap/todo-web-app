import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [PrismaModule],
})
export class CategoryModule {}
