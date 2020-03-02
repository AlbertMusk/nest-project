import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty} from 'class-validator'

export class PostDto {

  @ApiProperty({description: '标题', example: '帖子标题1'})
  @IsNotEmpty({message: '标题不能为空'})
  public title: string;

  @ApiProperty({description: '内容', example: '帖子内容1'})
  public content: string;
}
