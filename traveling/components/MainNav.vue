<template>
  <div class="tm-main-content" id="top">
    <div class="tm-top-bar" id="tm-top-bar">
      <div class="tm-top-bar" id="tm-top-bar">
        <div class="container">
          <div class="row">
            <nav class="navbar navbar-expand-lg narbar-light">
              <div class="row">
                <nuxt-link to="/" id="logo">
                  <span>
                    <img alt="logo" src="@/assets/img/logo.jpg" />
                  </span>
                </nuxt-link>

                <b-navbar-toggle
                  target="mainNav"
                  type="button"
                  id="nav-toggle"
                  class="navbar-toggler collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </b-navbar-toggle>
                <b-collapse id="mainNav" class="collapse navbar-collapse tm-bg-white" is-nav>
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
                    <li class="nav-item" v-if="!isAuth">
                      <nuxt-link to="/register" class="nav-link text-success">SING IN</nuxt-link>
                    </li>
                  </ul>
                </b-collapse>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "MainNav",
  props: ["menu"],

  computed: {
    isAuth() {
      return this.$store.state.isAuth;
    }
  },
  methods: {
    logout() {
      try {
        this.$store.dispatch("logout");
        this.$router.push("/");
      } catch (err) {
        console.log(err.response.data.error);
      }
    }
  }
};
</script>
