module.exports = {
    configureWebpack:{
        resolve: {
            alias: {
                'views': '@/views',
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',
            }
        },
    },
    devServer:{
        proxy:{
            '/proxyurl':{
                target: 'http://localhost:9999',
                changeOrigin: true,
                pathRewrite:{
                    '^/proxyurl': ''
                },
            }
        }
    },
}