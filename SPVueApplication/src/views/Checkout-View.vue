<template>
    <NavBarComponent/>  
    <div id="container">
        <q-form id="form_input"
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.name"
        label="Your name *"
      />

      <q-input
        filled
        type="number"
        v-model="form.contact"
        label="Your contact *"
      />

      <q-input
        filled
        v-model="form.address"
        label="Your Address *"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </div>
</template>

<script setup>
import NavBarComponent from '../components/Homeview/NavBar-Component.vue'
import {reactive} from 'vue'
import {useCartStore} from '../store.js'
import { collection, addDoc, db } from "../firebase.js"; 

const store = useCartStore();
const form = reactive({
    name : '',
    contact : 0,
    address :'',
    order : store.cart,
    order_total : store.cartCount
})

const onSubmit = async () => {
// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "orders"), form);
console.log("Document written with ID: ", docRef.id);
}
</script>

<style scoped>

#container{
    margin-top: 10%;
}
#form_input{
    width: 50%;
}
</style>