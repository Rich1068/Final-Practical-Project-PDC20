import React, { useEffect, useState } from 'react';
import BlogList2 from './BlogList2';
import '../App.css';
import '../Css/home.css';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(storedPosts);
  }, []);



  return (
    <div className='homebg'>
      <br></br>
      <br></br>
      <div className='images'>
      <img style={{ width: '300px', height: 'auto' }} src='ViewPost.png'/>
      </div>
      <br></br>
      <div className='test'>
      <BlogList2 post={posts}/>
      </div>
      
    </div>
  );
};

export default HomePage;
