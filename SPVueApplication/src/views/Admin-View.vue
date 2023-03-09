<template>
    <NavBarComponent />
    <div id="container"> 
        <AddProductComponent />
    </div>
</template>

<script setup>
import NavBarComponent from '../components/HomeView/NavBar-Component.vue'
import AddProductComponent from '../components/AdminView/AddProduct-Component.vue'
</script>

<style scoped>
#container {
    margin-top: 5%;
}
</style>