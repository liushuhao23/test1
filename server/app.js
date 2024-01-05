/*
 * @Author: liushuhao
 * @Date: 2020-08-15 20:30:43
 * @LastEditTime: 2024-01-05 15:04:58
 * @LastEditors: liushuhao
 * @Description:
 * @FilePath: /test-koa/app.js
 */
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const views = require('koa-views')
const convert = require('koa-convert')
const json = require('koa-json')
const cors = require('koa2-cors');
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('./config')
const routes = require('./routes')
const JwtUtil = require('./common/jwt.js')


const userrouter = require('./routes/users');
const apirouter = require('./routes/api.js');
const articlesprRuter = require('./routes/articles.js')
const mockRouter = require('./routes/mock.js')
const koaBody = require('koa-body');


const port = process.env.PORT || config.port


// error handler
// onerror(app)
app.use(cors())
app.use(koaBody({
  multipart: true,
  formidable: {
    // maxFileSize: 200 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
  }
}))
app.use(async (ctx, next) => {
  if (ctx.request.method === 'GET') {
    await next();
  } else {
    await next();
  // 我这里登陆和注册请求去掉了，其他的多有请求都需要进行token校验
    // if (ctx.url != '/api/userlogin'
    //     && ctx.url != '/api/register'
    //     && ctx.url != '/api/jsonp'
    //     && ctx.url !== '/api/test1') {
    //     // let token = ctx.request.header['x-access-token'];
    //     // let jwt = new JwtUtil(token);
    //     // let result = jwt.verifyToken();
    //     if (result == 'err') {
    //         // console.log(result);
    //         // ctx.body = {
    //         //   code: 403,
    //         //   message: '登录已过期,请重新登录',
    //         //   success: false
    //         // };
    //       await next();
    //     } else {
    //       await next();
    //     }
    // } else {
    //   await next()
    // }
  }
});
app.use(bodyparser())
  .use(json())
  // .use(logger())
  .use(router.routes())
  .use(router.allowedMethods())
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})
// router.use('/userrouter', userrouter);
router.use('/api', apirouter);
// router.use('/api/mock', mockRouter);
// router.use('/api/articles', articlesprRuter);

routes(router)

app.on('error', function (err, ctx) {
  console.log(err)
  // logger.error('server error', err, ctx)c
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
