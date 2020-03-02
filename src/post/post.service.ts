import { Injectable} from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import {Post} from './post.model'
import { ModelType } from '@typegoose/typegoose/lib/types';

@Injectable()
export class PostService {

  constructor(
    @InjectModel(Post) private readonly postModel: ModelType<Post>
  ) {};

  async index(): Promise<any> {
    const ret:any = await this.postModel.find();
    return ret;
  }

  async create(postDto): Promise<any> {
    await this.postModel.create(postDto);
    return {success: true};
  }

  async detail(id) : Promise<any> {
    const ret:any = this.postModel.findById(id);
    return ret;
  }

  async update(id, body) : Promise<any> {
    const ret: any = await this.postModel.findByIdAndUpdate(id, body);
    return ret;
  }

  async delete(id) : Promise<any> {
    const ret: any = await this.postModel.findByIdAndDelete(id);
    return {
      success: true
    }
  }
}
