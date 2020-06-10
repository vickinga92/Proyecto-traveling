<template>

  <div class="tm-main-content" id="top">
            <div class="tm-top-bar-bg"></div>

      <SearchBox ></SearchBox>
     <!--  <FilterPriceHotel  ></FilterPriceHotel>
 -->
   </div>


</template>

<script>
import SearchBox from '@/components/SearchBox'
//import FilterPriceHotel from "@/components/FilterPriceHotel";

export default {
  name: "Hotels",
  /* data(){
    return{
      city: "",
      location: "",
      checkIn: "",
      nights: "",
      adultsSelected: "",
      roomsSelected: "",

filterSelected:"",

       hotels: [
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
         {
        id:"",
          photo:{
            images:{
              medium:{
                url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hotelpasarela.com%2Fes%2F&psig=AOvVaw0SsBZiDRm1_Cjaw7IE0YhQ&ust=1591702671375000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCfwtuQ8ukCFQAAAAAdAAAAABAI"}
                }
              },
          name: "soy el hotel de prueba ",
          subcategory_type: "hotel",
          hotel_class: "5.0",
          location_string: "malaga",
          num_reviews: "237",
          helpful_votes:{photo:{
            helpful_votes:"98"
          }},
          price: "78"
        },
        {
        id:"",
          photo:{
            images:{
              medium:{
                url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hotelpasarela.com%2Fes%2F&psig=AOvVaw0SsBZiDRm1_Cjaw7IE0YhQ&ust=1591702671375000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCfwtuQ8ukCFQAAAAAdAAAAABAI"}
                }
              },
          name: "soy el segundo hotel ",
          subcategory_type: "Pensión",
          hotel_class: "4.0",
          location_string: "Sevilla",
          num_reviews: "090",
          helpful_votes:{photo:{
            helpful_votes:"62"
          }},
          price: "65"
        }

      ]
    }
  }, */
/* computed:{

      hotelsFiltered(){

      if(this.filterSelected=="Ascendent"){
        let priceFiltered = this.price.sort(function (a, b){
        return a - b;
        })
      if(this.filterSelected=="Descendent"){
        let priceFiltered = this.price.sort(function(a, b){
          return b - a;
        })
      }

       let hotelsFilterByPrice = this.hotels.filter(item=>item.price == this.priceFiltered)
       return hotelsFilterByPrice
      }
    }
}, */
 /*  methods:{
 async searchHotel() {
      let config = {
        method: "GET",
        headers: {
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key": "ab459f0c2bmsh8151e1f61dd047dp1eb171jsnfe297ef8c177"
        }
      };
      const URL = `https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_ES&currency=EUR&units=km&query=${this.city}`;

      try {
        let city = await this.$axios.get(URL, config);
        console.log(city.data);
        this.location = city.data.data[0].result_object.location_id;
      } catch (err) {
        console.log(err.city.data.error);
      }
      let checkInDate = this.$moment(this.checkIn, "DD-MM-YYYY", true).format(
        "YYYY-MM-DD"
      );
      const URL1 = `https://tripadvisor1.p.rapidapi.com/hotels/list?currency=EUR&lang=en_ES&location_id=${this.location}&adults=${this.adultsSelected}&checkin=${this.checkInDate}&rooms=${this.roomsSelected}&nights=${this.nights}`;

      try {
        let response = await this.$axios.get(URL1, config);
        console.log(response.data);
        this.hotels = response.data.data;

      } catch (err) {
        console.log(err.response.data.error);
      }
    },

    async saveToFavorites(item) {
      let config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      };
      let newFavorite =
        {
          id: item.id,
          photo: item.photo.images.medium.url,
          name: item.name,
          subcategory_type: item.subcategory_type,
          hotel_class:item.hotel_class,
          location_string: item.location_string,
          num_reviews: item.num_reviews,
          helpful_votes: item.photo.helpful_votes,
          price: item.price
        }
        console.log('<<<<<<<', newFavorite)
      ;
      try {
        let response = await this.$axios.post(
          "http://localhost:8082/favorites", newFavorite, config);
          console.log('respuesta', response.data)
        this.$router.push("/myfavorites");
      } catch (err) {
        console.log("no se conecta", err.response.data.error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debes estar autenticado para guardar!"
        });
        //this.$store.dispatch('loadfavoriteshotels')
        this.$router.push("/login");
      }
    }
  }, */
  components: {
    SearchBox,
    /* FilterPriceHotel */


  },
}
</script>

<style>

</style>
