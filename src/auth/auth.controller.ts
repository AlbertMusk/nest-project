import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Member } from './auth.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

  constructor(
    @InjectModel(Member) private readonly memberModel: ModelType<Member>
  ){};

  @Post('register')
  async register(@Body() member:Member) : Promise<any> {
    const result = await this.memberModel.create(member);
    return {
      success: true,
      data: result
    }
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Body() member: Member, @Req() req): Promise<any> {
    return {
      success: true,
      data: req.member
    }
  }


}
