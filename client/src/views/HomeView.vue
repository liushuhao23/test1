<!--
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-12-01 15:45:34
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-12-01 16:07:31
-->
<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
}
</style>
