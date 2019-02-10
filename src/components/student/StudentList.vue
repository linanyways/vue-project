<template>

  <div>
      <slot></slot>
      学员列表：
      <ul>
          <li v-for="(item,index) in studentList" :key="index+item">{{item}}</li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
//   props:['student-list'],
  data(){
      return{
        // studentList:[]
      }
  },
  methods:{

  },
  computed:{
     ...mapState(['studentList'])
  },
//   created(){
//       this.bus.$on('add', name=>{
//           this.studentList.push(name);
//       })
//   }
}
</script>

<style scoped>

</style>