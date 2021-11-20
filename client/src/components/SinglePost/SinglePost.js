import './SinglePost.scss'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    PocketShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    PocketIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";


const SinglePost = () => {

    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/"
    const userName = useSelector(state => state.user.userName)
    let history = useHistory()
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
    const url = "https://www.taskindemirel" + location.pathname


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete("/posts/" + path, {
                data: { username: userName }
            })
            history.push("/")
        } catch (error) {

        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: userName,
                title: title,
                desc: desc
            })
            setUpdateMode(false)
        } catch (error) {

        }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {/**** Title ****/}
                {updateMode
                    ?
                    <input
                        type="text"
                        value={title}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)} />
                    :
                    (
                        <div className="singlePostTitle"> {title}</div>
                    )
                }

                {/**** Categories ****/}
                <div className="singlePostCats">{post.categories && post.categories.map(category => (
                    <span className="postCatItem">{category}</span>

                ))}</div>

                {/**** Username ****/}
                <Link className="link" to={`/?user=${post.username}`}>
                    <div className="singlePostAuthor">
                        {post.username?.split("@")[0]}
                    </div>
                </Link>

                {/**** Date ****/}
                <div className="postDate">
                    <i class="far fa-clock"></i>
                    {new Date(post.createdAt).toDateString()}
                    {/* <div className="singlePostDate"></div> */}
                </div>

                {/**** Update - Delete Buttons ****/}
                {post.username === userName &&
                    <div className="singlePostUpdateDelete">
                        <i class="fas fa-edit" onClick={() => setUpdateMode(true)}></i>
                        <i class="fas fa-trash-alt" onClick={handleDelete} ></i>
                    </div>
                }

                {/**** Photo ****/}
                {post.photo &&
                    <img src={PF + post.photo} alt="" className="singlePostImage" />
                }

                {/**** Desc ****/}
                {
                    updateMode
                        ? (
                            <ReactQuill
                                theme="snow"
                                value={desc}
                                onChange={setDesc} />
                        ) :
                        parse(`
                <div className="singlePostText">
                    ${desc}
                </div>
                `)
                }
            </div>
            {
                updateMode && (
                    <button className="singlePostUpdateButton" onClick={handleUpdate} >Update</button>
                )
            }

            <div className="socialShareButtons">
                <p className="shareTitle">Bu yazıyı paylaş</p>
                <FacebookShareButton url={url} title={title} className="socialShareButton" >
                    <FacebookIcon size={26} round={true} />
                </FacebookShareButton>

                <TwitterShareButton url={url} title={title} className="socialShareButton" >
                    <TwitterIcon size={26} round={true} />
                </TwitterShareButton>

                <LinkedinShareButton url={url} title={title} className="socialShareButton">
                    <LinkedinIcon size={26} round={true} />
                </LinkedinShareButton>

                <WhatsappShareButton url={url} title={title} className="socialShareButton">
                    <WhatsappIcon size={26} round={true} />
                </WhatsappShareButton>

                <EmailShareButton url={url} title={title} className="socialShareButton">
                    <EmailIcon size={26} round={true} />
                </EmailShareButton>

                <PocketShareButton url={url} title={title} className="socialShareButton">
                    <PocketIcon size={26} round={true} />
                </PocketShareButton>
            </div>
        </div>
    )
}

export default SinglePost
