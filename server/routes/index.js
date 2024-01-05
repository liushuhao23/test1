/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2020-11-12 14:08:55
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-06-05 19:31:28
 */
module.exports =  (router) => {
  router.get('/welcome', async function (ctx, next) {
    ctx.state = {
      title: 'koa2 title'
    };
    // await ctx.render('welcome', {title: ctx.state});
  })
}
