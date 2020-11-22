import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state:  {
        title: 'hodddddal',
        imagenes: [],
        productCart:[],
        categoria: []
    },
    mutations: {
        setImagen(state, img){
            state.imagenes= img
        },
        setProductCart(state,productsCart){
            state.productCart.push(productsCart) 
        },
       /* setCategoria(state,categoria){
            state.categoria=categoria
        }
        */
    },
    actions: {
        getImagen({commit}){
            return new Promise((resolve) =>{
                axios.get("http://127.0.0.1:8000/ventas/productos/")
                .then(response=>{
                    console.log(response.data)
                    commit('setImagen',response.data.results)
                    //this.imagenes = response.data.results
                    resolve()
                }) 
            })
        },
        addProductCart(contex,product){
            const cart = window.localStorage.getItem("cart")
            if(cart){
                contex.commit('setProductCart',JSON.parse(cart))
            }else{
                contex.commit('setProductCart',product)
                window.localStorage.setItem("cart",JSON.stringify(product))
            }
        },
        /*
        getCategoria({commit}){
            return new Promise((resolve) =>{
                axios.get("http://127.0.0.1:8000/ventas/categorias/")
                .then(response=>{
                    console.log(response.data)
                    commit('setCategoria',response.data.results)
                    //this.imagenes = response.data.results
                    resolve()
                }) 
            })
        }
        */
    },
    modules: {

    }

})