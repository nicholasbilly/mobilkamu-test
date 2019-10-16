<template>
  <v-container>
  <v-content>
      <h1 style="text-align:center;">{{brand}} {{model}}</h1>
      <img :src="image" alt="gambar" >
      <h2 style="color:white;text-align:center;">Price: Rp {{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</h2>
      <p style="color:white;text-align:center;">Fuel Type: {{fuel}}</p>
      <v-btn color="white" text @click="back">Close</v-btn>
  </v-content>
  </v-container>
</template>

<script>
import axios from 'axios'
const url = "http://localhost:3000";

export default {
   data () {
      return {
          dialog: false,
          brand: '',
          model: '',
          image: '',
          price: '',
          fuel: ''
      }
   },

   methods: {
       fetchData() {
           let productId = this.$route.params.id 
           axios.get(`${url}/mobil/${productId}`)
           .then(({data}) => {
               this.brand = data.brand
               this.model= data.model
               this.fuel = data.fuel
               this.image = data.image
               this.price = data.price
           })
           .catch(console.log)
       },

       back() {
           this.dialog = false,
           this.$router.go(-1)
       }
   },

   watch: {
    "$route.params.id": function() {
        if(this.$route.params.id){
      this.fetchData();
        } 
    }
   },
   created() {
     this.fetchData()
   }
}
</script>

<style>

</style>