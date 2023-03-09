<template>
  <div id="welcome">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
defineProps(['msg'])
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 3 rem;
}
#welcome {
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px black solid;
  color: rgb(96, 156, 96);
}
</style>
