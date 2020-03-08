import {BaseModel} from "../base/base.model";
import {prop, Ref} from "@typegoose/typegoose";
import {ApiProperty} from "@nestjs/swagger";

export class Episode extends BaseModel{

    @ApiProperty({description: '章节名称'})
    @prop()
    public name: string;

    @ApiProperty({description: '多媒体地址'})
    @prop()
    public coverUrl: string;

    @ApiProperty({description: "课程id"})
    @prop()
    public courseID: string;

}
