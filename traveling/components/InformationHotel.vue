<template>
  <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<h3>
				{{name}}
			</h3>
      <span>{{location_string}}</span>
			<div class="row">
				<div class="col-md-6">
					<a
                  href="#"
                  class="img"
						    ><img :src="photo" alt=""></a>
				</div>
				<div class="col-md-6">
					<ol>
						<li v-for="item in amenities" class="list-item" :key="item.id">
                {{item.name}}
						</li>
					</ol>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<p>
					  {{description}}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name:"InformationHotel",
  props:["name", "location_string", "photo", "amenities", "description"]

}
</script>

<style>

</style>
