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
    saveProduct({commit}, payload){

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