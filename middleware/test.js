/*
 * @Author: 刘明周
 * @Date: 2022-03-14 10:42:49
 * @LastEditors: 刘明周
 * @LastEditTime: 2022-03-14 10:49:41
 * @FilePath: /nuxt-primary/middleware/test.js
 * @Description: 
 */
export default function(ctx){
  console.log('I am middleware about test',ctx.route.name)
}