
export class Ret{

    constructor(data?:any, message?:string, count?:number, code?:number) {
        this.code = code;
        this.data = data;
        this.msg = message;
        this.count = count;
    }

    public count: number;

    public code:number;

    public data: any;

    public msg:string;

    public Success(data?: any, msg?: any, count?:number, code?:number) {
        return new Ret(data||[], msg||'操作成功', count||0, code||1);
    }

    public Fail(data?: any, msg?: any, count?:number, code?:number) {
        return new Ret(data||[], msg||'操作失败', count||0, code||0);
    }

}
