<template>
  <div class="container">
    <h1>Login to Application</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        
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
            <div
              v-if="password.length > 0 && password.length < 6"
              class="text-danger"
            >
              Şifreniz en az 6 karakter uzunluğunda olmalıdır
            </div>
          </div>

          <button
            style="margin-top: 15px"
            type="submit"
            class="btn btn-primary btn-lg"
          >
            Login
          </button>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      console.log("Email: " + this.email);
      console.log("Password: " + this.password);

      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          alert("Hatalı giriş! Mail ve şifrenizi kontrol ediniz!! " + error.message);

        });
    },
  },
};
</script>

<style scoped>

</style>
