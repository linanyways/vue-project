import Vue from 'vue'
import Router from 'vue-router'
import Learn from '@/views/Learn'
import Student from '@/views/Student'
import Community from '@/views/Community'
import Academic from '@/components/Academic'
import Download from '@/components/Download'
import Consult from '@/components/Consult'
import Question from '@/components/Question'
import Err from '@/components/Err'
const Home = () => import('@/views/Home')
const About = () => import('@/views/About')


Vue.use(Router)

 const router = new Router({
  mode:'history', // 为了不出现 #
  linkActiveClass:'active', // 重置路由的类名
  linkExactActiveClass: 'exact',
  routes: [
    {
      path: '/home',
      name: 'Home',
      components: {
        default: Home,
        'academic': Academic
      }
    },
    {
      path:'/about',
      name:'about',
      component: About
    },
    {
      path:'/learn',
      name:'learn',
      component: Learn
    },
    {
      path:'/community',
      name:'community',
      component: Community,
      redirect:'/community/academic', // 重定向问题
      meta:{
        login: false
      },
      children:[
        {
          path:'academic',
          name:'academic',
          component: Academic,
          // beforeEnter(to, from, next){
          //   const answer = confirm('请登录');
          //       if(answer){ // 当点击确定按钮，进入个人中心页面
          //         next({name:'user'})
          //       }else{
          //         next(false); // 当点击取消按钮，路由停止在当前页面不跳转
          //       }
          //     }   
        },
        {
          path:'download',
          name:'download',
          component: Download
        },
        {
          path:'consult',
          name:'consult',
          component: Consult
        }
      ]
    },
    {
      path:'/student',
      name:'student',
      component: Student,
    },
    {
      path: '/question/:id', // 动态路由
      name:'question',
      component:Question
    },
    {
      path:'/err.html',
      name:'err',
      component: Err
    },
    {
      path: '*',
      redirect(to){
        if(to.path== "/"){
         return '/home'
        }else{
          return {name:'err'}
        }          
      }
    },
  ]
});
// router.beforeEach((to,from, next)=> {
//   if(to.path == '/community/academic'){
//     const answer = confirm('请登录');
//     if(answer){ // 当点击确定按钮，进入个人中心页面
//       next({name:'user'})
//     }else{
//       next(false); // 当点击取消按钮，路由停止在当前页面不跳转
//     }
//   }else{
//     next();
//   }
// //  next(false); // 实现不执行下一步，点击路由没有反应
// })
export default router;
// to 是到哪里去
  // from 是从哪里来
  // next 是要到哪里去 如果不进行跳转 可以使用 next(false)