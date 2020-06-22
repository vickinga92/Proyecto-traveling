<template>
  <div>
    <div class="tm-top-bar-bg"></div>
    <Introduction title="Hotels Information" subtitle="About Hotels"></Introduction>
    <InformationHotel
      v-for="item in informationHotel"
      :key="item.id"
      :name="item.name"
      :location_string="item.location_string"
      :photo="item.photo.images.medium.url"
      :amenities="item.amenities"
      :description="item.description"
      :phone="item.phone"
    ></InformationHotel>
  </div>
</template>

<script>
import InformationHotel from "@/components/InformationHotel";
import Introduction from "@/components/Introduction";

export default {
  name: "",
  data() {
    return {
      informationHotel: {}
    };
  },
  mounted() {
    this.getInformation();
  },
  methods: {
    async getInformation() {
      let config = {
        method: "GET",
        headers: {
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key": "ab459f0c2bmsh8151e1f61dd047dp1eb171jsnfe297ef8c177"
        }
      };
      try {
        const URL2 = `https://tripadvisor1.p.rapidapi.com/hotels/get-details?location_id=${this.$route.params.id}`;
        let information = await this.$axios.get(URL2, config);
        this.informationHotel = information.data.data;
        console.log(this.informationHotel);
      } catch (err) {
        console.log(err);
        console.log(err.information.data.error);
      }
    }
  },
  components: {
    Introduction,
    InformationHotel
  }
};
</script>

<style>
</style>
