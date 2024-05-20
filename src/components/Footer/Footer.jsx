import React from 'react'
import './Footer.css'
import yt_i from '../../assets/youtube_icon.png'
import in_i from '../../assets/instagram_icon.png'
import fb_i from '../../assets/facebook_icon.png'
import tw_i from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={yt_i} alt="" />
        <img src={in_i} alt="" />
        <img src={fb_i} alt="" />
        <img src={tw_i} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preference</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright">@ 1997 - 2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer