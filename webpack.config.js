require('es6-promise').polyfill()
module.exports = {

	context: __dirname + "/app",
    entry: "./index.js",
    output: {
        path: __dirname + "/app",
        filename: "bundle.js"
    },
    module: {
    	loaders: [
    		{test: /\.js$/, loader: 'babel'},
    		{ test: /\.css$/, loader: "style!css" }
    	]
    }
};

