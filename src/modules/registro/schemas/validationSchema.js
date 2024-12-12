import * as yup from 'yup'

export const schema = yup.object({
    nombre: yup.string().required("el nombre es requrido"),
    email: yup.string().email().required(),
});