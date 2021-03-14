import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const config = {
  apiKey: "AIzaSyAbz7YQO75Dku3OrsRtg0ntmo7ihMZ2W9c",
  authDomain: "authentication-sample-8fd74.firebaseapp.com",
  projectId: "authentication-sample-8fd74",
  storageBucket: "authentication-sample-8fd74.appspot.com",
  messagingSenderId: "141827848405",
  appId: "1:141827848405:web:62c33d06b3cfe1b7eb4a5c"
}
firebase.initializeApp(config);
