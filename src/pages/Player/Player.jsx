import React, { useEffect, useState } from 'react'
import './Player.css'
import bai from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const navigate = useNavigate();

  const {id} = useParams();

  const [apidata,setApidata] = useState({
    name:'',
    key:'',
    published_at:'',
    type:''

  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWIwMjY5OTcyYTNmZmJjZDA5ZmIxMWQ2MWFhMzk3YSIsInN1YiI6IjY2M2Y2YzU3MzZhZjUwMGI3YjliMjgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h4P50LPBlllvt2KuEsPDvyaAJV-g4C3uxufOenRc7rs'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id==='f_vbAtFSEc0'?'f_vbAtFSEc0':id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApidata(response.results[0]))
      .catch(err => console.error(err));
  },[])
// RRR ID => f_vbAtFSEc0
  return (
    <div className='player'>
      <img onClick={()=>{navigate('/')}} src={bai} alt="" />
      <iframe height='90%' width='90%' src={`https://www.youtube.com/embed/${apidata.key}`} title='Trailer' frameBorder='0' allowFullScreen>
      </iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  )
}

export default Player