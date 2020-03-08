import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { EpisodeModule } from './episode/episode.module';

@Module({
  imports: [
    PostModule,
    TypegooseModule.forRoot('mongodb://localhost/nest-blog', {
      useNewUrlParser: true
    }),
    AuthModule,
    CourseModule,
    EpisodeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
