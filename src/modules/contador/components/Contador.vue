<!-- CUERPO DEL PROGRAMA -->
<template>
  hola
  <p class="contador">{{ contador }}</p> 
  <button @click="incrementar">incrementar</button>
  <button @click="decrementar">decrementar</button>

</template>

<!-- AQUI SE ESCRIBE TODA LA LOGICA -->
<script setup>
  import { ref } from 'vue';
  const contador = ref(0); //variable reactiva
  
  //funcion
  const incrementar = () =>{
    contador.value ++ ;//asi cambio el valor de la variable o obtrengo su valor
  }

  const decrementar = () =>{
    contador.value -- ;//asi cambio el valor de la variable o obtrengo su valor
  }

</script>

<!-- ESTILOS -->
<style scoped>

.contador{
  color: red;
}

</style>
