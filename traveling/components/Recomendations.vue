<template>
  <div>
    <div class="tm-section tm-section-pad tm-bg-gray" id="tm-section-4">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
            >
              <div class="carousel-slide">
                <b-carousel-slide
                  v-for="item in articles"
                  :key="item.id"
                  class="tm-bg-white mr-2 tm-carousel-item"
                >
                  <template v-slot:img>
                    <img
                      :src="item.img"
                      alt="Image"
                      class="d-block img-fluid"
                      caption="Blank Image"
                      img-blank
                      img-alt="Blank image"
                    />
                    <div class="tm-article-pad">
                        <h3 class="text-uppercase tm-article-title-2 text-center">{{item.title}}</h3>
                      <p class="tm-article-title-3 tm-color-parraf">{{item.desc}}</p>
                      <a href="#" class="text-uppercase btn-primary tm-btn-primary">Get More Info.</a>
                    </div>
                  </template>
                </b-carousel-slide>
              </div>
            </b-carousel>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-recommended-container">
            <div class="tm-bg-white">
              <div class="tm-bg-primary tm-sidebar-pad">
                <h3 class="tm-color-white tm-sidebar-title">Recommended Places</h3>
                <p class="tm-color-white tm-margin-b-0 tm-font-light">unforgettable destinations</p>
              </div>
              <div class="tm-sidebar-pad-2">
                <a
                  v-for="item in places"
                  :key="item.id"
                  href="#"
                  class="media tm-media tm-recommended-item"
                >
                  <img :src="item.img" alt="Image" />
                  <div class="media-body tm-media-body tm-bg-gray">
                    <h4 class="text-uppercase tm-font-semibold tm-sidebar-item-title">{{item.name}}</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recomendations",
  data() {
    return {
      slide: 0,
      places: [
        { name: "Europe", img: require("../assets/img/tn-img-01.jpg") },
        { name: "Asia", img: require("../assets/img/tn-img-02.jpg") },
        { name: "Africa", img: require("../assets/img/tn-img-03.jpg") },
        { name: "South America", img: require("../assets/img/tn-img-04.jpg") }
      ],
      articles: [
        {
          title: "Thailand",
          desc: "Thailand is one of the most popular trips in recent years",
          img: require("../assets/img/thailand.jpg")
        },
        {
          title: "Jordan",
          desc:
            "Jordan is an original and not too crowded destination, with a lot of cultural interest, such as Petra.",
          img: require("../assets/img/jordan.jpg")
        },
        {
          title: "Spain",
          desc: "You will love Spain and its traditions ",
          img: require("../assets/img/spain.jpg")
        },
        {
          title: "New York",
          desc: "New York is the city of diversity and giant buildings",
          img: require("../assets/img/newYork.jpg")
        },
        {
          title: "Johannesburg",
          desc:
            "Johannesburg: It is the largest city in South Africa, and also the most important. It is one of the great African powers in terms of business and tourism, a city that took a great leap when gold was discovered in the area in the late 19th century",
          img: require("../assets/img/africa.jpg")
        },
        {
          title: "Vienna",
          desc:
            "Vienna has a wonderful city of colors with spectacular palaces and gardens to visit",
          img: require("../assets/img/viena.jpg")
        }
      ],

    };
  }
};
</script>

<style>
.img-fluid {
  width: 729px;
}

</style>
