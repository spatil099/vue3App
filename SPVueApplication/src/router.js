import Home from './views/Home-View.vue'
import Admin from './views/Admin-View.vue'
import ProductDetails from './views/ProductDetails-View.vue'
import Checkout from './views/Checkout-View.vue'
import { createRouter, createWebHistory } from 'vue-router'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [{ path: '/', component: Home },{ path : '/admin', component :Admin}, {path : '/productdetails/:id',component : ProductDetails}, {path: '/orders', component:Checkout}]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes // short for `routes: routes`
})

export default router
