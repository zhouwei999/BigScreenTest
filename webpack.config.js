const HtmlwebpackPlugin = require('html-webpack-plugin')
const path = require('path');  // 导入的 path 模块是一个 Node.js 核心模块，用于操作文件路径

/*  Path.resolve()从后向前，若字符以 / 开头，不会拼接到前面的路径(因为拼接到此已经是一个绝对路径)；
    若以 ../ 开头，拼接前面的路径，且不含最后一节路径；若以 ./ 开头 或者没有符号 则拼接前面路径；*/
// console.log(1,path,__dirname)
module.exports = {
    entry: "./src/index.js",   // 入口文件
    output: {
        path: path.resolve(__dirname,'dist'),  // 打包产出路径
        filename: 'bundle.js'
    },
    /* 配置webpack-dev-server */
    devServer: {
        contentBase: path.join(__dirname,'dist'), 
        open: true,  // 自动打开浏览器
    },
    // 加载器
    module:{
        rules: [
            {  // 配置可以解析css后缀名文件
              test: /\.css$/,  
              use: ['style-loader', 'css-loader']
            },
            { // 配置可以解析scss后缀名文件
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // {
            //   test: /\.(jpg|png|gif|svg|webp)$/,
            //   use: ['file-loader']
            // },
            // {
            //   test: /\.(html|ejs)$/,
            //   use: ['html-loader']
            // }
          ]
    },
    // 插件
    plugins: [
        new HtmlwebpackPlugin({
            template: "./index.html",
            minify : {
                // removeComments:true,   //删除注释
                // collapseWhitespace: true      //删除空格，压缩
            },
        })
    ]
}