import React from 'react';

import './Blog.css';

export const Blog = ({blog}) => {

    return (
        <div className='post'>
            <h5>{blog.title}</h5>
            <p>{blog.body}</p>
        </div>
    )
}