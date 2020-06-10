<template>
  <div class="tm-section tm-section-pad tm-bg-img" id="tm-section-5">
    <div class="container ie-h-align-center-fix">
      <div class="row tm-flex-align-center">
        <div class="col-xs-12 col-md-12 col-lg-3 col-xl-3 tm-media-title-container">
          <h2 class="text-uppercase tm-section-title-2">TRAVEL</h2>
          <h3 class="tm-color-primary tm-font-semibold tm-section-subtitle-2">NEWS</h3>
        </div>
        <div class="col-xs-12 col-md-12 col-lg-9 col-xl-9 mt-0 mt-sm-3">
          <div class="ml-auto tm-bg-white-shadow tm-pad tm-media-container">
            <article class="media tm-margin-b-20 tm-media-1">
              <img src="@/assets/img/img-04.jpg" alt="Image" /> <!--  bindar la imagen -->
              <div class="media-body tm-media-body-1 tm-media-body-v-center">
                <h3
                  class="tm-font-semibold tm-article-title-3"
                >{{title}}</h3>
                <p>{{desc}}</p>
                <nuxt-link
                  to="#"
                  class="text-uppercase tm-color-primary tm-font-semibold"
                >Continue reading...</nuxt-link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Blog",
  props:["title", "desc"]
};
</script>

<style>
</style>
