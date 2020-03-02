import { prop } from '@typegoose/typegoose';

export class Post {

  // 使用@prop注解可以表示为一个属性，prop中可以传参数
  @prop()
  title: string;

  @prop()
  content: string;
}
