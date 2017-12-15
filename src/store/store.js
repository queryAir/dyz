import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  lists: [],
  page: 3,
  len: 5
}

const mutations = {
  addList(state, obj) {
    let list = {
      title: obj.title,
      num: obj.num,
      time: new Date()
    }
    let Tarr = state.lists.filter( item => item.title == list.title)
    !Tarr.length && state.lists.push(list)
    state.lists.sort((prev, next) => next.num - prev.num)
  },
  /**
   * [changeList description]
   * @param  {[type]} state [description]
   * @param  {[type]} obj   [description] .num .title .time
   * @return {[type]}       [description]
   */
  changeList(state, obj) {
    let list = state.lists.filter(item => item.time == obj.time)[0]
    list.title = obj.title
    list.num = obj.num
    state.lists.sort((prev, next) => next.num - prev.num)
  },
  delList(state, time) {
     state.lists = state.lists.filter(item => item.time !== time)
  },
  changePage(state, page) {
    state.page = page
  },
  changeLen(state, len) {
    state.len = len
  }
}



export default new Vuex.Store({
  state,
  mutations
})
