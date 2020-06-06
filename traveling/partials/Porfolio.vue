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
                  :style='"background-image: url(" + photo +");"'
						    ></a>
              </div>
              <div class="col-md-4">
                <h3 class="tm-color-primary tm-article-title-1">{{name}}</h3>
                <p>{{subcategory_type}}-{{hotel_class}}</p>
                <p>{{location_string}}</p>
                <button  class="btn btn-success tm-btn-search"><a :href='"url(" + url + ")"' class="text-uppercase tm-color-primary tm-font-semibold"
                ></a>Hotel info</button>
              </div>
              <div class="col-md-4">
                <p>reviews {{num_reviews}}</p>
                <p>votes {{votes}}</p>
                	<a
                  href="#"
                  class="img"
                  :style='"background-image: url(" + large +");"'
						    ></a>
                <div>PRICE {{price}}</div> <br>
                <button @click.prevent="saveToFavorites"  class="btn btn-primary tm-btn-search">Save to Favorites</button>
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
  props: ["photo", "name", "subcategory_type","hotel_class", "location_string", "url", "num_reviews", "votes", "large", "price" ],
  methods:{
    saveToFavorites(){
      this.$emit("save")
    }
  }
};
</script>

<style>
</style>
