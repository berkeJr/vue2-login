<template>
  <div class="container">
    <h1>Register to Application</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <input
              style="margin-top: 15px"
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Full Name"
              required
            />
          </div>
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
          <div class="form-group">
            <input
              style="margin-top: 15px"
              type="password"
              class="form-control"
              id="reenterPassword"
              v-model="reenterPassword"
              placeholder="Password Again"
              required
            />
          </div>
          <button style="margin-top: 15px" type="submit" class="btn btn-primary btn-lg">
            Register
          </button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data(){
    return {
      email: "",
      password: "",
      reenterPassword: ""
    }
  },
  methods: {
    register: function(){
      console.log("Email: " + this.email);
    }
  }

};
</script>

<style scoped></style>
