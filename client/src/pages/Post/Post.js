import './Post.scss'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'


const Post = ({ post }) => {
    const PF = "http://localhost:5000/images/"

    const truncateText = (string, maxLength) => {
        if (!string) return null
        if (string.length <= maxLength) return string
        return `${string.toString().substring(0, maxLength)}...`

    }

    return (
        <div className="post">
            {post.photo &&
                <div className="postImageWrapper">
                    <img className="postImage" src={PF + post.photo} alt="" />
                </div>
            }

            <div className="postText">
                <div className="postInfo">

                    {/* Post Category */}
                    <div className="postCat">
                        {post.categories.map(category => (
                            <span className="postCatItem">{category}</span>
                        ))}
                    </div>
                    
                    {/* Post Title */}
                    <Link className="link" to={`/post/${post._id}`} >
                        <div className="postTitle">{post.title}</div>
                    </Link>

                    {/* Author Name */}
                    {/* <div className="postAuthor">{post.username?.split("@")[0]}</div> */}
                   
                   {/* Post Date */}
                    {/* <div className="postDate">
                        <i class="far fa-clock"></i>
                        {new Date(post.createdAt).toDateString()}
                    </div> */}

                    {/* Post Intro / Short Desc */}
                    <div className="postIntro">
                        {/* {parse(post.desc)}  */}
                        {
                            parse(truncateText((post.desc), 205))

                        }

                    </div>

                </div>
                <div className="postReadMore">
                    <Link className="link" to={`/post/${post._id}`} >
                        <span className="readMore">TAMAMINI OKU</span>  <i class="arrow fas fa-caret-right"></i>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Post
