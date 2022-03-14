<!--
 * @Author: 刘明周
 * @Date: 2022-03-13 21:08:10
 * @LastEditors: 刘明周
 * @LastEditTime: 2022-03-14 09:32:25
 * @FilePath: /nuxt-primary/README.md
 * @Description: 
-->
# 安装
> + npx  create-nuxt-app project-name

# 目录
## 一、assets
> + 默认情况下nuxt使用url-loader,file-loader,vue-loader这几个webpack加载器来处理文件的加载和引用。  
> + 对于不需要webpack处理的静态资源文件，可以直接放在static目录下，使用/直接引用。  

### webpack构建 
> + 默认情况下，vue-loader自动使用css-loader和Vue编译模板编译器来处理vue文件中的样式和模板。 

## 二、componnets
> Vue组件，Nuxt.js不会扩展增强该目录下Vue.js组件。也就是说这些组件不会像页面组件那样有asyncData方法的特性！

## 三、layouts
> + 该目录不能被重新命名，它的作用是用于组织应用的布局组件。  
> + 可通过添加 layouts/default.vue 文件来扩展应用的默认布局。 
> + 可以创建自定义布局(layouts/test.vue)，在pages/demo.vue中export default{layout:'test'}来使用。 
> + 通过layout/error.vue定制化错误页面，见官网代码示例。

## 四、midlleware components
> + 中间件允许我们定义一个自定义函数，运行在一个或一组页面渲染之前。  
> + 每一个中间件应放置在middleware/目录，文件名的名称为中间件名称。 
> + 一个中间件接收context作为第一个参数 
> + 中间件可以在nuxt.config.js或者指定的布局layout/index.vue或者页面pageas/demo.vue文件中使用

## 五、pages
> pages/ 下的.vue文件自动生成对应的路由配置 

## 六、plugins
> 用于组织那些需要在根vue.js应用实例化之前需要运行的JavaScript脚本

## 七、static
> /static/robots.txt映射至/robots.txt，此目录下文件不会被Nuxt.js调用webpack进行构建编译处理。

## 八、store
> 组织Vuex状态树文件，创建index.js文件可激活该配置

## 九、nuxt.config.js
> 用于组织Nuxt.js应用的个性化配置，以便覆盖默认配置。
### build
> analyze属性:可以查看打包后的应用体积，进行优化，只是用于查看打包优化，打包后提示 Notice: Please do not deploy bundles built with "analyze" mode, they're for analysis purposes only.  
> 