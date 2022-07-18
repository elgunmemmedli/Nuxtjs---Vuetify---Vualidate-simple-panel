import Vuex from 'vuex'
export const state = ()=>({
    users : [ {
        name: 'Admin Test',
        email : 'admin@gmail.com',
        select : 'Admin'
      },]
})


export const mutations ={
    addUser(state, payload){
        state.users.push(payload);
        this.$router.replace({ path: 'userList' })
    }
}

export const getters = {
    adminCounter(state){
        return state.users.length;
    }
}