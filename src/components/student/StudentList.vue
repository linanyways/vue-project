<template>

  <div>
      <slot></slot>
      学员列表：
      <ul>
          <li v-for="(item,index) in newStudentList" :key="index+item">{{item}}</li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
//   props:['student-list'],
  data(){
      return{
        // newStudentList:[]
      }
  },
  methods:{

  },
  computed:{
    //  ...mapState(['studentList']),
     newStudentList(){
       console.log(this.$store.getters.newStudentList,'ff')
       return this.$store.getters.newStudentList
     }
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