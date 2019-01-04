import * as mutationsType from "./mutation-types.js"
export default{
    [mutationsType.USERNAME](state,username){
        state.username=username
    },
    [mutationsType.TOUXIANG](state,touxiang){
        state.touxiang = touxiang
    },
    [mutationsType.JIANJIE](state,jianjie){
        state.jianjie = jianjie
    },
    [mutationsType.FENSI](state,fensi){
        state.fensi = fensi
    },
    [mutationsType.GUANZHU](state,guanzhu){
        state.guanzhu = guanzhu
    },
    [mutationsType.CITY](state,city){
        state.city = city
    },
    [mutationsType.GENDER](state,gender){
        state.gender = gender
    },

}