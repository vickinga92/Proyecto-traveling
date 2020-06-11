<template>
  <div>
     <div class="tm-top-bar-bg"></div>
    <Introduction title="Your Favorites Hotels" subtitle="Visits your favorites hotels"></Introduction>
    <FilterPriceHotel></FilterPriceHotel>
    <FavoritesHotels
      v-for="item in favoritesHotels"
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
import FilterPriceHotel from "@/components/FilterPriceHotel";

import Swal from "sweetalert2";

export default {
  name: "MyFavorites",
  data() {
    return {
      filterSelected:"",
    };
  },
  async mounted() {
   await this.$store.dispatch('getAllFavorites')
  console.log('-------', 'esta llegando' )
  },
   computed:{
      favoritesHotels(){
        return this.$store.state.favoritesHotels
      }
  },
  methods: {
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
        this.favoritesHotels = response.data;
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
    FavoritesHotels,
    FilterPriceHotel
  }
};
</script>

<style>
</style>
