<template>
  <div>
     <div class="tm-top-bar-bg"></div>
    <Introduction title="Your Favorites Hotels" subtitle="Visits your favorites hotels"></Introduction>
    <FilterPriceHotel :filterSelected="filterSelected" @change="hotelsFiltered"></FilterPriceHotel>
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
  middleware : 'isPrivate',
  data() {
    return {
      filterSelected:""
    };
  },
  async mounted() {
   await this.$store.dispatch('getAllFavorites')
  console.log('-------', 'esta llegando' )
  },
   computed:{
       favoritesHotels(){
        return this.$store.state.favoritesHotels
      },
  },
  methods: {
    deleteFavorite(id){
       this.$store.dispatch('deleteFavorite', {id})
    },
    hotelsFiltered(filterSelected){
      this.$store.dispatch('hotelsFiltered', {filterSelected})
    }

  /* async  hotelsFiltered(){
      if(this.filterSelected=="Ascendent"){
       let config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      };
        const Asc="http://localhost:8082/favorites/filterAsc"
      try {
        let filterA = await this.$axios.get(Asc,config);
        this.favoritesHotels = filterA.data;
      console.log(this.favoritesHotels)
      } catch (err) {
        console.log("no se conecta", err.response.data.error);
      }
      }
       if(this.filterSelected=="Descendent"){
      const Desc="http://localhost:8082/favorites/filterDesc"
      try {
        let filterD = await this.$axios.get(Desc, config);
        console.log(filterD);
        this.favoritesHotels = filterD.data;

      } catch (err) {
        console.log(err)
        console.log("no se conecta", err.response.data.error);
      }
    }
    } */
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
