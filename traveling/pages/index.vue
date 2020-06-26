<template>
  <div>
    <div class="tm-top-bar-bg"></div>
    <Introduction title="¿What are you doing?" subtitle="Choose your travel"></Introduction>
    <Recomendations></Recomendations>
    <div class="tm-section tm-section-pad tm-bg-img" id="tm-section-5">
      <div class="container-fluid ie-h-align-center-fix">
        <div class="row tm-flex-align-center">
          <div class="col-xs-12 col-md-12 tm-media-title-container">
            <h2 class="text-uppercase tm-section-title-2 text-center">TRAVEL</h2>
            <h3 class="tm-color-primary tm-section-subtitle-2 text-center">
              <b>NEWS</b>
            </h3>
          </div>
          <Blog v-for="item in news" :key="item.id" :titles="item.titles" :link="item.link"></Blog>
        </div>
      </div>
    </div>
    <Videos></Videos>
  </div>
</template>

<script>
import Introduction from "@/components/Introduction";
import Blog from "@/components/Blog";
import Recomendations from "@/components/Recomendations";
import Videos from "@/components/Videos";

export default {
  name: "index",
  data() {
    return {};
  },
  async mounted() {
    await this.$store.dispatch("getNews");
  },
  computed: {
    news() {
      return this.$store.state.news;
    }
  },
  methods: {},
  components: {
    Introduction,
    Blog,
    Recomendations,
    Videos
  }
};
</script>

<style>
</style>
