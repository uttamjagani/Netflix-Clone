import React, { useEffect } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import RRR from '../../assets/RRR_bg.jpg'
import RRR_English_logo from '../../assets/RRR_English_logo.webp'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div className='home'>
      <Navbar />
      <div className="banner">
        <img src={RRR} alt="" className='banner-rrr' />
        <div className="banner_logo">
          <img src={RRR_English_logo} alt="" className='rrr-logo' />
          <p>A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.</p>
          <div className="btns">
            <Link to={`https://www.youtube.com/embed/f_vbAtFSEc0`} className='btn1'>
              <img src={play_icon} alt="" />Play
            </Link>
            <button className='btn2'><img src={info_icon} alt="" />Info</button>
          </div>
          <Card />
        </div>
      </div>
      <div className="more-cards">
        <Card title={"Blockbuster Movies"} catagory={"top_rated"} />
        <Card title={"Only On Netflix"} catagory={"popular"} />
        <Card title={"Upcoming"} catagory={"upcoming"} />
        <Card title={"Best Pics For You"} catagory={"now_playing"} />
      </div>
      <Footer />
    </div>

  )
}

export default Home