import jwt_decode from 'jwt-decode'
import Swal from "sweetalert2";

export const state = () => ({
  isAuth: false,
  currentToken: null,
  loggedUser: null,
  favoritesHotels: [],
  news: [],
  hotels: [],
  city: "",
  checkIn: "",
  nights: "",
  adultsSelected: "",
  roomsSelected: "",

})
export const actions = {
  login(context) {
    let token = window.localStorage.token || null
    context.commit('setCurrentToken', token)
  },
  logout(context) {
    window.localStorage.removeItem("token");
    context.commit('setCurrentToken')
  },
  async searchHotel(context, payload) {
    let config = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "0901c50afdmsh35b7abe64c3e29cp1e08aajsnc53caebf6240"
      }
      //ab459f0c2bmsh8151e1f61dd047dp1eb171jsnfe297ef8c177
    };
    try {
      console.log(payload)
      const URL = `https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_ES&currency=EUR&units=km&query=${payload.city}`;

      let city = await this.$axios.get(URL, config);
      console.log(city.data);
      var location = city.data.data[0].result_object.location_id

      const URL1 = `https://tripadvisor1.p.rapidapi.com/hotels/list?currency=EUR&lang=en_ES&location_id=${location}&adults=${payload.adultsSelected}&checkin=${payload.checkIn}&rooms=${payload.roomsSelected}&nights=${payload.nights}`;

      let response = await this.$axios.get(URL1, config);
      context.commit('setHotels', response.data.data)
    } catch (err) {
      console.log(err);
    }
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
        "https://traveling-to.herokuapp.com/favorites",
        config
      );
      console.log(response);
      context.commit('setFavoritesHotels', response.data)
    } catch (err) {
      console.log(err)
      console.log("no se conecta", err.response.data.error);
    }
  },
  async deleteFavorite(context, payload) {
    let config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    };
    let newFavorite = {};

    try {
      let response = await this.$axios.delete(
        `https://traveling-to.herokuapp.com/favorites/${payload.id}`,
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
  async hotelsFilteredInMongo(context, payload) {
    let config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    };
    if (payload.filterSelected == "Ascendent") {
      try {
        const Asc = "https://traveling-to.herokuapp.com/favorites/filterAsc"
        let filterA = await this.$axios.get(Asc, config);
        context.commit('setFavoritesHotels', filterA.data)
      } catch (err) {
        console.log("no se conecta", err.response.data.error);
      }
    }
    if (payload.filterSelected == "Descendent") {
      const Desc = "https://traveling-to.herokuapp.com/favorites/filterDesc"
      try {
        let filterD = await this.$axios.get(Desc, config);
        context.commit('setFavoritesHotels', filterD.data)
      } catch (err) {
        console.log("no se conecta", err.response.data.error);
      }
    }
  },
  async getNews(context) {
    try {
      let news = await this.$axios.get("https://traveling-to.herokuapp.com/news");
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
    if (token) {
      state.loggedUser = jwt_decode(token)
      console.log(state.loggedUser)
      this.$axios.setHeader('Authorization', 'Bearer' + state.currentToken)
      state.isAuth = true
    }
    if (!token) {
      state.loggedUser = null
      state.currentToken = null
      delete this.$axios.defaults.headers.common["Authorization"]
      state.isAuth = false
    }
  },
  setFavoritesHotels(state, hotels) {
    state.favoritesHotels = hotels
  },
  setNews(state, newsArt) {
    state.news = newsArt
  },
  setHotels(state, hotels) {

    hotels.filter(hotel => hotel.price == undefined &&
      hotel.photo.images.medium.url == undefined)

    state.hotels = hotels
    var newPrice = []

    hotels.forEach(hotel => {
      newPrice = hotel.price.split("-")
      newPrice[0].replace("€", "").trim()
      hotel.price = newPrice[0]
    });
  },
  setHotelsFiltered(state, payload) {
    console.log(payload.filterSelected)
    if (payload.filterSelected == "Ascendent") {

      let priceFilteredAsc = state.hotels.sort((a, b) => {
        if (a.price !== undefined && b.price !== undefined) {
          return parseInt(a.price.replace('€', '').trim()) - parseInt(b.price.replace('€', '').trim())
        }
      })
      return priceFilteredAsc
    }

    if (payload.filterSelected == "Descendent") {
      let priceFilteredDesc = state.hotels.sort(function (a, b) {
        if (a.price !== undefined && b.price !== undefined) {
        return parseInt(b.price.replace('€', '').trim()) - parseInt(a.price.replace('€', '').trim())
        }
      });
      return priceFilteredDesc
    }
  },
}
export const getters = {
  getToken(state) {
    return state.currentToken
  },
  getFavoritesHotels(state) {
    return state.favoritesHotels
  }
}

