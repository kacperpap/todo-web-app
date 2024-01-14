import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { TokenModule } from './modules/token/token.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { GroupTodoModule } from './modules/group-todo/group-todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TodoModule,
    PrismaModule,
    TokenModule,
    UserModule,
    AuthModule,
    GroupTodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
