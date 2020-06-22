<template>
  <div class="tm-main-content" id="top">
    <div class="tm-top-bar-bg"></div>
    <Introduction title="SEARCH YOUR DESTINITY HOTEL" subtitle="And save your favorites"></Introduction>
    <SearchBox></SearchBox>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import Introduction from "@/components/Introduction";

export default {
  name: "Hotels",
  components: {
    Introduction,
    SearchBox
  }
};
</script>
