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
