<template>
  <div>
    <div class="tm-section tm-bg-img" id="tm-section-1">
      <div class="tm-bg-white ie-container-width-fix-2">
        <div class="container ie-h-align-center-fix">
          <div class="row">
            <div class="col-xs-12 ml-auto mr-auto ie-container-width-fix">
              <h2 class="tm-color-primary, text-center">CHOOSE YOUR DATES</h2>
              <form class="tm-search-form tm-section-pad-2">
                <div class="form-row tm-search-form-row">
                  <div class="form-group tm-form-element tm-form-element-100">
                    <i class="fa fa-map-marker fa-2x tm-form-element-icon"></i>
                    <input
                      v-model="search.city"
                      name="city"
                      type="text"
                      class="form-control text-center"
                      id="city"
                      placeholder="Type your city"
                    />
                  </div>
                  <div class="form-group tm-form-element tm-form-element-50">
                    <i class="fa fa-calendar fa-2x tm-form-element-icon"></i>
                    <input
                      v-model="search.checkIn"
                      name="check-in"
                      type="date"
                      class="form-control"
                      id="inputCheckIn"
                      placeholder="Check In"
                    />
                  </div>
                  <div class="form-group tm-form-element tm-form-element-50">
                    <input
                      v-model="search.nights"
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
                      v-model="search.adultsSelected"
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
                      v-model="search.roomsSelected"
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
    <Carousel></Carousel>
    <FilterPriceHotel @change="hotelsFiltered"></FilterPriceHotel>
    <HotelBox
      v-for="item in hotels"
      :key="item.id"
      :location_id="item.location_id"
      :photo="item.photo.images.medium.url"
      :name="item.name"
      :subcategory_type="item.subcategory_type"
      :hotel_class="item.hotel_class"
      :location_string="item.location_string"
      :num_reviews="item.num_reviews"
      :helpful_votes="item.photo.helpful_votes"
      :price="item.price"
      @save="saveToFavorites(item)"
      @get="getInformation(item)"
    ></HotelBox>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Carousel from "@/components/Carousel";
import HotelBox from "@/partials/HotelBox";
import FilterPriceHotel from "@/components/FilterPriceHotel";


export default {
  name: "SearchBox",
  data() {
    return {
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
      search: {
        city: "",
        checkIn: "",
        nights: "",
        adultsSelected: "",
        roomsSelected: ""
      },
      location_id: "",
      filterSelected: ""
    };
  },
  watch: {
    city(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.city = value;
    },
    checkIn(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.checkIn = value;
    },
    nights(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.nights = value;
    },
    adultsSelected(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.adultsSelected = value;
    },
    roomsSelected(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.roomsSelected = value;
    }
  },
  computed: {
    hotels() {
      return this.$store.state.hotels;
    },
  },
  methods: {
    city() {
      this.$emit("change", this.city);
    },
    checkIn() {
      this.$emit("change", this.checkIn);
    },
    nights() {
      this.$emit("change", this.nights);
    },
    adultsSelected() {
      this.$emit("change", this.adultsSelected);
    },
    roomsSelected() {
      this.$emit("change", this.roomsSelected);
    },
    searchHotel() {
      this.$store.dispatch("searchHotel", this.search);
    },
    hotelsFiltered(filterSelected) {
      this.$store.commit("setHotelsFiltered", { filterSelected });
    },

    async getInformation(item) {
      this.location_id = item.location_id;
      this.$router.push(`/Hotels/${this.location_id}`);
    },
    async saveToFavorites(item) {
      let config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      };
      let newFavorite = {
        location_id: item.location_id,
        photo: item.photo.images.medium.url,
        name: item.name,
        subcategory_type: item.subcategory_type,
        hotel_class: item.hotel_class,
        location_string: item.location_string,
        num_reviews: item.num_reviews,
        helpful_votes: item.photo.helpful_votes,
        price: item.price
      };
      console.log("<<<<<<<", newFavorite);
      try {
        let response = await this.$axios.post(
          "http://localhost:8082/favorites",
          newFavorite,
          config
        );
        console.log("respuesta", response.data);

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
    HotelBox,
    FilterPriceHotel,
    Carousel,
  }
};
</script>
