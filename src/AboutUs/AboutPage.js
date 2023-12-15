import React, { } from 'react'
import '../Css/about.css';

export default function AboutUs() {
    return (
      <div className='aboutBG'>
        <br></br>
        <br></br>
        <div className='images'>
        <img style={{ width: '250px', height: 'auto' }} src='assets/AboutLogo.png' alt='' />
        </div>
        <br></br>
      <div className="containerr">
        <h3> Welcome to ReactBlogs! We are a team of BSIT3 students from Angeles University Foundation
        passionate about technology and web development. Our goal is to provide a platform for
        enthusiasts and learners to share their thoughts and experiences through blog posts.</h3>
        <br></br>
        <h3>Feel free to explore the website created by our team and other contributors. If you have
        any questions, suggestions, or would like to contribute to ReactBlogs, please don't hesitate
        to contact us through the "Contact" page.</h3>
      </div>
      <br></br>
      <br></br>
      <div className='images'>
      <img style={{ width: '250px', height: 'auto' }} src='assets/Mark.png' alt=''></img>  
      <img style={{ width: '250px', height: 'auto' }} src='assets/Lorenzo.png' alt=''></img>  
      <img style={{ width: '250px', height: 'auto' }} src='assets/Rich.png' alt=''></img>  
      <img style={{ width: '250px', height: 'auto' }} src='assets/Cristan.png' alt=''></img>  
      </div>
      </div>
    );
  }