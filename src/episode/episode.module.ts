import { Module } from '@nestjs/common';
import { EpisodeController } from './episode.controller';
import {TypegooseModule} from "nestjs-typegoose";
import {Episode} from "./episode.model";
import {Ret} from "../base/Ret";

@Module({
  imports: [
      TypegooseModule.forFeature([Episode])
  ],
  controllers: [EpisodeController],
  providers: [
      Ret
  ]
})
export class EpisodeModule {}
