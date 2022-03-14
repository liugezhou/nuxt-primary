/*
 * @Author: 刘明周
 * @Date: 2022-03-14 11:55:57
 * @LastEditors: 刘明周
 * @LastEditTime: 2022-03-14 11:57:36
 * @FilePath: /nuxt-primary/plugins/common.js
 * @Description: 
 */
import Vue from 'vue'

Vue.prototype.$liugezhou = (a,b)=>{
  if(!a){
    console.log('你没有输入a值')
  }
  if(!b){
    console.log('你没有输入b值')
  }
  console.log(`你输入的值为${a}和${b}`)
}
