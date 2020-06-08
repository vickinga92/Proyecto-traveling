<template>
  <div class="wrapper">
    <div class="banner">
      <div class="container">
        <div class="login-area">
          <h3>SING IN</h3>
          <form role="form" id="login-form">
            <div class="form-group">
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="exampleInputUser3"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword4"
                placeholder="Your Password"
                required
              />
            </div>
            <button type="submit" class="btn btn-default" @click.prevent="register">SING IN</button>
            <br />
            <h3 class="text-center">Already have an account?</h3>
            <button type="submit" class="btn btn-default">
              <nuxt-link to="/login">LOGIN</nuxt-link>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";

export default {
  name: "RegisterPage",
  asyncData() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      let UserRegister = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      };
      try {
        let response = await this.$axios.post(
          "http://localhost:8082/users",
          UserRegister
        );
        this.$router.push("/login");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El Email está en uso!"
        });
        console.log(err.response.data.error);
      }
      /* try{
          let response = await this.$fireAuth.sendEmailVerification(this.email)
      }catch(e){
        console.log(err.response.data.error);

      } */
    }
  }
};
</script>
