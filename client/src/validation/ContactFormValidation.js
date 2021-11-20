import * as yup from 'yup'

export const contactFormSchema = yup.object().shape({
    name: yup.string().required("adınız bölümü boş bırakılamaz"),
    email: yup.string().email().required(),
    subject: yup.string(),
    message: yup.string().min(10).required()
})