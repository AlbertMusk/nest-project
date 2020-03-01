import { Controller, Get, Post } from '@nestjs/common';
import {PostService} from './post.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('post')
@ApiTags('post')
export class PostController{

  constructor(private postService: PostService) {};

  @Get()
  index():any {
    return this.postService.index();
  }

  @Post('new')
  create(): any {
    return this.postService.create();
  }

  @Get(':id')
  detail():any {
    return this.postService.detail();
  }
}
