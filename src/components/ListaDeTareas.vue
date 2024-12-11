<!-- CUERPO DEL PROGRAMA -->
<template>
    <div>
        <h2>Lista de Tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTareas"> <!-- Asignamos al input la variable que va a estar cambiando con "v-model"-->
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index"> <!--con el v-for recorro todo el vector, y con :key asigno a cada valor de la lista un identificador para manejar los datos de forma eficiente -->
                {{ tarea  }}
                <button @click="borrarTarea(index)">borrar</button>
            </li> 
        </ul>
    </div>
  
</template>
  
<!-- AQUI SE ESCRIBE TODA LA LOGICA -->
<script setup>
 import { ref } from 'vue';

 const tareas = ref([]); //lo iniciamos como un arreglo vacio
 const nuevaTarea = ref('');

 const addTareas = () => {
    tareas.value.push(nuevaTarea.value); //agreamos el ".push" para agregar una tarea nueva al arreglo
    nuevaTarea.value = '';
 }

 const borrarTarea = (index) => {
    tareas.value.splice(index, 1); //agreamos el ".splice(indice del dato, borra un solo elemento)" para borrar un elemento del arreglo, 
 }



</script>

<!-- ESTILOS -->
<style scoped>

</style>
  