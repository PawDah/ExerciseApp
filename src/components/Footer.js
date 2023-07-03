import React from 'react';
import Logo from '../assets/images/Logo-1.png';
function Footer() {
	return <div className='footer-wrapper'> 
    <div className='footer-details'>
      <img src={Logo} alt="logo" />
      <h5>Made by Dahlke Paweł</h5>
    </div>
  </div>;
}

export default Footer;
