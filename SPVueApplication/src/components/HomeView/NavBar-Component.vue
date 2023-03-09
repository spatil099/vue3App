<template>
  <div id="navbar">
    <div id="lhs">
      <div>
        <router-link to="/">
          <span>Home</span>
        </router-link>
      </div>
    </div>
    <div id="rhs">
      <router-link to="/admin">
        <div>Admin</div>
      </router-link>
      <div id="cart">
        <q-icon @click="visible = !visible " name="shopping_cart" />
        <div id="cart_count">{{ cartStore.cartCount }}</div>
        <CartComponent :dialogVisibility="visible"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useCartStore}  from '../../store.js'
import CartComponent from '../Cart/Cart-Component.vue'
import {ref} from 'vue'

const cartStore = useCartStore();
let visible = ref(false)
</script>

<style scoped>
#navbar {
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  font-size: 130%;
  height: 70px;
}

#lhs {
  display: flex;
  flex: 3;
  align-items: center;
}

#rhs {
  display: flex;
  flex: 7;
  gap: 5%;
  align-items: center;
  justify-content: flex-end;
}

#cart {
  display: flex;
  align-items: center;
}

#cart_count {
  padding-bottom: 10px;
}
</style>
