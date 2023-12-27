import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthController } from './auth.controller';
import { BasicGuard } from './basic.guard';

@Module({
  providers: [AuthService, BasicGuard],
  imports: [PrismaModule],
  controllers: [AuthController],
})
export class AuthModule {}
