/*
 * @Author: 刘明周
 * @Date: 2022-03-13 21:08:10
 * @LastEditors: 刘明周
 * @LastEditTime: 2022-03-14 09:41:19
 * @FilePath: /nuxt-primary/nuxt.config.js
 * @Description: 
 */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'header-title',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  plugins: [
    '@/plugins/element-ui'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: [
  ],
  // 添加一些模块以减少应用bundle的体积
  build: {
    // 项目默认配置:使用babel与特定的依赖关系进行转换
    transpile: [/^element-ui/],
    //分析构建可视化打包文件，基于结果分析和优化，可以通过传入boolean值和对象两种方式
    // analyze:true
    // babel  为js和Vue文件设定自定义的babel配置
  }
}
