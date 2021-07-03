import React from 'react'

import './PostCard.css';


const PostCard = (props) => {
   
    
    return (
        <>
        <div className="post">
            <div key={props.id} className="post-content">
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            </div>
        </div> 
        </>
    )
}

export default PostCard;
