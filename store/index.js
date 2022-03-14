/*
 * @Author: 刘明周
 * @Date: 2022-03-14 13:31:19
 * @LastEditors: 刘明周
 * @LastEditTime: 2022-03-14 13:31:20
 * @FilePath: /nuxt-primary/store/index.js
 * @Description: 
 */
export const state = ()=>({
  counter:0
})

export const mutations = {
  increment(state){
    state.count++
  }
}