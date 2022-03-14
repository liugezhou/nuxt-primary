<!--
 * @Author: 刘明周
 * @Date: 2022-03-14 11:26:35
 * @LastEditors: 刘明周
 * @LastEditTime: 2022-03-14 11:26:37
 * @FilePath: /nuxt-primary/layouts/error.vue
 * @Description: 
-->
<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'blog' // 你可以为错误页面指定自定义的布局
  }
</script>