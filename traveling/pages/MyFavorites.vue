<template>
  <div>
     <div class="tm-top-bar-bg"></div>
    <Introduction title="Your Favorites Hotels" subtitle="Visits your favorites hotels"></Introduction>
    <FavoritesHotels
      v-for="item in favoriteshotels"
      :key="item.location_id"
      :photo="item.photo"
      :name="item.name"
      :subcategory_type="item.subcategory_type"
      :location_string="item.location_string"
      :num_reviews="item.num_reviews"
      :helpful_votes="item.helpful_votes"
      :price="item.price"
      @delete="deleteFavorite"
    ></FavoritesHotels>
  </div>

</template>

<script>
import FavoritesHotels from "@/partials/FavoritesHotels";
import Introduction from "@/components/Introduction";

export default {
  data() {
    return {
      favoriteshotels: [
          {
         location_id:"",
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

  },

  methods: {

    async getAllFavorites() {
      let config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      };
      let newFavorite = {};

      try {
        let response = await this.$axios.get(
          "http://localhost:8082/favorites",
          config
        );
        console.log(response);
        this.hotels = response.data;
      } catch (err) {
        console.log("no se conecta");
      }
    },
   async deleteFavorite(){
        let config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      };
      let newFavorite = {};

      try {
        let response = await this.$axios.delete(
          "http://localhost:8082//favorites/:id",
          config
        );
        console.log(response);
        this.hotels = response.data;
      } catch (err) {
        console.log("no se conecta");
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
