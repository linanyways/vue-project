<template>
  <ul>
    <router-link
      v-for="item in questionList"
      :key="item.questionId"
      :to="{name:'question', params:{id: item.questionId}}"
      tag="li"
    >{{item.title}}</router-link>
  </ul>
</template>

<script>
export default {
    // 组件内独享路由
//   beforeRouteEnter(to, from, next) {
//     const answer = confirm("还没登录呢");
//     if (answer) {
//       next({ name: "user" });
//     } else {
//       next(false);
//     }
//   },
// // 设置离开页面的弹窗
//   beforeRouteLeave(to, from,next){
//       const answer = confirm('真的要离开吗？');
//       if(answer){
//         next();
//       }else{
//           next(false)
//       }
//   },
  data() {
    return {
      questionList: [
        {
          questionId: 201801,
          title: "到底什么是es6中的class（类）？怎么实现class（类）？",
          answer:
            "class 只是一个语法糖，在写法上更接近于Java,方便后端人员开发，类型跟构造函数一样"
        },
        {
          questionId: 201802,
          title:
            "什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？",
          answer:
            "es6箭头函数的this指向的永远是执行期上下文，省略了括号以及写法简单，应该使用箭头函数，不存在this 不能使用arguments，这样也不用但系this 指向问题"
        },
        {
          questionId: 201803,
          title:
            "什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？",
          answer: "解构赋值方便，可以无需声明就给变量赋值，交换变量的值方便"
        }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  margin-top: 20px;
}
li {
  line-height: 30px;
}
</style>