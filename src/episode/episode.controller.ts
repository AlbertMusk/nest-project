import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {Episode} from "./episode.model";
import {ReturnModelType} from "@typegoose/typegoose";
import {Ret} from "../base/Ret";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('episode')
@Controller('episode')
export class EpisodeController {

    constructor(
        @InjectModel(Episode) private episode: ReturnModelType<typeof Episode>,
        public ret: Ret
    ) {
    }

    @Get('/')
    async getEpisodes() {
        const data = await this.episode.find();
        return this.ret.Success(data);
    }

    @Post('/')
    async saveEpisode(@Body() e: Episode) {
        e.pubDate = new Date();
        e.uptDate = new Date();
        const data = await this.episode.create(e);
        return data ? this.ret.Success(data) :this.ret.Fail();
    }

    @Get(':id')
    async getEpisode(@Param('id') id: string) {
        const data = await this.episode.findById(id);
        return this.ret.Success(data);
    }

    @Post(':id')
    async updateEpisode(@Param('id') id: string, @Body() e: Episode) {
        let data = await this.episode.findById('id');
        if(!data) {
            return this.ret.Fail(data, '找不到数据，请核实');
        }
        data = await this.episode.findByIdAndUpdate(id, e);
        return this.ret.Success(data);
    }

    @Post('delete/:id')
    async deleteEpisode(@Param('id') id:string) {
        let data = await this.episode.findById(id);
        if(!data) {
            return this.ret.Fail(data, '找不到数据，请核实');
        }
        data = await this.episode.findOneAndRemove(id);
        return this.ret.Success(data);
    }

}
