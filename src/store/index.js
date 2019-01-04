import Vue from 'vue'
import Vuex from "vuex"

import defaultState from "./state"
import mutations from "./mutations"
// import actions from "./actions"

Vue.use(Vuex)

export default function(){
    const store = new Vuex.Store({
        state: defaultState,
        mutations: mutations,
        // actions: actions,
        plugins:[
            (state) =>{
                console.log(state)
            }
        ]
    })
    return store;

}