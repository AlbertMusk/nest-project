import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {Course} from "./course.model";
import {ModelType, ReturnModelType} from "@typegoose/typegoose/lib/types";
import {Ret} from "../base/Ret";
import {ApiTags} from "@nestjs/swagger";
import {Episode} from "../episode/episode.model";

@ApiTags('course')
@Controller('course')
export class CourseController {

    constructor(
        @InjectModel(Course) private readonly course: ReturnModelType<typeof Course>,
        @InjectModel(Episode) private readonly episode: ReturnModelType<typeof Episode>,
        public ret: Ret
    ) {
    }

    @Get('/')
    async getCourses() {
        const courses = await this.course.find();
        for (const course of courses) {
            const episodes = await this.episode.find({courseID: course._id});
            course.episodes = episodes;
        }
        return this.ret.Success(courses,'', courses.length);
    }

    @Post('/')
    async createSource(@Body() source: Course) {
        source.pubDate = new Date();
        source.uptDate = new Date();
        const data = await this.course.create(source);
        return this.ret.Success(data);
    }

    @Get(':id')
    async getSource(@Param('id') id:string) {
        const data = await this.course.findById(id);
        data.episodes = await this.episode.find({courseID: data._id});
        return this.ret.Success(data);
    }

    @Post(':id')
    async updateSource(@Param('id') id: string, @Body() source: Course) {
        let data = await this.course.findById(id);
        if(!data) return this.ret.Fail();
        data = await this.course.findByIdAndUpdate(id, source);
        return this.ret.Success(data);
    }

    @Post('delete/:id')
    async deleteSource(@Param('id') id:string) {
        if(!id) return this.ret.Fail();
        const source = await this.course.findOneAndRemove(id);
        return this.ret.Success(source);
    }


}
