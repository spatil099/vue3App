<template>
  <header>
    <div>
      <NavBarComponent />
      <BannerComponent msg="Welcome to the Shop !!" />
      <ProductsComponent></ProductsComponent>
      
    </div>
  </header>
</template>

<script setup>
import NavBarComponent from '../components/HomeView/NavBar-Component.vue'
import BannerComponent from '../components/HomeView/Banner-Component.vue'
import ProductsComponent from '../components/HomeView/Products-Component.vue'
</script>

<style></style>
