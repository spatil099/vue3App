<template>
    <div id="cart">
        <q-dialog :seamless="true" :modelValue="dialogVisibility" position="right">
            <q-card id="cart_card">

                <q-card-section>
                    <div>
                        <h4>Recently Added items</h4>
                    </div>
                    <div id="products">
                        <div v-for="product in cartStore.cart" :key="product.id" id="individual_product">
                            <div id="lhs">
                                <img :src="product.imageURL">
                            </div>

                            <q-space />
                            <div id="rhs">
                                <p>{{ product.title }}</p>
                                <p>{{ product.price }}</p>
                                <q-icon @click="removeFromCart(product.id)" name="delete"></q-icon>
                            </div>
                        </div>
                    </div>

                    <div id="place_order">
                        <router-link to="/orders">
                            <q-btn color="secondary" label ="Proceed"/>
                        </router-link>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script setup>
defineProps(['dialogVisibility'])
import {useCartStore}  from '../../store.js'

const cartStore = useCartStore();

const removeFromCart = (id) => {
    cartStore.removeFromCart(id);
}

</script>

<style scoped>
#cart_card {
    height: 800px;
    margin-top: 10%;
    width : 200pxpx

}

#individual_product {
    display: flex;
}

#individual_product div {
    border: 1px solid black;
    margin-top: 2%;
}

#lhs {
    display: flex;
    flex: 6;
}

#lhs img{
    width: 100%;
}

#rhs {
    display: flex;
    flex: 4;
    flex-direction: column;
    font-size: 120%;
}

#place_order {
    margin-top: 5%;
}
</style>