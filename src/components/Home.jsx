import React, { useState } from 'react';
// import LogoImg from '../assets/logo_plain.png'
import screenshots from '../assets/screenshots.svg'
import './Home.css'

const Home = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = () => {
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'test@gmail.com.com' }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response from the server as needed
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email.');
      });
  };

  return (
    <div className='hero-section' >
      {/* Left side */}
      <div className='hero-section-left'>
        <h1>Coming Soon</h1>
        <p>Get notified when we launch on web.</p>
        <div className='hero-email'>
          <input type='email' value={email} onChange={handleInputChange} placeholder='Enter your email' />
          <button onClick={sendEmail}>Notify me</button>
        </div>
      </div>

      {/* Right side */}
      <div className='hero-section-right'>
        <a href="https://play.google.com/store/apps/details?id=com.risma.palettelab&hl=en_US" target="_blank" rel="noreferrer">
        <img src={screenshots} alt="Screenshots"></img>
        </a>a>
        <p>Available on google play store</p>
      </div>
    </div>
  );
};

export default Home;
