<template>
  <div>
    <div class="tm-top-bar-bg"></div>
    <Introduction title="Page not found" subtitle="404"></Introduction>
    <div class="text-center">
      <img src="@/assets/img/error.jpg" alt="Image" />
    </div>
  </div>
</template>


<script>
import Introduction from "@/components/Introduction";

export default {
  name: "Error",
  components: {
    Introduction
  }
};
</script>

<style></style>
