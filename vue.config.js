module.exports = {
    devServer: {
        host: "0.0.0.0", //不固定ip
        port: "9527",
        open: true,
        proxy: { //配置代理解决vue中的跨域问题
            "/api": {
                target: "http://localhost:3000/api/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}