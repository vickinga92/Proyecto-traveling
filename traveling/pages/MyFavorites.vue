<template>
  <div>
    <div class="tm-top-bar-bg"></div>
    <Introduction title="Your Favorites Hotels" subtitle="Visits your favorites hotels"></Introduction>
    <Carousel></Carousel>
    <FilterPriceHotel @change="hotelsFiltered"></FilterPriceHotel>
    <FavoritesHotels
      v-for="item in favoritesHotels"
      :key="item._id"
      :location_id="item.location_id"
      :photo="item.photo"
      :name="item.name"
      :subcategory_type="item.subcategory_type"
      :hotel_class="item.hotel_class"
      :location_string="item.location_string"
      :num_reviews="item.num_reviews"
      :helpful_votes="item.helpful_votes"
      :price="item.price"
      @delete="deleteFavorite(item._id)"
      @get="getInformation(item)"
    ></FavoritesHotels>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import FavoritesHotels from "@/partials/FavoritesHotels";
import Introduction from "@/components/Introduction";
import FilterPriceHotel from "@/components/FilterPriceHotel";

import Swal from "sweetalert2";

export default {
  name: "MyFavorites",
  middleware: "isPrivate",
  data() {
    return {
      filterSelected: "",
    };
  },
  async mounted() {
    await this.$store.dispatch("getAllFavorites");
  },
  computed: {
    favoritesHotels() {
      return this.$store.state.favoritesHotels;
    }
  },
  methods: {
    deleteFavorite(id) {
      this.$store.dispatch("deleteFavorite", { id: id });
    },
    hotelsFiltered(filterSelected) {
      this.$store.dispatch("hotelsFilteredInMongo", { filterSelected });
    },
     async getInformation(item) {
      this.location_id = item.location_id;
      this.$router.push(`/Hotels/${this.location_id}`);
    },
  },
  components: {
    Introduction,
    Carousel,
    FavoritesHotels,
    FilterPriceHotel
  }
};
</script>

<style>
</style>
