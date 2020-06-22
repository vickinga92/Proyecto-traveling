<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 article">
        <h3 class="tm-color-primary">{{name}}</h3>
        <h4 class="tm-article-title-2">{{location_string}}</h4>
        <div class="row">
          <div class="col-md-8 image">
            <a href="#" class="img">
              <img :src="photo" alt />
            </a>
            <h3 class="tm-article-title-2">DESCRIPTION</h3>
            <p class="tm-article-title-3 desc">{{description}}</p>
            <h3 class="tm-article-title-2">DATES</h3>
            <p class="tm-article-title-3">
              <b>Phone:</b>
              {{phone}}
            </p>
          </div>
          <div class="col-md-4 tm-article-title-3">
            <ol>
              <h3>SERVICES</h3>
              <li v-for="item in amenities" class="list-item" :key="item.id">{{item.name}}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationHotel",
  props: [
    "name",
    "location_string",
    "photo",
    "amenities",
    "description",
    "phone"
  ]
};
</script>

<style>
.article {
  padding: 50px;
}
.desc {
  padding: 40px;
  background-color: #f1e1e254;
  border: #333 solid;
  color: #333;
  transition: 0.3s ease;
}
image {
  transition: 0.3s ease;
}
</style>
