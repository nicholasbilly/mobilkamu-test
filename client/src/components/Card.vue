<template>
<v-card
    :loading="loading"
    class="text-xs-center ma-3"
    max-width="374"
  >
    <v-img
      height="250"
      :src="barang.image"
    ></v-img>

    <v-card-title>{{barang.brand}}</v-card-title>
    <v-card-text>
      {{barang.model}}
      </v-card-text>
      <v-btn
        color="blue"
        text
        @click="seeDetails(barang._id)"
      >
        See Details
      </v-btn>
    <v-card-text>

      <div class="my-4 subtitle-1 yellow--text">
        Rp • {{barang.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}
      </div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    
    <v-card-actions>
      <v-btn
        color="danger"
        text
        @click="deleteProduct(barang._id)"
      >
       Delete
      </v-btn>
    </v-card-actions>
  </v-card>
      
  
</template>

<script>
const url = "http://35.198.202.116";
import axios from "axios";
import { mapState } from "vuex";
import Swal from 'sweetalert2'
import oneProduct from '../views/oneProduct'
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),
    props: ['barang'],
    components: {
      
    },

    methods: {
      deleteProduct(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {
            axios.delete(`${url}/mobil/${id}`)
            .then(deleted => {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              this.$store.dispatch('getProducts')
             })
            .catch(console.log)     
          }
       })
       .catch(console.log)
      },

      seeDetails(id) {
        this.$router.push(`/admin/${id}`)
      },
    },
  }
</script>

