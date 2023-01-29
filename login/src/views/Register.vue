<template>
  <div class="container">
    <h1>Register to Application</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
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
          <div
            v-if="password.length > 0 && password.length < 6"
            class="text-danger"
          >
            Şifreniz en az 6 karakter uzunluğunda olmalıdır
          </div>
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

          <div v-if="password != reenterPassword" class="text-danger">
            Girdiğiniz şifreler aynı değildir!
          </div>
        </div>
        <button
          @click="register"
          style="margin-top: 15px"
          class="btn btn-primary btn-lg"
        >
          Register
        </button>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      reenterPassword: "",
    };
  },
  methods: {
    register: function () {
      console.log("Email: " + this.email);

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Kayıt işlemi başarısız! " + error.message);
        });
    },
  },
};
</script>

<style scoped></style>
