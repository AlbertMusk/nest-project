import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PostModule,
    TypegooseModule.forRoot('mongodb://localhost/nest-blog', {
      useNewUrlParser: true
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
