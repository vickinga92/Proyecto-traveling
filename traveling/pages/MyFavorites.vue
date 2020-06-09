<template>
  <div>
     <div class="tm-top-bar-bg"></div>
    <Introduction title="Your Favorites Hotels" subtitle="Visits your favorites hotels"></Introduction>
    <FavoritesHotels
      v-for="item in favoriteshotels"
      :key="item._id"
      :photo="item.photo"
      :name="item.name"
      :subcategory_type="item.subcategory_type"
      :hotel_class="item.hotel_class"
      :location_string="item.location_string"
      :num_reviews="item.num_reviews"
      :helpful_votes="item.helpful_votes"
      :price="item.price"
      @delete="deleteFavorite(item._id)"
    ></FavoritesHotels>
  </div>

</template>

<script>
import FavoritesHotels from "@/partials/FavoritesHotels";
import Introduction from "@/components/Introduction";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      favoriteshotels: [
          {
            id:"",
         photo:{
            images:{
              medium:{
                url:""
                }}},
          name: "",
          subcategory_type: "",
          hotel_class: "",
          location_string: "",
          num_reviews: "",
          helpful_votes:{photo:{
            helpful_votes:""
          }},
          price: ""
        },
      ]
    };
  },
  mounted() {
    this.getAllFavorites();
    this.checkAuth()
  },

  methods: {
    checkAuth() {
      this.isAuth = window.localStorage.getItem("token") != null;
    },
    async getAllFavorites() {
      let config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      };
      let favoriteshotels = {};

      try {
        let response = await this.$axios.get(
          "http://localhost:8082/favorites",
          config
        );
        console.log(response);
        this.favoriteshotels = response.data;
      } catch (err) {
        console.log("no se conecta", err.response.data.error);
      }
    },
   async deleteFavorite(id){
        let config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      };
      let newFavorite = {};

      try {
        let response = await this.$axios.delete(
          `http://localhost:8082/favorites/${id}` ,
          config
        );
        console.log(response);
        this.favoriteshotels = response.data;
        Swal.fire({
            icon: "success",
            title: "ok...",
            text: "se ha eliminado correctamente!",
          });

      } catch (err) {
        console.log(err)
        console.log("no se conecta", err.response.data.error);
      }
    }
  },
  components: {
    Introduction,
    FavoritesHotels
  }
};
</script>

<style>
</style>
