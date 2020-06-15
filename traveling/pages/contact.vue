<template>
<div>
  <div class="tm-top-bar-bg"></div>
    <Introduction
    title="Contact Us"
    subtitle="Write us your questions"
    ></Introduction>
    <RapidContact ></RapidContact>
</div>
</template>

<script>
import RapidContact from '@/components/RapidContact'
import Introduction from '@/components/Introduction'
export default {
  name: "Contact",
    components:{
      Introduction,
      RapidContact
    }
}
</script>

<style>

</style>
