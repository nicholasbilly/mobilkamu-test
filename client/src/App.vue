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
import axios from "axios";
import Swal from "sweetalert2";
import { mapState } from 'vuex';
export default {
  name: "App",
  components: {
  },
  data: () => ({
  }),
  methods: {
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.$router.push("/home")
    this.$store.dispatch('getProducts')
  },
};
</script>
