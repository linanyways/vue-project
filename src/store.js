import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        // 相当于公共数据池，所有的组件都可以共享组件
      name: 'vita',
      age: '24',
      studentList:[]    
    },
    getters:{
      // getters 相当于计算属性
      newStudentList(state){
        return state.studentList.map((item,index) =>{ // 不要忘记return，忘记写return 组件拿不到值
            if(index == 0){
              return `**${item}`
            }else if(index < 2){
              return `${item}##`
            }else{
              return `++ ${item} ++`
            }
          })
      }
    },
    mutations:{
    
    },
    actions:{
    
    }
    })
