<template>
    <div>
        <h2>Formulario de Registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit()">
            <div class="form">
                <label for="nombre">nombre</label>
                <Field type="text" name="nombre" id="nombre" placeholder="ingrese su nombre"/>
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
           
            <div class="form">
                <label for="correo">correo</label>
                <Field type="email" name="email" id="email" placeholder="ingrese su email"/>
                <ErrorMessage name="email"></ErrorMessage>

            </div>
            
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
        
    </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';

//funcion
const onSubmit = () => {
    console.log("se ha enviado el formulario")
}
</script>

<style scoped>
.form{
    margin-bottom: 10px;
}
</style>