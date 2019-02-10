<template>
<div>
    添加学生
    <input type="text" v-model="value" >
    <button @click="addStu">添加</button>
</div>

</template>

<script>
import { mapState } from 'vuex';

export default {
   data(){
       return {
           value:''
       }
   },
   methods:{
       addStu(){
        //    this.bus.$emit('add', this.value)
        // console.log(this.setName, 'setNam')
        this.$store.state.studentList.push(this.value)
       }
   },
   created(){
       console.log(this.bus,'bus')
   },
//    computed: {
//        age(){
//            return this.$store.state.age
//        },
//        name(){
//          return this.$store.state.name
//        } 
    //    ...mapState({ // mapState 是一个函数，返回值是key 和value
    //        setName: state => state.name,
    //        age: state => state.age
    //    }),
    //    ...mapState(['studentList'])
//    }
}
</script>

<style scoped>

</style>