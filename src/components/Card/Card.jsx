import React, { useEffect, useRef, useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({title,catagory}) => {

  const [apidata , setApidata]= useState([]);
  const cardRef = useRef();

  const handleWheel = (event)=>{
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY ;
  }

  useEffect((event)=>{
    cardRef.current.addEventListener('wheel',handleWheel);
    fetch(`https://api.themoviedb.org/3/movie/${catagory?catagory:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApidata(response.results))
    .catch(err => console.error(err));
  },[])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWIwMjY5OTcyYTNmZmJjZDA5ZmIxMWQ2MWFhMzk3YSIsInN1YiI6IjY2M2Y2YzU3MzZhZjUwMGI3YjliMjgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h4P50LPBlllvt2KuEsPDvyaAJV-g4C3uxufOenRc7rs'
    }
  };
  

  return (
    <div className='cards'>
      <h2>
        {title?title:"Popular on Netflix"}
      </h2>
      <div className="card-list" ref={cardRef}>
        {apidata.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+ card.backdrop_path} alt="" />
            <p>{card.title}</p>
          </Link>
        })}
      </div>
      
    </div>
  )
}

export default Card