<!--
 * @Author: 刘明周
 * @Date: 2022-03-13 21:08:10
 * @LastEditors: 刘明周
 * @LastEditTime: 2022-03-14 11:58:49
 * @FilePath: /nuxt-primary/pages/index.vue
 * @Description: 
-->
<template>
  <div class="main">
    <h1 @click="pluginAll">Hello,{{name}}</h1>
    <Tutorial/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'IndexPage',
  middleware:'test',
  layout:'blog',
  asyncData(ctx) {
    return {
      name:'Liu'
    }
  },
  methods: {
    pluginAll(){
      this.$liugezhou('1')
    }
  },
})
</script>
<style>
.main{
  border:1px solid red
}
</style>
