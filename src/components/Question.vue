<template>
<div>
    问题：{{question}}
</div>

</template>

<script>
export default {
 created(){     
     const questionId = this.$route.params.id;
      const index = this.questionList.findIndex(item => item.questionId == questionId);
     if(index == -1) {
         this.$router.replace('/err.html');
        // this.$router.push({name:'err'})
     }else{
         this.question = this.questionList[index].title;
     }
     
 },
 data(){
    return{
        question:'',
         questionList: [
            {
            questionId: 201801,
            title: "到底什么是es6中的class（类）？怎么实现class（类）？",
            answer: 'class 只是一个语法糖，在写法上更接近于Java,方便后端人员开发，类型跟构造函数一样'
            },
            {
            questionId: 201802,
            title:
                "什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？",
                answer:'es6箭头函数的this指向的永远是执行期上下文，省略了括号以及写法简单，应该使用箭头函数，不存在this 不能使用arguments，这样也不用但系this 指向问题'
            },
            {
            questionId: 201803,
            title:
                "什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？",
                answer:'解构赋值方便，可以无需声明就给变量赋值，交换变量的值方便'
            }
      ]
    }
 }
}
</script>

<style scoped>

</style>