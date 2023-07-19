import React from 'react';
import './footer.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaComments } from 'react-icons/fa'; // Import Font Awesome icons
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineShoppingCart,AiFillHome  } from "react-icons/ai"
import { MdAccountCircle } from "react-icons/md";




function Footer() {
  return (
    <div className='footer'>
      <div className='bottom'>
        <div>
          <h4>About DIGISTIC-ELECTRONICS</h4>
          <p>
          At Digistic-Electronics, <br/>we are redefining the way you experience technology. <br/>Our electronic ecommerce system brings you a world of<br/> cutting-edge devices and innovative solutions, tailored to meet<br/> your digital needs. With a focus on quality, convenience, and exceptional  <br/>customer service,we strive to provide an unparalleled shopping experience.
          </p>
        </div>
        <div>
          <h4>Get in touch</h4>
          <a href='/'>
            <FaMapMarkerAlt /> DIGISTIC-ELECTRONICS-Kenya
          </a>
          <a href='/'>
            <FaPhone /> Tel.: +254 711 069 999
          </a>
          <a href='/'>
            <FaEnvelope /> Email: info@digisticelectronics.co.ke
          </a>
        </div>
        <div>
          <h4>Info</h4>
          <a href='/'>
            <AiFillHome />  Home
          </a>
          <a href='/signin'>
            < MdAccountCircle />Account
          </a>
          <a href='/HelpCenter'>
            <BiHelpCircle /> Help
          </a>
        </div>
        
      </div>
      <p>&copy; The DIGISTIC-ELECTONICS</p>
      <div className="social-icons">
            <a href='/'>
              <FaFacebook />
            </a>
            <a href='/'>
              <FaTwitter />
            </a>
            <a href='/'>
              <FaInstagram />
            </a>
            <a href='/'>
              <FaComments />
            </a>
          </div>
    </div>
  );
}

export default Footer;
