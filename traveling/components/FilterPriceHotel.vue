<template>
   <!-- FILTRO -->
    <div class="container-fluid">
     <div class="row">
        <div class="col-md-6">
          <h3>
            FILTERS
          </h3>
        </div>
        <div class="col-md-6">
        <select v-model="filterSelected" @change="hotelsFiltered" class="custom-select">
            <option  selected>Price filters...</option>
            <option value="1">Ascendent</option>
            <option value="2">Descendent</option>
        </select>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "FilterPriceHotel",
  computed:{
    filterSelected(){

    }
  },
methods:{
  hotelsFiltered(){
    this.$emit('change')
  }
}
}
</script>

<style>

</style>
