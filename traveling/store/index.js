
export const state = () => ({
  isAuth: false,
  currentToken: null,
  loggedUser: null

})
export const actions={
   getToken(context){
    let token = window.localStorage.token
    if(token){
      context.commit('setCurrentToken', token)
    }
    if(!token){
      token = null,
      context.commit('setCurrentToken', token)
    }
  }
}
export const mutations = {
  setCurrentToken(state, token) {
    state.currentToken = token

    console.info(state.isAuth)
    if(token){
      this.$axios.setHeader('Authorization', 'Bearer' + state.currentToken)
      state.isAuth=true
    }
    if(!token){
      state.loggedUser=null
      state.currentToken = null
     // delete this.$axios.defaults.header.common['Authorization']
      state.isAuth=false
    }
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
