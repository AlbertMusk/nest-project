import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Member } from './auth.model';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth.strategy';

@Module({
  imports: [
    TypegooseModule.forFeature([Member]),
    PassportModule
  ],
  controllers: [AuthController],
  providers: [
    LocalStrategy
  ]
})
export class AuthModule {}
