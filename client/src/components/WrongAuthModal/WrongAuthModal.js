import './WrongAuthModal.scss'

const WrongAuthModal = ({ closeModal }) => {



    return (
        <div className="modal">
            <div className="modalContainer">
                <i className="fas fa-times-circle"></i>
                <p className="messageTitle">Login Hatası</p>
                <p className="message">Kullanıcı adı ya da şifre yanlış!</p>
                <button className="close" onClick={() => closeModal(false)} >Kapat</button>
            </div>
        </div>
    )
}

export default WrongAuthModal
