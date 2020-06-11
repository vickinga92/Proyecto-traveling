<template>

            <div class="tm-section tm-position-relative">
  <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            class="tm-section-down-arrow"
          >
            <polygon fill="#ee5057" points="0,0  100,0  50,60" />
          </svg>
    <div class="container tm-pt-5 tm-pb-4">
      <div class="row text-center">
        <article class="col-sm-12 tm-article">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
              	<a
                  href="#"
                  class="img"
						    ><img :src="photo" alt=""></a>
                {{location_id}}
              </div>
              <div class="col-md-4">
                <h3 class="tm-color-primary tm-article-title-1">{{name}}</h3>
                <p>{{subcategory_type}}-{{hotel_class}}</p>
                <p>{{location_string}}</p>
                <button  @click.prevent="getInformation" class="btn btn-secondary tm-btn-search">hotel information</button>
              </div>
              <div class="col-md-4">
                <p>reviews {{num_reviews}}</p>
                <p>votes {{helpful_votes}}</p>

                <div>PRICE {{price}}</div> <br>
                   <button  @click.prevent="saveToFavorites"  class="btn btn-primary tm-btn-search">Save to Favorites</button>

              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
            </div>
</template>

<script>
export default {
  name: "HotelBox",
  props: ["location_id","photo", "name", "subcategory_type","hotel_class", "location_string", "num_reviews", "helpful_votes", "price" ],
  data(){
    return{

    }
  },
  methods:{
    saveToFavorites(){
      this.$emit("save")
    },
     getInformation(){
      this.$emit("get")
    },

  }
};
</script>

<style>
</style>
