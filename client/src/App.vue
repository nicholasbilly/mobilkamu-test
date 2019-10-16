<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Mobilkamu   </span>
        <span class="font-weight-light">  .com</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { mapState } from 'vuex';
const url = "http://34.67.162.136";
export default {
  name: "App",
  components: {
    Navbar
  },
  data: () => ({
  }),
  computed: mapState([
    'page',
    'count'
  ]),
  methods: {
    onLogin() {
      this.$store.commit('CHANGEPAGE', 'login')
    },

    logout() {
      localStorage.removeItem('token')
      this.$store.commit('CHANGEPAGE', 'login')
      this.$router.push('/')
    },

    onRegister() {
      this.$store.commit('CHANGEPAGE', 'register')
    },

    
  },
  created() {
    this.$vuetify.theme.dark = true;
    if(localStorage.token) {
      this.$store.commit('CHANGELOGIN', true)
      this.$store.commit('CHANGEPAGE', 'home')
      this.$router.push("/home")
    }
    this.$store.dispatch('getProducts')
  },

  // updated() {
  //   this.$store.dispatch('getProducts')
  // }
};
</script>
