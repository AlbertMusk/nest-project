import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {PostService} from './post.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostDto } from './post.entry'

@Controller('post')
@ApiTags('post')
export class PostController{

  constructor(private postService: PostService) {};

  @Get()
  @ApiOperation({summary: 'index'})
  index():any {
    return this.postService.index();
  }

  @Post('new')
  @ApiOperation({summary: '创建一个帖子'})
  create(@Body() postDto: PostDto): any {
    return this.postService.create(postDto);
  }

  @Get(':id')
  @ApiOperation({summary: '获取一个帖子详情'})
  detail(@Param('id') id:string):any {
    return this.postService.detail(id);
  }

  @Put(':id')
  @ApiOperation({summary: '更新一个帖子'})
  update(@Param('id') id: string, @Body() postDto: PostDto): any {
    return this.postService.update(id, postDto);
  }

  @Delete(':id')
  @ApiOperation({summary: '删除一个帖子'})
  delete(@Param('id') id:string) :any {
    return this.postService.delete(id);
  }

}
