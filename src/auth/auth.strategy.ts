import { IStrategyOptions, Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { Member } from './auth.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { BadRequestException } from '@nestjs/common';
import { compareSync } from 'bcryptjs';

export class LocalStrategy extends PassportStrategy(Strategy, 'local') {

  constructor(
    @InjectModel(Member) private readonly memberModel: ReturnModelType<typeof Member>
  ) {
    super({
      usernameField: 'username',
      passwordField: 'password',
      mobileField: 'mobile'
    } as RegistrationOptions)
  };

  // 校验方法, 最后返回一个对象
  async validate(username: string, password:string) {

    const member = await this.memberModel.findOne({username}).select('+password');
    if(!member) {
      throw new BadRequestException('用户名不正确');
    }

    if(!compareSync(password, member.password)) {
      throw new BadRequestException("密码不正确");
    }

    return member;
  }

}
