<template>
  <div class="end-wrapper">
     <div class="set-wrapper">
        榜单长度:<input type="text" :value='len' @input="e => changeL(e.target.value)">
        榜单页数:<input type="text" :value='page' @input="e => changeP(e.target.value)">
     </div>
      <div class="add-wrapper">
        名字: <input type="text" v-model="name">
        长度: <input type="text" v-model="l">
        <button @click = 'add'>确定</button>
      </div>
      <table class="lists">
        <tr>
          <th>编号</th>
          <th>名称</th>
          <th>时间</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in lists">
          <td>{{index + 1}}</td>
          <td>{{item.title}}</td>
          <td>{{item.time}}</td>
          <td>{{item.num}}</td>
          <td>
            <span @click='revise(item.num ,item.title, item.time)'>修改</span>
            <span @click="del(item.time)">删除</span>
          </td>
        </tr>
      </table>
      <div class="hide-wrapper" v-show='flag'>
        <div class="bc"></div>
        <div class="content">
            <input type="text" v-model='TempName'>
            <br>
            <input type="text" v-model='TempNum'>
            <br>
            <button @click='_changeList({time, title: TempName, num: TempNum});flag=false'>确定</button>
            <button @click="flag = false">取消</button>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data() {
    return {
      name: '',
      l: '',
      flag: false,
      TempNum: '',
      TempName: '',
      time: null
    }
  },
   computed: {
     ...mapState({
       lists: state => state.lists,
       len: state => state.len,
       page: state => state.page
     })
   },
   methods: {
     ...mapMutations({
       changeL: 'changeLen',
       changeP: 'changePage',
       _addList: 'addList',
       del: 'delList',
       _changeList: 'changeList'
     }),
     add() {
       if(this.l && this.name) {
          this._addList({title: this.name, num: this.l})
          this.l = ''
          this.name = ''
       } else {
          this._addList({title: 'name' + parseInt(Math.random()*10000), num: parseInt(Math.random()*10000000000) })
       }
     },
     revise(num ,title, time) {
       this.flag = true
       this.TempNum = num
       this.TempName = title
       this.time = time
     }
   }
}
</script>

<style lang='css' scoped>
 .lists {
   width: 80%;
   margin: 0 auto;
 }

 .bc {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: #000;
   opacity: .3;
 }
 .content {
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
 }
</style>
