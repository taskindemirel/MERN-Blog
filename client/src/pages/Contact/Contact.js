import './Contact.scss'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
import emailjs from 'emailjs-com'
import { contactFormSchema } from '../../validation/ContactFormValidation'
import { useState } from 'react'




const Contact = () => {

    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    // SEND EMAIL
    const sendEmail = async (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))

        let formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            subject: e.target[2].value,
            message: e.target[3].value,
        }

        const isValid = await contactFormSchema.isValid(formData)

        if (!isValid) {
            console.log("mesaj gönderilemedi")

        } else {
            emailjs.sendForm(
                'service_bjxg5kg',
                'template_7zdotr4',
                e.target,
                'user_dEv1bAZZzNLaliFBEHQhE'
            ).then(res => {
                setIsSubmit(true)
                console.log("submit is true")
                setFormValues({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                })

            }).catch(err => {
                console.log(err)
            })
            
            console.log("form values are not empty")

            
        }
    }

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if (!values.name) {
            errors.name = "İsim alanı boş bırakılamaz!"
        }

        if (!values.email) {
            errors.email = "E-Posta alanı boş bırakılamaz!"
        } else if (!regex.test(values.email)) {
            errors.email = "Geçerli bir e-posta girmelisiniz!"
        }
        if (!values.message) {
            errors.message = "Mesaj alanı boş bırakılamaz!"
        } else if (values.message.length < 10) {
            errors.message = "Mesajınız en az 10 karakter olmalıdır!"
        }

        return errors
    }


    return (

        <div className="contact">
            <Header className="header" />
            <div className="contactWrapper">
                <div className="contactAll">
                    <p className="contactTitle">İLETİŞİM</p>
                    <div className="contactContainer">
                        <form className="contactForm" onSubmit={sendEmail} >
                            <input
                                name="name"
                                className="formItem input inputName"
                                type="text"
                                placeholder="Adınız"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                            <p className="messageToUser"> {formErrors.name} </p>


                            <input
                                name="email"
                                className="formItem input inputEmail"
                                type="text"
                                placeholder="E-Posta adresiniz"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            <p className="messageToUser"> {formErrors.email} </p>


                            <input
                                name="subject"
                                className="formItem input inputSubject"
                                type="text"
                                placeholder="Konu"
                                value={formValues.subject}
                                onChange={handleChange}
                            />

                            <textarea
                                name="message"
                                className="formItem messageArea"
                                placeholder="Mesajınız"
                                value={formValues.message}
                                onChange={handleChange}
                            >
                            </textarea>
                            <p className="messageToUser"> {formErrors.message} </p>


                            <button
                                className="sendButton">
                                Gönder
                            </button>
                            {
                            Object.keys(formErrors).length === 0 && isSubmit ? (
                                <p className="messageToUser green"> Teşekkürler. Mesajınız iletildi. </p>

                            ) : 
                            null
                            } 




                        </form>
                        <div className="socialMedia">
                            <p className="socialMediaTitle">Sosyal Medya</p>
                            <div className="socialIcons">
                                <i className="socialIcon fab fa-facebook"></i>
                                <i className="socialIcon fab fa-twitter"></i>
                                <i className="socialIcon fab fa-instagram"></i>
                                <i className="socialIcon fab fa-linkedin-in"></i>

                            </div>
                        </div>

                    </div>

                </div>
                <SideBar className="sidebar" />
            </div>
        </div>

    )
}

export default Contact
