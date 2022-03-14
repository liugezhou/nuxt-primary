<!--
 * @Author: 刘明周
 * @Date: 2022-03-13 21:08:10
 * @LastEditors: 刘明周
 * @LastEditTime: 2022-03-14 13:30:51
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
> 配置项见nuxt.config.js文件中注释说明

# 路由

> + 基础路由:根据pages的目录结构，自动生成路由配置
> + 动态路由:定义带参数的动态路由，需要创建对应的下划线作为前缀的vue文件或目录
> + 路由参数校验: Nuxt.js可以让你在动态路由组件中去定义参数校验方法，验证参数是否合法
> + 嵌套路由:pages下新建同名vue文件的目录，该目录用来存放子视图文件。
> + 命名视图：
## 路由-过度动效
> nuxt.js使用vue中的<tansition>组件来实现路由切换时的过渡动效

### 全局过渡动效设置
> 默认使用的过渡效果为page  

> 若想每一个页面切换有fade效果：  
> + 在assets/下创建一个所有路由公用的css文件：main.css  
> + 然后添加到nuxt.config.js中去

### 页面过渡动效设置
> + 添加css说明 
> + 在该组件中使用 transition配置项

# 视图
## 模板
> 创建app.html文件

## 布局
> 分为默认布局和自定义布局  
> + 默认布局为layouts/default.vue 
> + 自定义布局为：layout/blog.vue，在pages下通过layout属性使用

## 页面
> asyncData(ctx):最重要的一个键，支持异步处理数据--扩展了vue.js，该内部数据会与data方法中数据融合一并返回给当前组件 
> + 由于asyncData方法是在组件初始化前被调用的，所以方法内没有办法通过this来引用组件的实例对象 
> + 使用方法一：返回一个Promise 
> + 使用方法二：使用async和await  
> + 在服务端调用asyncData时，可以访问用户请求的req和res对象 
> + 可以直接访问路由参数，比如定义了一个名为_slug.vue的文件，那么可以使用 ctx.params.slug来获取该值 

> + head:配置当前页面的Meta标签 
> + layout:设置当前页面使用的布局(layouts根目录布局文件)  

# 插件
> 使用插件的步骤：  
> + 增加文件plugins/some-plugin.js  
> + nuxt.config.js中通过plugins属性配置 
> + 可以通过插件注入Vue实例(Vue.prototype.method1 = {}) 
> + 新增的属性和方法使用$作为前缀

## 同时注入
> 同时在context、Vue实例、Vuex中注入，可以使用inject方法。  
> 它是plugin导出函数的第二个参数
```
# plugin/combined-inject.js
export default ({app},inject)=>{
  inject('myInjectedFuntion',str => console.log('it is so easy',str))
}

# nuxt.config.js
export default{
  plugins:['~/plugin/combined-inject.js']
}
```
> + 此时，我们就可以在Vue组件、Vuex中、asyncData中使用this.$myInjectedFuntion()方法了

## 只在客户端使用插件的设置
> ssr设置为false:plugins: [{ src: '~/plugins/vue-notifications', ssr: false }]

# 模块
> + 模块只是引导Nuxt按顺序调用的函数，框架在加载之前等待每个模块完成。

# store
> + Nuxt会从根目录中去查找store目录，如果存在，就会引用Vuex模块，将Vuex模块添加到vendors构建配置中去，且在Vue根实例配置store选项。


