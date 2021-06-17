import Vue from "vue";


const state = {
    products:[]
}

const getters={
    getProducts(state){
        return state.products;
    },
    getProduct(state){

    }
}

const mutations ={
    updateProductList(state,product){
        state.products.push(product);
    }
}

const actions={
    initApp({commit}){
        // Vue resource config
    },
    saveProduct({dispatch,commit}, product){
        Vue.http.post("https://urun-islemleri-prod-865f0-default-rtdb.firebaseio.com/products.json", product)
        .then((response)=>{
            /**************** ürün listesi güncelleme */
            product.key = response.body.name;
            commit("updateProductList", product);

            let tradeResult = {
                purchase: product.price,
                sale: 0,
                count: product.count
            }
            dispatch("setTradeResult", tradeResult)
        })   
        
    },
    sellProduct({commit},payload){

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}