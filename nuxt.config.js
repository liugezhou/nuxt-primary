/*
 * @Author: 刘明周
 * @Date: 2022-03-13 21:08:10
 * @LastEditors: 刘明周
 * @LastEditTime: 2022-03-14 11:58:03
 * @FilePath: /nuxt-primary/nuxt.config.js
 * @Description: 
 */
export default {
  // 用于配置默认的meta标签，具体配置可查看vue-meta配置文档
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

  // 该配置项用于定义应用的全局样式文件、模块或第三方库
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  //该配置用于那些需要在根vue.js应用实例化之前需要运行的javascript插件
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/common'
  ],
  // 文档中暂时没找到
  components: true,
  // 文档中暂时没找到
  buildModules: [
  ],
  modules: [
  ],
  router:{
    middleware:'test'
  },
  // 添加一些模块以减少应用bundle的体积
  build: {
    // 项目默认配置:使用babel与特定的依赖关系进行转换
    transpile: [/^element-ui/],
    //分析构建可视化打包文件，基于结果分析和优化，可以通过传入boolean值和对象两种方式。只是用于查看打包优化，开启true打包后提示 Notice: Please do not deploy bundles built with "analyze" mode, they're for analysis purposes only.  
    // analyze:true

    // babel为js和Vue文件设定自定义的babel配置,如果要为客户端和服务端版本设置不同预设，请使用presets作为函数

    //cache 默认为false，暂不了解

    //crossorigin:默认为undefined，为html中link标签或者img、video、script等添加crossorigin属性

    // cssSourceMap:开发环境默认开启，生产环境默认关闭

    // extend为客户端和服务端的购置配建进行手工的扩展处理

    // filenames 自定义打包文件名(一般不需要修改)

    //plugins:配置webpack插件

    //publicPath： 默认为/.nuxt/,如果我们配置https://cdn.liugezhou.online 那么我们nuxt build后，直接将.nuxt/dist/client目录上传到我们的cdn中即可

    //ssr：默认为true通用模式，false为spa模式

    //styleResources：需要为css预处理器指定要包含的 模式和路径：例如 [sass:'./assets/styles/index.scss']
  }

  //router：用于覆盖Nuxt.js默认的vue-router配置
}
