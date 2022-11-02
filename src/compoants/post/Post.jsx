


import './Post.scss'
import { FaComment, FaEllipsisH, FaHeart, FaShare, FaThumbsUp, } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Comment from '../comments/Comment';
import { useState } from 'react';

const Post = ({ post }) => {
    const [CommentOpen,setCommentOpen]=useState(false)
    const [like,setLike]=useState(false)
    // const like=false
    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userinfo">
                        <img src={post.profilePic} alt="" srcset="" />
                        <div className="detal">
                            <Link to={`/Profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <span className='name'>{post.name}</span>
                               
                            </Link> <span className='date'>1 min ago</span>
                        </div>
                       


                    </div>
 <div> <FaEllipsisH /></div>
                </div>
                <div className="contant">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                
                </div>
                <div className="info">
                    <div className="item" onClick={()=>setLike(!like)}>
                        {like ?    <FaHeart /> : <FaThumbsUp/> }
                        12 like
                      
                    </div>
                    <div className="item" onClick={()=>setCommentOpen(!CommentOpen)}>
                    <FaComment />
                        10 comments
                      
                    </div>
                    <div className="item">
                    <FaShare />
                        share
                      
                    </div>
                      
                 
              
                </div>
                {CommentOpen && <Comment/>}
            </div>
        </div>
    )
}

export default Post