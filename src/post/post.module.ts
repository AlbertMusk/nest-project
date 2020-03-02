import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Post } from './post.model';

@Module({
  imports: [
    TypegooseModule.forFeature([Post])
  ],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
