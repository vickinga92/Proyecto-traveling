<template>
   <!-- FILTRO -->
   <div>
    <div class="tm-top-bar-bg tm-color-primary"></div>
    <div class="container-fluid">
     <div class="row">
        <div class="col-md-6">
          <h3 class="text-center ttm-bg-dark-blue tm-article-title-1">
            FILTERS YOURS HOTELS BY PRICE
          </h3>
        </div>
        <div class="col-md-6">
        <select v-model="filterSelected" @change="hotelsFiltered" class="custom-select">
            <option  selected>Price filters...</option>
            <option value="Ascendent">Ascendent</option>
            <option value="Descendent">Descendent</option>
        </select>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  name: "FilterPriceHotel",
  props: {
    value: {}
  },
  data(){
    return{
  filterSelected : this.value
    }
  },
  watch: {
     filterSelected (newValue) {
       this.$emit('input', newValue)
     },
     value (newValue) {
       this.filterSelected = value
     }
  },
methods:{
  hotelsFiltered(){
    this.$emit('change', this.filterSelected)
  }
}
}
</script>

<style>

</style>
