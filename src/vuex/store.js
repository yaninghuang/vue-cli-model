import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './actions'

Vue.use(Vuex)

const state = {
    isSchool:'',
    andData:{uid:'', htid:'', hasauth:'',schoolType:'',shengCode:'', cityCode:'',areaCode:'',schoolName:'',logo:''},
    classData:{classId:'',gradeId:'',className:''}
}

const mutations = {
	setIsSchool(state,data){
		state.isSchool = data;
    },
    setAndData(state,data){
        state.andData = data;
    },
    setClassData(state,data){
        state.classData = data;
    }
}

const store = new Vuex.Store({
    state,
    mutations
})


export default store