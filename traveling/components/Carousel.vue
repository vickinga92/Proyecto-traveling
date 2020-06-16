<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

       <b-carousel-slide>
        <template v-slot:img>

            <img class="d-block img-fluid col-sm-6" src="@/assets/img/jordan.jpg" alt="image slot" />
            <img class="d-block img-fluid col-sm-6" src="@/assets/img/thailand.jpg" alt="image slot" />

        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid col-sm-6" src="@/assets/img/newYork.jpg" alt="image slot" />
          <img class="d-block img-fluid col-sm-6" src="@/assets/img/spain.jpg" alt="image slot" />

        </template>
      </b-carousel-slide>
        <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid col-sm-6" src="@/assets/img/viena.jpg" alt="image slot" />
          <img class="d-block img-fluid col-sm-6" src="@/assets/img/africa.jpg" alt="image slot" />

        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      photos: [
        { id: 1, img: require("../assets/img/jordan.jpg") },
        { id: 2, img: require("../assets/img/newYork.jpg") },
        { id: 3, img: require("../assets/img/thailand.jpg") },
        { id: 4, img: require("../assets/img/viena.jpg") }
      ]
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style>
.img-fluid {
  max-width: 80wh;
  height: 50vh;
  float:right;
}
</style>
