import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { prop } from '@typegoose/typegoose';
import { get } from 'mongoose';
import { hashSync } from 'bcryptjs';


export class Member {

  @ApiProperty({description: '用户名'})
  @IsNotEmpty({message: '用户名不能为空'})
  @prop()
  public username: string;

  @ApiProperty({description: '密码'})
  @IsNotEmpty({message: '密码不能为空'})
  @prop({
    select: false,
    get(val: string): string {
      return val;
    },
    set(val: string): string {
      return val ? hashSync(val) : val   // set password 的时候  进行hash加密
    }
  })
  public password: string;

  @ApiProperty({description: '手机号'})
  @prop()
  public mobile: string;
}
