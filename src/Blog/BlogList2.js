import React from 'react';
import BlogPost2 from './BlogPost2';
import PropTypes from 'prop-types';

const BlogList2 = ({post}) => {
    return (
        <div className= 'roww'>
            {post.map((post, index)=> (
                <BlogPost2 key={index} 
                        increment={index + 1} 
                        title={post.title} 
                        content={post.content} 
                        imageUrl={post.imageUrl}
                />
            ))}
        </div>
    );
};
BlogList2.propTypes = {
    post: PropTypes.array.isRequired,
  };

export default BlogList2;