import {prop} from "@typegoose/typegoose";
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class BaseModel {

    @prop()
    @IsNotEmpty({message: '名称不能为空'})
    public name: string;

    @prop()
    public pubDate: Date;

    @prop()
    public uptDate: Date;

}
