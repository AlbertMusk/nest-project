## 基础知识
1. 目录结构
    - src为文件主目录，其中main为入口文件，app.module代表模块，其他同理
    - nest以模块区分，每个nest至少有一个模块，即根模块。如果一个nest项目比较大，就需要分出许多子模块，每个模块中都包含Controller、Module和Service，（与angular类似）
2. 注解
    - @Module代表这个class为一个module， @Controller代表为controller， 其中@Get代表一个get请求的方法 @Get中可以传一个path代表这个get方法的路径
3. 运行
    - 使用命令`npm run start:dev`可以启动项目，启动项目后访问设置的监听端口，可以发现控制台中输出如下
        1. 启动一个nest项目
        2. 初始化AppModule依赖
        3. AppController解析路由
        4. 根据解析的路由地址获取相应的处理方法
        5. 一个nest就成功运行了
4. 命令
    - 使用 `nest -h` 我们就可以看到关于nest的命令
    - 其中 `generate|g` 这个子命令比较常用，`nest generate|g [options] <schematic> [name] [path]`可以创建一个新的Class、Controller或是Module
    - 使用 `nest g mo post` 可以创建一个新的模块, 运行命令后在src下就有了一个名为post的模块
    - 然后使用 `nest g co post`可以创建controller
5. 秘籍
    - 使用swagger自动构建api接口文档
    - 使用详情 [swagger](https://docs.nestjs.cn/6/recipes?id=openapi-swagger)
6. 注解
    - controller中取参数可以使用 `@Body body, @Query query, @Param param`
    - 为了使参数更加明了，可以为参数体设置一个类型，这个类型一般是*Dto, 具体请看Entry
    - 使用 `@Param(param) p` 即可获取类型为 `http://localhost:8888/api/post/:id` 中的参数id
7. 连接mongoDB
    - 连接MongoDB使用mongoose， 但是推荐使用typegoose6.0
    - 使用yarn add @hasezoey/typegoose 安装
    - 在相应的module下创建一个 *.model.ts的文件，用于存储model
    - 在导出model时， 使用typegoos6.0提供的方法 `export const model = getModelByClass(class)`

   7.1 使用模块化的思想连接mongoDB
    - 安装 `yarn add nestjs-typegoose`
    - 在 app.module.ts文件中通过 `imports` 使用 `TypegooseModule.forRoot(url, options)`注入连接
    - 在需要使用model的模块文件 *.module.ts 同样通过 `imports` 使用 `TypegooseModeul.forFeature([model])` 注入
    - 在该模块下需要使用的地方通过constructor使用 `@InjectModel(Model) private readonly model`进行注入
    - 使用model时通过 `this.model`使用
8. 全局管道
    - 在main.ts文件中加入 `app.useGlobalPipes(new ValidationPipe())`
    - 然后安装 `class-validator`  `class-transformer`两个包，第一个用于验证，第二个用于转换类型
    - 然后在Dto中通过注解使用
