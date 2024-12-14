<template>
    <h3>Propiedades Computadas</h3>
    <input type="text" v-model="valor">
    {{ valorCalculado }}

    <div>
        <resultadoSection :resultado="valorCalculado"></resultadoSection>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import resultadoSection from '../components/resultadoSection.vue';
    const valor = ref(0);

    const valorCalculado = computed(()=>{
        return valor.value * 3;
    })
</script>
<style scoped>
    
    
</style>