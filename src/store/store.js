import Vue from "vue";
import Vuex from "vuex";
import product from "./modules/product";

Vue.use(Vuex);



export const store = new Vuex.store({
    state:{},
    modules:{
        product
    }
})