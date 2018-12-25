1 、assethook:
安装：
npm i --save asset-require-hook
用法：

    require('asset-require-hook')({
      extensions: ['jpg', 'png', 'gif','webp'],
      limit: 10000,
      name:'static/media/[name].[hash:8].[ext]'
    })

2 、bodyParser:
安装：
npm install body-parser
用法：

    app.use(bodyParser.json([options]))           
> 解析json格式   
'content-type':'application/json'   
options:inflate,limit,reviver,strict,type,verify

app.use(bodyParser.raw([options]))            
> 解析二进制格式   
'content-type':'application/octet-stream'   
options:inflate,limit,type,verify

app.use(bodyParser.text([options]))           
> 解析文本格式   
'content-type':'text/plain'   
options:defaultCharset,inflate,limit,type,verify

app.use(bodyParser.urlencoded([options]))     
> 解析formData格式   
'content-type':'application/x-www-form-urlencoded'   
options:extended,inflate,limit,parameterLimit,type,verify

3 、proxy
安装：
npm install --save-dev http-proxy-middleware
用法：

    app.use('/api', proxy({
      target: 'http://101.124.8.66:8888',   // 目标服务器 host
      changeOrigin: true,    // 默认false，是否需要改变原始主机头为目标URL
      ws: true,             // 是否代理websockets
      pathRewrite:{
        '^/api':'/'      // 重写请求，比如源访问的是api，那么请求会被解析为/
      }
    }))

4 、favicon    请求网页的logo图标
安装：
npm install serve-favicon
用法：

    app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))

5 、StaticRouter   常用于服务端渲染
安装：
npm install --save react-router-dom
用法：

    <StaticRouter
      location={req.url}
      context={context}
    >
      <App></App>
    </StaticRouter>

6、morgan(logger)
安装：
npm install morgan --save 
用法：
Using a predefined format string

    morgan('tiny')
Using format string of predefined tokens

    morgan(':method :url :status :res[content-length] - :response-time ms')
Using a custom format function

    morgan(function (tokens, req, res) {
      return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
      ].join(' ')
    })