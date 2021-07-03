import React from 'react'
import PostCard from '../PostCard/PostCard';

import './Posts.css';

const Posts = (props) => {
    return (
        <div className="posts">
          {props.posts.map(post => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
            />
          ))}
      </div>         
    )
}

export default Posts;
