//pinia sirve para poder usar las variables en otros archivos
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRegistrarStore = defineStore('registrar', () =>{ //ponermos export para usarlo en otro archivo
    const nombre = ref('');
    const email = ref('');

    const guardarRegistro = (nombreFormulario, emailFormulario) => {
        nombre.value = nombreFormulario;
        email.value = emailFormulario;
    }

    return {nombre, email, guardarRegistro}

})