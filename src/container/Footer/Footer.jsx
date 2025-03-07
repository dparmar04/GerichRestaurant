import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay , Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd st, New York, NY 10019, US</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer_logo" />
        <p className='p__opensans'>The best way to find your self is to loose your self in the service of other</p>
        <img src={images.spoon} alt="spoon__img" style={{ marginTop: "15px" }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram/>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hour</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>8:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>07:00 am -1!:00 pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
