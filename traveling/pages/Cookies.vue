<template>
  <div>
    <div class="tm-top-bar-bg"></div>
    <Introduction title="Política de Cookies" subtitle="Lee acerca de nuestra Política de Cookies"></Introduction>

    <div class="container">
      <h1>¿Qué son las Cookies?</h1>
      <p>
        Cookie es un fichero que se almacena en su ordenador al acceder a cualquier página web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
        El navegador del usuario memoriza cookies en el disco duro solamente durante la sesión actual ocupando un espacio de memoria mínimo y no perjudicando al ordenador. Las cookies no contienen ninguna clase de información personal específica, y la mayoría de las mismas se borran del disco duro al finalizar la sesión de navegador (las denominadas cookies de sesión).
        La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten o impiden en los ajustes de seguridad las cookies temporales o memorizadas.
        Sin su expreso consentimiento –mediante la activación de las cookies en su navegador– productosnails.com no enlazará en las cookies los datos memorizados con sus datos personales proporcionados en el momento del registro o la compra.
      </p>
      <img src="@/assets/img/cookie.jpg" alt />
    </div>
  </div>
</template>

<script>
import Introduction from "@/components/Introduction";
export default {
  name: "Cookies",
  components: {
    Introduction
  }
};
</script>

<style>
</style>
