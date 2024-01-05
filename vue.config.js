/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-12-01 15:45:34
 * @LastEditors: liushuhao
 * @LastEditTime: 2024-01-05 14:52:54
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://xland-test.cbim.org.cn/kunlun/datacenter', // test
        target: 'http://localhost:3000', // dev
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
