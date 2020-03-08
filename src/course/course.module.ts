import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import {TypegooseModule} from "nestjs-typegoose";
import {Course} from "./course.model";
import {Ret} from "../base/Ret";
import {Episode} from "../episode/episode.model";

@Module({
  imports: [
      TypegooseModule.forFeature([Course, Episode])
  ],
  controllers: [CourseController],
    providers: [
        Ret
    ]
})
export class CourseModule {}
