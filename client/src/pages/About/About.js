import SideBar from '../../components/SideBar/SideBar'
import './About.scss'
const About = () => {
    return (
        <div className="about">

            <div className="aboutWrapper">
                <p className="mainTitle">
                    HAKKINDA
                </p>
                <div className="aboutTD aboutPart">
                    <p className="title">
                        Taşkın Demirel
                    </p>
                    <p className="aboutText">
                        <b>Oscar Wilde</b>'ın <b>Dorian Gray'in Portesi</b> romanında geçen bir diyalogdan çok kısa bir bölümü buraya almak isterim.
                    </p>
                    <blockquote className="wilde">
                        “What are you?” <br />
                        “To define is to limit.”
                    </blockquote>
                </div>
                <div className="aboutBlog aboutPart">
                    <p className="title">
                        Blog
                    </p>
                    <p className="aboutText">
                        Her gün milyonlarca yeni şeylerin üretildiği bir gezegende, bir yerlerde henüz bilmediğim ama 
                        karşılaştığımda takılıp kaldığım, kaydettiğim, dostlarıma tavsiye ettiğim <i> kitaplar, dergiler, şarkılar, 
                        diziler, podcastler, siteler</i> var... <br />
                        Olduklarını biliyorum çünkü onlara rastlayınca seviniyorum. <br />
                        Umarım hep yaptığım gibi, rastlamış olsam hemen sosyal medya hesaplarını takibe geçeceğim, yazılarını pocket'a kaydedip
                        barok bir adagio ve bir kahve eşliğinde okuyacağım bir blog gibi olur bu <i>blog</i> da...
                    </p>
                </div>
            </div>

            <SideBar />
        </div>
    )
}

export default About
