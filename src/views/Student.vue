<template>

<div>
    <student-add ></student-add>
    <student-list ></student-list>
</div>
</template>

<script>
import StudentAdd from '@/components/student/StudentAdd';
import StudentList from '@/components/student/StudentList';

export default {
    data(){
       return{
           studentList:[],
       }
    },
    created(){
    },
    components:{
        StudentAdd,
        StudentList
    },
    methods:{
        addStu(name){
             this.studentList.push(name);
             console.log(this.studentList)
        }
    }
}
</script>

<style scoped>

</style>