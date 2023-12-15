import React from 'react';
//downloaded emailjs for smtp
import emailjs from 'emailjs-com';
import '../Css/contact.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_4en6u1n', 'template_566l1ws', e.target, 'kkUK4NMsFVp-KrYGt')
      .then((result) => {
        return(
            alert('Message Successfully sent')
        )
      }, (error) => {
        return(
            alert('Something Wrong')
        )
      });
  }

  return (
    <div className='bgg'>
    <div>
    <div className="form-containerrr">
    <form onSubmit={sendEmail}>
      <br></br>
      <br></br>
      <div>
    <img style={{ width: '300px', height: 'auto' }} src='assets/contactLogo.png' alt=''/>
    </div>
    <br></br>
    <br></br>
      <input type="hidden" name="contact_number" required/>
      <label><b>Full Name:</b></label>
      <input type="text" name="from_name" required/>
      <br></br>
      <br></br>
      <label><b>Email:</b></label>
      <input type="email" name="email" required/>
      <br></br>
      <br></br>
      <label><b>Message:</b></label>
      <textarea name="message" />
      <br></br>
      <br></br>
      <br></br>
      <div className='button-containerr'>
      <button type="submit" value="Send">Send </button>
      </div>
    </form>
    </div>
    </div>
    </div>
  );
}
