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
            />
          </div>
          <div class="form-group">
            <input
              style="margin-top: 15px"
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <input
              style="margin-top: 15px"
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <input
              style="margin-top: 15px"
              type="password"
              class="form-control"
              id="reenterPassword"
              placeholder="Password Again"
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
export default {};
</script>

<style scoped></style>
