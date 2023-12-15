import React from 'react';
import BlogPost from './BlogPost';
import PropTypes from 'prop-types';

const BlogList = ({post, className}) => {
    return (
        <div className={className}>
            {post.map((post, index)=> (
                <BlogPost key={index} 
                        increment={index + 1} 
                        title={post.title} 
                        content={post.content} 
                        imageUrl={post.imageUrl}
                />
            ))}
        </div>
    );
};
BlogList.propTypes = {
    post: PropTypes.array.isRequired,
  };

export default BlogList;