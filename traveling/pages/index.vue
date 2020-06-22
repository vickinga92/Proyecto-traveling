<template>
  <div>
    <div class="tm-top-bar-bg"></div>
    <Introduction title="¿What are you doing?" subtitle="Choose your travel"></Introduction>
    <Recomendations></Recomendations>
    <div class="tm-section tm-section-pad tm-bg-img" id="tm-section-5">
      <div class="container-fluid ie-h-align-center-fix">
        <div class="row tm-flex-align-center">
          <div class="col-xs-12 col-md-12 tm-media-title-container">
            <h2 class="text-uppercase tm-section-title-2 text-center">TRAVEL</h2>
            <h3 class="tm-color-primary tm-section-subtitle-2 text-center">
              <b>NEWS</b>
            </h3>
          </div>
          <Blog v-for="item in news" :key="item.id" :titles="item.titles" :link="item.link"></Blog>
        </div>
      </div>
    </div>
    <Videos></Videos>
  </div>
</template>

<script>
import Introduction from "@/components/Introduction";
import Blog from "@/components/Blog";
import Recomendations from "@/components/Recomendations";
import Videos from "@/components/Videos";

export default {
  name: "index",
  data() {
    return {
      /*     news:[
        {id:1, titles:"Los nuevos protocolos para viajar durante la pandemia", desc:"Viajar durante la pandemia de coronavirus, que ha mantenido al mundo bajo órdenes de confinamiento, puede parecer un gran desafío. Desde la operación de los aeropuertos, el espacio compartido con otras personas hasta las condiciones en el avión. Ante esta perspectiva, el Consejo Mundial de Viaje y Turism"},
        {id:2, titles:"Caribe mexicano ya está certificado para recibir turistas", desc:"El director del Consejo de Promoción Turística de Quintana Roo, Darío Flota, dio a conocer que el Caribe mexicano obtuvo una certificación internacional de sanidad para que la industria turística pueda reactivar operaciones brindando confianza a los visitantes. Los hoteles de Cancún trabajan en una serie de adaptaciones para su reapertura programada para el próximo 8 de junio."},
        ] */
    };
  },
  async mounted() {
    await this.$store.dispatch("getNews");
  },
  computed: {
    news() {
      return this.$store.state.news;
    }
  },
  methods: {},
  components: {
    Introduction,
    Blog,
    Recomendations,
    Videos
  }
};
</script>

<style>
</style>
