const proxy = require("http-proxy-middleware");
module.exports  = function (app) {
    app.use("/m",proxy({
        target:"http://182.92.107.95:3000",
        changeOrigin:true,
        pathRewrite:{
            "^/m":""
        }
    }))
}