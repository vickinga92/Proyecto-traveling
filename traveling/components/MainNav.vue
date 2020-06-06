<template>
  <div class="tm-top-bar" id="tm-top-bar">
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-expand-lg narbar-light">
          <div class="row">
            <nuxt-link to="/" id="logo">
              <span>
                <!-- <img alt=logo src="@/assets/logo.jpg" /> -->
                TRAVELING
              </span>
            </nuxt-link>
            <div id="mainNav" class="collapse navbar-collapse tm-bg-white">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item" v-for="item in menu" :key="item.id">
                  <nuxt-link class="nav-link" :to="item.path">
                    {{item.name}}
                    <span class="sr-only">(current)</span>
                  </nuxt-link>
                </li>
                <li class="nav-item" v-if="isAuth">
                  <button to="#" class="nav-link text-danger" @click.prevent="logout">LOGOUT</button>
                </li>
                <li class="nav-item" v-else>
                  <nuxt-link to="/login" class="nav-link text-success">LOGIN</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/register" class="nav-link text-success">SING IN</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["menu"],
  data() {
    return {
      isAuth: false
    };
  },

  methods: {
    checkAuth() {
      this.isAuth = window.localStorage.getItem("token") != null;
    },
    async logout() {
      try {
        window.localStorage.removeItem("token");
        this.checkAuth();
        this.$router.push("/");
      } catch (err) {
        console.log(err.response.data.error);
      }
    }
  },
    mounted() {
    this.checkAuth();
  },
};
</script>
