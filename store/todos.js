/*
 * @Author: 刘明周
 * @Date: 2022-03-14 13:32:30
 * @LastEditors: 刘明周
 * @LastEditTime: 2022-03-14 13:33:36
 * @FilePath: /nuxt-primary/store/todos.js
 * @Description: 
 */
export const state = ()=>({
  list:[]
})

export const mutations = {
  add(state,text){
    state.list.push({
      text,
      done:false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}