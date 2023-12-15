import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

import '../Css/create.css';
import Resizer from 'react-image-file-resizer';


const BlogPage = () => {
  

  const [posts, setPost] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', imageUrl: '' });
  const storedPosts = localStorage.getItem('blogPosts');
  const [selectedFile, setSelectedFile] = useState();
  useEffect(() => {
    // Retrieve posts from localStorage on component mount
    
    if (storedPosts != null) {
      setPost(JSON.parse(storedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      setPost((prevPosts) => [...prevPosts, newPost]);
      setNewPost({ title: '', content: '', imageUrl: '' });
      alert('Successfully created new post');
    }
  };
  const handleClearPosts = () => {
    const confirmed = window.confirm("Are you sure you want to clear all posts?");
    if (confirmed) {
      setPost([]);
    }
    
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      Resizer.imageFileResizer(
        file,
        600, // Max width
        400, // Max height
        'JPEG',
        100,
        0, // Rotation
        (resizedImage) => {
          setNewPost((prevPost) => ({ ...prevPost, imageUrl: resizedImage }));
          setSelectedFile(file);
        },
        'base64'
      );
    }
  };
  
  return (
    <div className='createBg'>
      <br></br>
      <br></br>
    <div>
      <div className="form-container">
        <br></br>
        <img style={{ width: '300px', height: 'auto' }} src='assets/createPost.png' alt=''/>
        <br></br>
        <br></br>
        <label><b>Post Title</b></label>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
        />
        <br></br>

        <label><b>Content</b></label>
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          required
        />
        <br></br>
        <label><b>Image:</b></label>
        <div className='image-upload'>
        <input type="file" id="image-btn" accept="image/*" onChange={handleImageChange} hidden/>
        <label htmlFor='image-btn'>CHOOSE FILE</label>
        {selectedFile && (
        <p>{selectedFile.name}</p>
      )}
        </div>
        <div>
          <br></br>
          <br></br>
        </div>
        <div className='button-container'>
        <div className="button">
        <button  onClick={handleClearPosts}><b>Clear</b></button>
        </div>
        <div className='button2'>
        <button  onClick={handleAddPost}><b>Post</b></button>
        </div>
        </div>
      </div>
      
    </div>
    <br></br>
    <div>
      <BlogList post={posts} />
    </div>
    </div>
  );
};

export default BlogPage;
