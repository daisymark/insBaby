//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
var path = require("path");
module.exports = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	entry: {
		app: ["./src/main.js"]//唯一入口文件
	},
	output: {
		path: path.resolve(__dirname, "page"),
		filename: "bundle.js"//打包后输出文件的文件名
	},
	module: {
	    rules: [
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader']
			},
	        {
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				}
			}
	    ]
	},
	devServer: {
		contentBase: path.join(__dirname, "page"),
		compress: true,
		port: 9000,
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
	} 
};