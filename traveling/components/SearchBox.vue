<template>
  <div>
    <div class="tm-section tm-bg-img" id="tm-section-1">
      <div class="tm-bg-white ie-container-width-fix-2">
        <div class="container ie-h-align-center-fix">
          <div class="row">
            <div class="col-xs-12 ml-auto mr-auto ie-container-width-fix">
              <h2 class="tm-color-primary, text-center">CHOOSE YOUR DATES</h2>
              <form action="index.html" method="get" class="tm-search-form tm-section-pad-2">
                <div class="form-row tm-search-form-row">
                  <div class="form-group tm-form-element tm-form-element-100">
                    <i class="fa fa-map-marker fa-2x tm-form-element-icon"></i>
                    <input
                      v-model="city"
                      name="city"
                      type="text"
                      class="form-control text-center"
                      id="city"
                      placeholder="Type your city"
                    />
                  </div>
                  <!--  <div>   <HotelDatePicker />
                  </div>-->
                  <div class="form-group tm-form-element tm-form-element-50">
                    <i class="fa fa-calendar fa-2x tm-form-element-icon"></i>
                    <input
                      v-model="checkIn"
                      name="check-in"
                      type="date"
                      class="form-control"
                      id="inputCheckIn"
                      placeholder="Check In"
                    />
                  </div>
                  <div class="form-group tm-form-element tm-form-element-50">
                    <input
                      v-model="nights"
                      name="nights"
                      type="number"
                      class="form-control"
                      id="inputNights"
                      placeholder="Your nights"
                    />
                  </div>
                </div>
                <div class="form-row tm-search-form-row">
                  <div class="form-group tm-form-element tm-form-element-2">
                    <select
                      name="adult"
                      class="form-control tm-select"
                      id="adult"
                      v-model="adultsSelected"
                    >
                      <option value>
                        <i class="fa fa-2x fa-user tm-form-element-icon"></i> Adults
                      </option>
                      <option v-for="item in listNumber" :key="item.id">{{item.number}}</option>
                    </select>
                  </div>

                  <div class="form-group tm-form-element tm-form-element-2">
                    <select
                      name="Rooms"
                      class="form-control tm-select"
                      id="Rooms"
                      v-model="roomsSelected"
                    >
                      <option value>
                        <i class="fa fa-2x fa-bed tm-form-element-icon"></i> Rooms
                      </option>
                      <option v-for="item in listNumber" :key="item.id">{{item.number}}</option>
                    </select>
                  </div>
                  <div class="form-group tm-form-element tm-form-element-2">
                    <button
                      @click.prevent="searchHotel"
                      type="submit"
                      class="btn btn-primary tm-btn-search"
                    >Check Availability</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Introduction title="SEARCH YOUR FAVORITE HOTEL" subtitle="Save your favorites"></Introduction>

    <HotelBox
      v-for="item in hotels"
      :key="item.id"
      :photo="item.photo.images.medium.url"
      :name="item.name"
      :subcategory_type="item.subcategory_type"
      :hotel_class="item.hotel_class"
      :location_string="item.location_string"
      :num_reviews="item.num_reviews"
      :helpful_votes="item.photo.helpful_votes"
      :price="item.price"
      @save="saveToFavorites(item)"
    ></HotelBox>

  </div>
</template>

<script>
//import HotelDatePicker from 'vue-hotel-datepicker'
import Swal from "sweetalert2";
import HotelBox from "@/partials/HotelBox";
import Introduction from "@/components/Introduction";

export default {
  data() {
    return {
      city: "",
      location: "",
      checkIn: "",
      nights: "",
      adultsSelected: "",
      childrensSelected: "",
      roomsSelected: "",

      listNumber: [
        { id: 1, number: 1, value: "1" },
        { id: 2, number: 2, value: "2" },
        { id: 3, number: 3, value: "3" },
        { id: 4, number: 4, value: "4" },
        { id: 5, number: 5, value: "5" },
        { id: 6, number: 6, value: "6" },
        { id: 7, number: 7, value: "7" },
        { id: 8, number: 8, value: "8" },
        { id: 9, number: 9, value: "9" },
        { id: 10, number: 10, value: "10" }
      ],
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
        }

      ]
    };
  },

  methods: {

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
        this.$router.push("/login");
      }
    }
  },
  components: {
    // HotelDatePicker
    HotelBox,
    Introduction
  }
};
</script>
