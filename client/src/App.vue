<!--
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-12-01 15:45:34
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-12-01 16:07:11
-->
<template>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  width: 100%;
  height: 100vh;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
