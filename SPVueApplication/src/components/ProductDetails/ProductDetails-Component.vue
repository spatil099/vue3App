<template>
    <div id="container">
        <div id="lhs">
          <img :src="product.imageURL" alt=""/>
        </div>
        <div id="rhs">
          <p>{{ product.title }}</p>
          <p>{{ product.price }}</p>
          <q-btn id="addtoCart" color="primary" label="Add to Cart" @click = "addToCart(product)"/>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import { doc, getDoc, db } from "../../firebase.js";
import {useRoute} from 'vue-router';
import {useCartStore} from '../../store.js'

const route = useRoute();
const product = ref ({}); 
const cartStore = useCartStore();

const addToCart = (product) => {
  cartStore.addToCart(product);
}

onMounted( async () => {
const docRef = doc(db, "spVueStore", route.params.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {

  let prod = docSnap.data();
  prod.id = docSnap.id;
  product.value = prod;
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
})
</script>

<style scoped>
#container {
  display: flex;
  margin-top: 5%;
}

#lhs {
  display: flex;
  flex : 4
}

#lhs img {
  width : 100%
}

#rhs {
  display: flex;
  flex: 6;
  flex-direction: column;
  margin-left: 3%;
  font-size: 160%;
}

#addtoCart {
  width: 30%;
}
</style>