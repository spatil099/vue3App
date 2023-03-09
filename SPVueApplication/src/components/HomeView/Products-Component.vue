<template>
  <div id="products">
    <div @click="showProduct(product.id)"  v-for="product in products" :key="product.id" id="individual_product">
      <img :src="product.imageURL" />
      <p>{{ product.title }}</p>
      <p>{{ product.price }}</p>

      
    </div>
  </div>
</template>

<script setup>
// import productsData from '../../data/products.json'
import {onMounted, ref} from "vue"
import router from '../../router.js'
// import axios from 'axios';
import {db, getDocs, collection} from '../../firebase.js'

// const products = productsData
let products = ref([]);

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "spVueStore"));
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());
  let product = doc.data();
  product.id = doc.id;
  products.value.push(product);
});
}

const showProduct = (id) => {
  router.push(`productdetails/${id}`)
}

onMounted( async () => {
  
  // let response = await fetch("https://fakestoreapi.com/products");
  // let data = await response.json();
  // console.log(data)
  // products.value = data;


  //Using axios
  
//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
// axios.get("https://fakestoreapi.com/products")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//     products.value = response.data
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

//axios get
//  let response = await axios.get("https://fakestoreapi.com/products");
//  products.value = response.data;

// use firebase
// console.log(db)

await getData();


})
</script>

<style scoped>
#products {
  margin-top: 3%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2%;
}

#products img {
  width: 100%;
}


</style>
