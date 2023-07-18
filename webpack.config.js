const path = require("path");

module.export = {
    entry: "./src/js/index.js",
    module:{
        rules:[
            {test: /\.css$/, use: ["css-loader", "style-loader"]},

        ]
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    }
}