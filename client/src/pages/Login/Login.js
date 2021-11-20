import './Login.scss'
import { useState } from 'react'
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { useDispatch } from "react-redux"
import { setActiveUser } from '../../redux/userSlice'
import { useHistory } from 'react-router-dom'
import WrongAuthModal from '../../components/WrongAuthModal/WrongAuthModal'


const Login = () => {

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [user, setUser] = useState({})
    let history = useHistory()

    const dispatch = useDispatch()


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const loginNow = async (e) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            ).then((result) => (
                dispatch(setActiveUser({
                    userName: result.user.email,
                }))
            ))
            console.log(user);
            history.push('/')

        } catch (err) {
            setOpenModal(true)
        }
    }




    return (
        <>
            {
                openModal ?
                    <WrongAuthModal
                        closeModal={setOpenModal}
                    />

                    :

                    (
                        <div className="login">

                            <span className="loginTitle">Login</span>
                            <form className="loginForm">

                                <input
                                    className="loginUsername"
                                    type="email"
                                    placeholder="E-Postanız"
                                    onChange={(e) => {
                                        setLoginEmail(e.target.value)
                                    }}
                                />

                                <input
                                    className="loginPassword"
                                    type="password"
                                    placeholder="Şifreniz"
                                    onChange={(e) => {
                                        setLoginPassword(e.target.value)
                                    }}
                                />

                                <button
                                    onClick={loginNow}
                                    className="loginButton">
                                    Login
                                </button>

                            </form>
                        </div>
                    )
            }
        </>
    )
}

export default Login
