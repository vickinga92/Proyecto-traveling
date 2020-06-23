<template>
  <div>
    <div class="tm-top-bar-bg"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="tm-color-primary tm-article-title-1 text-center">TRAVEL VIDEOS</h2>
        </div>
          <div v-if="!isLoaded" class="loadingio-spinner-wedges-yfccohjb1je">
            <div class="ldio-hp0svjql4j9">
              <div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        <div v-else class="col-sm-4" v-for="item in videos" :key="item.id">
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
      isLoaded: false,
      videos: [
        { id: 1, videoId: "E3jhbnXF0f4" },
        { id: 2, videoId: "BGlzHF9_RXM" },
        { id: 3, videoId: "Rupwbe2pimI" },
        { id: 4, videoId: "JxubFhmCRHI" },
        { id: 5, videoId: "CBTduf9urKY" },
        { id: 6, videoId: "OjDYCNJ5QlU" }
      ]
    };
  },
};
</script>
<style type="text/css">

@keyframes ldio-hp0svjql4j9 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-hp0svjql4j9 > div > div {
  transform-origin: 100px 100px;
  animation: ldio-hp0svjql4j9 3.0303030303030303s linear infinite;
  opacity: 0.8;
}
.ldio-hp0svjql4j9 > div > div > div {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 70px;
  height: 70px;
  border-radius: 70px 0 0 0;
  transform-origin: 100px 100px;
}
.ldio-hp0svjql4j9 > div div:nth-child(1) {
  animation-duration: 0.7575757575757576s;
}
.ldio-hp0svjql4j9 > div div:nth-child(1) > div {
  background: #9ea2a5;
  transform: rotate(0deg);
}
.ldio-hp0svjql4j9 > div div:nth-child(2) {
  animation-duration: 1.0101010101010102s;
}
.ldio-hp0svjql4j9 > div div:nth-child(2) > div {
  background: #ee5057;
  transform: rotate(0deg);
}
.ldio-hp0svjql4j9 > div div:nth-child(3) {
  animation-duration: 1.5151515151515151s;
}
.ldio-hp0svjql4j9 > div div:nth-child(3) > div {
  background: #182731;
  transform: rotate(0deg);
}
.ldio-hp0svjql4j9 > div div:nth-child(4) {
  animation-duration: 3.0303030303030303s;
}
.ldio-hp0svjql4j9 > div div:nth-child(4) > div {
  background: #ecb7a7;
  transform: rotate(0deg);
}
.loadingio-spinner-wedges-yfccohjb1je {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-hp0svjql4j9 {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-hp0svjql4j9 div {
  box-sizing: content-box;
}
</style>
