<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ee5057"
      style="text-shadow: 1px 1px 2px #333;"

    >
       <b-carousel-slide>
        <template v-slot:img>
            <img class="d-block img-fluid col-sm-6 text-center" src="@/assets/img/jordan.jpg" alt="image slot" />
            <img class="d-block img-fluid col-sm-6 text-center" src="@/assets/img/thailand.jpg" alt="image slot" />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid col-sm-6 text-center" src="@/assets/img/newYork.jpg" alt="image slot" />
          <img class="d-block img-fluid col-sm-6 text-center" src="@/assets/img/spain.jpg" alt="image slot" />
        </template>
      </b-carousel-slide>
        <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid col-sm-6 text-center" src="@/assets/img/viena.jpg" alt="image slot" />
          <img class="d-block img-fluid col-sm-6 text-center" src="@/assets/img/africa.jpg" alt="image slot" />
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
    };
  },
};
</script>

<style>
.img-fluid {
  max-width: 200wh;
  height: 50vh;
  float:right;
}
</style>
