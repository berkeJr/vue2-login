<template>
  <div class="container">
    <h1>Login to Application</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <input
              style="margin-top: 15px"
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Email"
              required
            />
          </div>
          <div class="form-group">
            <input
              style="margin-top: 15px"
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="Password"
              required
            />
          </div>

          <button
            style="margin-top: 15px"
            type="submit"
            class="btn btn-primary btn-lg"
          >
            Login
          </button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login: function(){
      console.log("Email: " + this.email);
      console.log("Password: " + this.password);
    }
  }
};


</script>

<style scoped></style>
