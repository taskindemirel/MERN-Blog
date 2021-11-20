import './Home.scss'
import Header from '../../components/Header/Header'
import Posts from '../Posts/Posts'
import SideBar from '../../components/SideBar/SideBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'



const Home = () => {

  const [posts, setPosts] = useState([])
  const { search } = useLocation()


    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/posts" + search)
        setPosts(res.data)
      }
      fetchPosts()
    }, [search])

    return (
        <div className="wrapper">
            <Header className="header" />
            <div className="home">
                <Posts posts={posts}/>
                <SideBar />
            </div>
        </div>
    )
}

export default Home
