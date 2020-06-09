<template>
  <div class="banner">
    <div class="container">
      <div class="login-area">
        <h3>LOGIN</h3>
        <form role="form" id="login-form">
          <div class="form-group">
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div class="form-group">
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Your Password"
              required
            />
          </div>
          <div class="checkbox form-group">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button @click.prevent="login" type="submit" class="btn btn-default">LOGIN</button>
          <br />
          <h3 class="text-center">Forgot password?</h3>
          <button type="submit" class="btn btn-default">
            <nuxt-link to="/forgot">RECOVER PASSWORD</nuxt-link>
          </button>
          <br />
          <h3 class="text-center">Don't have an account yet?</h3>
          <button type="submit" class="btn btn-default">
            <nuxt-link to="/register">SING IN</nuxt-link>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "Login",
  asyncData() {
    return {
      isAuth: false,
      email: "",
      password: ""
    };
  },
async mounted() {
  await this.checkAuth();
  },
  methods: {
    checkAuth() {
     this.$store.dispatch('getToken')
     //this.isAuth = this.$store.state.isAuth

   // this.isAuth = window.localStorage.getItem("token") != null;
    },
    async login() {
      let loginData = {
        email: this.email,
        password: this.password
      };

      const validatedEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
        this.email);
      if (
        loginData.email !== "" &&
        loginData.password !== "" &&
        validatedEmail
      ) {
        try {
          let response = await this.$axios.post(
            "http://localhost:8082/auth/login",
            loginData);

          window.localStorage.setItem("token", response.data.token);
          this.checkAuth();
          this.$router.push("/");
        } catch (err) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email y/o contraseña incorrectos!",
            footer: ' <button><a href="/forgot">RECOVER PASSWORD</a>'
          });
          console.log(err.response.data.error);
        }
        return;
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe incluir un email válido!"
      });
    },

  },
};
</script>
