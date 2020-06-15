import jwt_decode from 'jwt-decode'
import Swal from "sweetalert2";

export const state = () => ({
  isAuth: false,
  currentToken: null,
  loggedUser: null,
  favoritesHotels: [],
  news:[],

})
 export const actions={
    login(context){
      let token = window.localStorage.token || null
      context.commit('setCurrentToken', token)
    },
    logout(context){
      window.localStorage.removeItem("token");
      context.commit('setCurrentToken')
    },

    async getAllFavorites(context) {
      let config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      };
      let favoritesHotels = {};

      try {
        let response = await this.$axios.get(
          "http://localhost:8082/favorites",
          config
        );
        console.log(response);
        context.commit('setFavoritesHotels', response.data)
      } catch (err) {
        console.log(err)
        console.log("no se conecta", err.response.data.error);
      }
    },
    async deleteFavorite(context, payload){
      let config = {
     headers: {
       Authorization: `Bearer ${window.localStorage.getItem("token")}`
     }
   };
   let newFavorite = {};

   try {
     let response = await this.$axios.delete(
       `http://localhost:8082/favorites/${payload.id}` ,
       config

     );
     context.dispatch('getAllFavorites')
      Swal.fire({
         icon: "success",
         title: "ok...",
         text: "se ha eliminado correctamente!",
       });

   } catch (err) {
     console.log(err)
     console.log("no se conecta", err.response.data.error);
   }
  },
  async hotelsFiltered(context, payload){
    let config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    };
    if(payload.filterSelected=="Ascendent"){
      console.log(payload.filterSelected)
    try {
      const Asc="http://localhost:8082/favorites/filterAsc"
      let filterA = await this.$axios.get(Asc,config);
     context.commit('setFavoritesHotels', filterA.data)
    console.log(filterA)
    } catch (err) {
      console.log("no se conecta", err.response.data.error);
    }
    }
     if(payload.filterSelected=="Descendent"){
      console.log(payload.filterSelected)

    const Desc="http://localhost:8082/favorites/filterDesc"
    try {
      let filterD = await this.$axios.get(Desc, config);
      console.log(filterD);
      context.commit('setFavoritesHotels', filterD.data)
    } catch (err) {
      console.log(err)
      console.log("no se conecta", err.response.data.error);
    }
  }
  },
  async getNews(context){
    try {
      let news = await this.$axios.get("http://localhost:8082/news");
      console.log(news)
      context.commit('setNews', news.data)
      console.info(news)
     console.info(news.data)
    } catch (err) {
      console.log(err, 'no se conecta')
      console.log(err.news.data.error);
    }
  }
}
export const mutations = {
  setCurrentToken(state, token = null) {
    state.currentToken = token

    console.info(state.isAuth)
    if(token){
      state.loggedUser = jwt_decode(token)
      console.log(state.loggedUser)
      this.$axios.setHeader('Authorization', 'Bearer' + state.currentToken)
      state.isAuth=true
    }
    if(!token){
      state.loggedUser=null
      state.currentToken = null
      delete this.$axios.defaults.headers.common["Authorization"]
      state.isAuth=false
    }
  },
  setFavoritesHotels(state, hotels){
    state.favoritesHotels = hotels
  },
  setNews(state, newsArt){
    state.news = newsArt
  }
}
export const getters = {
  getToken(state){
    return state.currentToken
  },
  getFavoritesHotels(state){
    return state.favoritesHotels
  }
}



/* export const mutations ={
  headersAxios(){
    axios.setHeader({
      method: "GET",
      headers: {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key":
          "ab459f0c2bmsh8151e1f61dd047dp1eb171jsnfe297ef8c177"
      }
    })
  }

}
 */
