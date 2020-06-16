<template>
  <div class="col-sm-12">
    <div class=" container ml-auto tm-bg-border-shadow tm-pad">
      <article class="media tm-margin-b-20 tm-media-1">
        <img src="@/assets/img/img-05.jpg" alt="Image" />
        <div class="media-body tm-media-body-1 tm-media-body-v-center">
          <h3 class="tm-font-semibold tm-article-title-3">{{titles}}</h3>
          <p>{{desc}}</p>
          <button>
            <a
              :href="link"
              target="_blank"
              class="text-uppercase tm-color-primary"
            >Continue reading...{{link}}</a>
          </button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: ["titles", "link", "desc"]
};
</script>

<style>
</style>
