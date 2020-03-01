import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  index(): any {
    return [
      [1, 2, 3, 4],
      ['a', 'b', 'c', 'd']
    ];
  }

  create(): any {
    return {status: 1, msg: 'success'};
  }

  detail() : any {
    return {
      id: 123,
      title: 'abcde'
    }
  }
}
