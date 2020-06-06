<template>
<div>
 <Porfolio
      v-for="item in hotels"
      :key="item.id"
      :photo="item.photo"
      :name="item.name"
      :subcategory_type="item.subcategory_type"
      :location_string="item.location_string"
      :url="item.url"
      :num_reviews="item.num_reviews"
      :votes="item.votes"
      :imgT="item.imgT"
      :price="item.price"
    ></Porfolio>

</div>
</template>

<script>
import Porfolio from '@/partials/Porfolio'
export default {
  data(){
    return{
      hotels: [
        {
          photo: "",
          name: "",
          subcategory_type: "",
          location_string: "",
          url: "",
          num_reviews: "",
          votes: "",
          imgT: "",
          price: ""
        }
      ]
    }
  },
mounted() {
    this.getAllFavorites();
  },

  methods: {
    async getAllFavorites() {
       let config = {
              headers: {
                'Authorization': `Bearer ${window.localStorage.getItem("token")}`
              }
            }
      let newFavorite = [{

      }];

      try {
        let response = await this.$axios.get("http://localhost:8082/favorites", config);
        console.log(response);
        this.hotels = response.data;
      } catch (err) {
        console.log("no se conecta");
      }
    }
  },
  components:{
  Porfolio
  }
}
</script>

<style>

</style>
