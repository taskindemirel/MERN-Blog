import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper">


                <div className="left">
                    <p className="motto">
                        'My art and <br /> profession is to live'
                    </p>
                </div>



                <div className="right">
                    <div className="top">
                        <div className="socialIcons">
                            <i className="socialIcon fab fa-facebook"></i>
                            <i className="socialIcon fab fa-twitter"></i>
                            <i className="socialIcon fab fa-instagram"></i>
                            <i className="socialIcon fab fa-linkedin-in"></i>
                        </div>
                        {/* <p className="email">taskindemirel@blog.com</p> */}
                    </div>
                    <div className="bottom">
                        <ul className="categories">
                            <li className="category link">MÜZİK</li>
                            <li className="category link">RESİM</li>
                            <li className="category link">FELSEFE</li>
                            <li className="category link">FİZİK</li>
                            <li className="category link">DİZİ</li>
                        </ul>
                    </div>
                </div>


            </div>

            <div className="copyrightWrapper">
                <p className="copyright">Developed by <span className="copyrigtLogo">Taşkın Demirel</span> </p>
            </div>
        </div>
    )
}

export default Footer
