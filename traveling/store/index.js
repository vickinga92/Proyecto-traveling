import jwt_decode from 'jwt-decode'

export const state = () => ({
  isAuth: false,
  currentToken: null,
  loggedUser: null,
  favoritesHotels: []
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
        console.log("no se conecta", err.response.data.error);
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
