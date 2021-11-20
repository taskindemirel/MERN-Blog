import './SideBar.scss'
import aboutImage from '../../assets/td-11.jpg'
import postBox from '../../assets/postBox.png'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <img className="image" src={aboutImage} alt="" />
                <div className="aboutDesc">
                    <div className="aboutTitle">TASKIN DEMIREL</div>
                    <div className="aboutText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores placeat aperiam sed.</div>
                    <div className="readMore">daha fazla...</div>
                </div>
            </div>

            <div className="sidebarItem">
                <div className="kitItems">
                    <div className="kitDesc">
                        <p className="kitTitle">KEEP IN TOUCH</p>
                        <p className="kitText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, amet numquam.</p>
                    </div>
                    <img src={postBox} alt="" className="kitImage" />
                </div>
                <form className="kitForm">
                    <input type="email" className="inputMail" placeholder="E-posta adresiniz" />
                    <button className="submit">KATIL</button>
                </form>

            </div>

        </div>
    )
}

export default SideBar
