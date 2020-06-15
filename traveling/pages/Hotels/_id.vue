<template>
  <InformationHotel
  :name="informationHotel.name"
  :location_string="informationHotel.location_string"
  :photo="informationHotel.photo"
  :amenities="informationHotel.amenities"
  :description="informationHotel.description"
  @get="getInformation(location_id)"
  ></InformationHotel>

</template>

<script>
import InformationHotel from '@/components/InformationHotel'

export default {
  name:"",
data(){
  return{
    informationHotel:{
        name: "",
         location_string: "",
         photo:{
            images:{
              medium:{
                url:""
                }}},
        amenities:{
          name:""
        },
        description:""
      },
  }
},
  mounted(){
    this.$router.params.id
  },
  methods:{
/*  async getInformation(location_id){
      const URL2 = `https://tripadvisor1.p.rapidapi.com/hotels/get-details?location_id=${this.location_id}`;

      try {
        let information = await this.$axios.get(URL2);
        console.log(information.data);
        this.informationHotel = information.data.data

        console.log(this.informationHotel)
      } catch (err) {
        console.log(err.information.data.error);
      }
     } */
  },
  components:{
    InformationHotel
  }
}
</script>

<style>

</style>
