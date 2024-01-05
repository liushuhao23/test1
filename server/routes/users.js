/*
 * @Author: liushuhao
 * @Date: 2020-08-15 20:30:43
 * @LastEditTime: 2020-08-15 22:51:25
 * @LastEditors: liushuhao
 * @Description: 
 * @FilePath: /test-koa/routes/users.js
 */
var router = require('koa-router')();

router.get('/user', async function (ctx, next) {
  ctx.body = 'this a users response!';
})
module.exports = router.routes();
