<template>
  <div>
    <div class="tm-top-bar-bg"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="tm-color-primary tm-article-title-1 text-center">TRAVEL VIDEOS</h2>
        </div>
        <div class="col-sm-4" v-for="item in videos" :key="item.id">
          <youtube :video-id="item.videoId"></youtube>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Videos",
  data() {
    return {
      videos: [
        { id: 1, videoId: "E3jhbnXF0f4" },
        { id: 2, videoId: "BGlzHF9_RXM" },
        { id: 3, videoId: "Rupwbe2pimI" },
        { id: 4, videoId: "JxubFhmCRHI" },
        { id: 5, videoId: "CBTduf9urKY" },
        { id: 6, videoId: "OjDYCNJ5QlU" }
      ]
    };
  }
};
</script>

<style>
</style>
