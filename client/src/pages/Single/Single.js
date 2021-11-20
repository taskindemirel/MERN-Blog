import './Single.scss'
import SideBar from '../../components/SideBar/SideBar'
import SinglePost from '../../components/SinglePost/SinglePost'
import Header from '../../components/Header/Header'

const Single = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="single">
                <SinglePost />
                <SideBar />
            </div>
        </div>

    )
}

export default Single
