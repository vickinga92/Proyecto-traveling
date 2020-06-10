<template>

  <div class="tm-main-content" id="top">
<!--             <div class="tm-top-bar-bg"></div>
 -->  <div class="tm-section-2">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h2 class="tm-section-title">{{title}}</h2>
          <p class="tm-color-white tm-section-subtitle">{{subtitle}}</p>
          </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
export default {
  name: "Introduction",
  props:["title", "subtitle"]
};
</script>

<style>
</style>
