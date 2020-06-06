/* export const state = () => ({
      city:"",
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
          photo: "",
          name: "",
          subcategory_type: "",
          location_string: "",
          url: "",
          num_reviews: "",
          votes: "",
          imgT: "",
          price: ""
        },
          {
          photo: "",
          name: "soy el hotel de prueba ",
          subcategory_type: "hotel",
          location_string: "malaga",
          url: "",
          num_reviews: "237",
          votes: "egeage",
          imgT: "ge",
          price: "78"
        },

      ],
})

export const actions = {
  async searhCity(state, context){
    let URL1 = `https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_ES&currency=EUR&units=km&query=${state.city}`;

      try {
        let response = await this.$axios.get(URL1,URL, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key":
              "ab459f0c2bmsh8151e1f61dd047dp1eb171jsnfe297ef8c177"
          }
        });
        console.log(response.data);
        this.location = response.data.data[0].result_object.location_id

        } catch (err) {
          //console.log(err.response.data.error);
        }
    },
} */

/* export const mutations ={
  headersAxios(){
    axios.setHeader({
      method: "GET",
      headers: {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key":
          "ab459f0c2bmsh8151e1f61dd047dp1eb171jsnfe297ef8c177"
      }
    })
  }

}
 */
