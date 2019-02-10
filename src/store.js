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
    mutations:{
    
    },
    actions:{
    
    }
    })
