/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2020-12-22 18:20:54
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-08-09 15:52:27
 */
var router = require('koa-router')();
let Articles = require('../controller/Articles/Articles.js');


router.post('/savearticles', async function (ctx, next) {
    const Article = await new Articles();
    const token = ctx.request.header['x-access-token'];
    const result = await Article.addAriticles(ctx.request.body, token);
    if (result.length > 0) {
      ctx.body = {
        code: 200,
        message: '保存成功',
        success: true
      };
    } else {
      ctx.body = {
        code: 400,
        message: '保存失败',
        success: false
      };
    }
  })

  router.post('/articlesList', async function (ctx, next) {
    const Article = await new Articles();
    const token = ctx.request.header['x-access-token'];
    const result = await Article.articleList(token);
    if (result && result.length >= 0) {
      ctx.body = {
        code: 200,
        message: '保存成功',
        data: result,
        success: true
      };
    } else {
      ctx.body = {
        code: 400,
        message: '查询失败',
        success: false
      };
    }
  })


module.exports = router.routes();
