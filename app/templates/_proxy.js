var options = {

  //'weblogic': 'http://localhost:7001',
  'weblogic': 'http://152.139.92.167:7011',
  'static': 'http://localhost:3000'
  
};
var API_URL = 'rest_api';
httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});
var connect = require('connect');
var http = require('http');
  


var proxyApp = connect().use(function(req,res) {

  var target = options.static;
  if(req.url.indexOf(API_URL) > -1) {
      req.url = req.url.replace(API_URL,'');
      target = options.weblogic;
  }
  console.log('req' + req.url);
  proxy.web(req, res, {
    target: target
  });
});
http.createServer(proxyApp).listen(8000);
console.info('Running HTTP Proxy');


var app = connect()
  .use(connect.static('build/'))
  .use(connect.directory('build/'))
  .use(connect.cookieParser())
  .use(connect.session({ secret: 'my secret here' }));

http.createServer(app).listen(3000);
console.info('Running Web Server');