import Post from '../Post/Post'
import './Posts.scss'

const Posts = ({posts}) => {
    return (
        <div className="posts">
            {
            posts.reverse().map(p => (
                <Post post={p}/>
            ))
            }


        </div>
    )
}

export default Posts
