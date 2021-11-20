import { Link } from 'react-router-dom'
import './NavBar.scss'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setUserLogoutState } from '../../redux/userSlice'
import "firebase/firestore";
import "firebase/auth";


const NavBar = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [mobileMenuIconClicked, setMobileMenuIconClicked] = useState(false)



    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    const handleClick = () => {
        setMobileMenuIconClicked(!mobileMenuIconClicked)
    }

    const userName = useSelector(state => state.user.userName)
    const dispatch = useDispatch()

    const logout = async (e) => {
        e.preventDefault();
        dispatch(setUserLogoutState())
    }

    const closeMobileMenu = () => {
      setMobileMenuIconClicked(!mobileMenuIconClicked)
    }


    return (
        <div className="navbar">


            <div className={mobileMenuIconClicked ? "navbarWrapper" : "navbarWrapper close"} >
                <div className="navbarLeft">
                    <ul className="navbarMenu">
                        <li className="navbarMenuItem link">
                            <Link to="/" className="link" onClick={closeMobileMenu} >ANASAYFA</Link>
                        </li>
                        <li className="navbarMenuItem link">
                            <Link to={`/?cat=felsefe`} className="link" onClick={closeMobileMenu} >FELSEFE</Link>
                        </li>
                        <li className="navbarMenuItem link">
                            <Link to={`/?cat=dil`} className="link" onClick={closeMobileMenu} >DİL</Link>
                        </li>
                        <li className="navbarMenuItem link">
                            <Link to={`/?cat=resim`} className="link" onClick={closeMobileMenu} >RESİM</Link>
                        </li>
                        <li className="navbarMenuItem link">
                            <Link to={`/?cat=müzik`} className="link" onClick={closeMobileMenu} >MÜZİK</Link>
                        </li>
                        <li className="navbarMenuItem link">
                            <Link to={`/?cat=fizik`} className="link" onClick={closeMobileMenu} >FİZİK</Link>
                        </li>

                        <li className="navbarMenuItem link">
                            <Link to="/about" className="link" onClick={closeMobileMenu} >HAKKINDA</Link>
                        </li>
                        <li className="navbarMenuItem link">
                            <Link to="/contact" className="link" onClick={closeMobileMenu} >İLETİŞİM</Link>
                        </li>
                        {
                            userName
                                ?
                                <li className="navbarMenuItem link">
                                    <Link to="/createcontent" className="link" onClick={closeMobileMenu} >POST OLUŞTUR</Link>
                                </li>
                                :
                                null
                        }


                    </ul>
                </div>

                <div className="navbarRight">
                    <div className="searchBox">
                        <input className="searchInput" />
                        <i className="searchIcon fas fa-search"></i>
                    </div>
                    <div className="socialIcons">
                        <i className="socialIcon fab fa-facebook"></i>
                        <i className="socialIcon fab fa-twitter"></i>
                        <i className="socialIcon fab fa-instagram-square"></i>
                        <i className="socialIcon fab fa-linkedin"></i>

                        {
                            userName
                                ?
                                <>
                                    <div className="userName">
                                        {
                                            `${userName.split('@')[0]}`
                                        }
                                    </div>
                                    <span className="divider">|</span>
                                    <div className="loginIconBox outBox box" onClick={(e) => logout(e)} >
                                        {/* <span className="inOut logoutText">Logout</span>
                                <i class="inOutIcon fas fa-times-circle"></i> */}
                                        <i class="fas fa-sign-out-alt"></i>
                                    </div>
                                </>
                                :
                                <>
                                    <span className="divider">|</span>
                                    <Link to="/login" className="link">
                                        <div className="loginIconBox inBox box">
                                            {/* <i className="loginIcon fas fa-sign-in-alt"></i> */}
                                            {/* <span className="inOut loginText">Login</span>
                                <i className="loginIcon inOutIcon fas fa-sign-in-alt"></i> */}
                                            <i class="fas fa-user"></i>
                                        </div>
                                    </Link>
                                </>
                        }

                    </div>
                </div>
            </div>


            <div className="mobileNavbar">
                <div className="mobileLogo">TASKINDEMIREL</div>
                <div className="mobileMenuIcon" onClick={handleClick}>
                    <i className={mobileMenuIconClicked ? "fas fa-times" : "fas fa-bars"}  ></i>
                </div>
            </div>


        </div>
    )
}


export default NavBar
