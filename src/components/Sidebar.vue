<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ nombre }}</h3>
        <h3>Email: {{ email }}</h3>
        <ul>
            <li><router-link to = "/contador">Contador</router-link></li>
            <li><router-link to = "/lista-de-tareas">Lista de Tareas</router-link></li>
            <li><router-link to = "/registrar">registrar</router-link></li>
        </ul>
    </div>
</template>

<script setup>
    import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
    import { ref, watch } from 'vue';
    const registrarStore = useRegistrarStore();
    const nombre = ref(registrarStore.nombre.value)
    const email = ref(registrarStore.email.value)

    watch (()=> registrarStore.nombre, (newValue) => {//sirve para mostrar los cambios de las varianles reactivas en otros archivos 
        nombre.value = newValue
    })

    watch (()=> registrarStore.email, (newValue) => {//sirve para mostrar los cambios de las varianles reactivas en otros archivos 
        email.value = newValue
    })

</script>

<style>
.sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>