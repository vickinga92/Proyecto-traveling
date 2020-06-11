<template>

  <div class="tm-main-content" id="top">
            <div class="tm-top-bar-bg"></div>

      <SearchBox ></SearchBox>
     <!--  <FilterPriceHotel  ></FilterPriceHotel>
 -->
   </div>


</template>

<script>
import SearchBox from '@/components/SearchBox'


export default {
  name: "Hotels",
  components: {
    SearchBox,

  },
}
</script>
