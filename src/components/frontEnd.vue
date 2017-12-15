<template>
 <div class="front-wrapper">
      <table>
        <tr>
          <th>名称</th>
          <th>访问量</th>
        </tr>
        <tr v-for="i in num" v-if="lists[p*num+i-1]">
          <td>{{lists[p*num + i-1].title}}</td>
          <td>{{lists[p*num + i-1].num}}</td>
        </tr>
      </table>
      <button @click='p>0 && p--'>&lt;</button>
      <span>{{p+1}}</span>
      <button @click="(p<page-1) && p < (Math.ceil(lists.length/num)-1) && p++">&gt;</button>
 </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      p: 0
    }
  },
  computed: {
    ...mapState({
     lists: 'lists',
      num: 'len',
      page: 'page'

    })
  }
}
</script>

<style>

</style>
