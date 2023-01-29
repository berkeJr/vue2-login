import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import firebase from "firebase"
import { initializeApp } from "firebase/app";

Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyDL4Oby1iGE-O0Ux4DAt3-2C0i4Yh_ssVI",
  authDomain: "web-project-eec62.firebaseapp.com",
  projectId: "web-project-eec62",
  storageBucket: "web-project-eec62.appspot.com",
  messagingSenderId: "219798175335",
  appId: "1:219798175335:web:caf0dfdd2b0dfa52e65ec2",
  measurementId: "G-LPTLV9PDLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
