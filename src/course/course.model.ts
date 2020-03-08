import {ApiOperation, ApiProperty} from "@nestjs/swagger";
import {arrayProp, modelOptions, prop, Ref} from "@typegoose/typegoose";
import {BaseModel} from "../base/base.model";
import {Episode} from "../episode/episode.model";


@modelOptions({
    schemaOptions: {
        timestamps: true,
        toJSON: {virtuals: true}
    }
})
export class Course extends BaseModel{

    @ApiProperty({description: '课程名称'})
    @prop()
    public name: string;

    @ApiProperty({description: '课程展示图地址'})
    @prop()
    public coverUrl: string;

    @ApiProperty({description: '课程简介'})
    @prop()
    public description: string;

    @prop()
    episodes: Episode [];

}
