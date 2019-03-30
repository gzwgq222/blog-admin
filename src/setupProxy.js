const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/api', { 
       target: 'http://119.23.63.123:3000',
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        '/api': '/'
       },
       // cookieDomainRewrite: "http://localhost:3000"
    }))
}