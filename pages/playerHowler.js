import React, { useState } from 'react'
import ReactHowler from 'react-howler'
import {FaPlayCircle, FaPauseCircle} from 'react-icons/fa'

export default function PlayPause() {
  const [playMusic, setPlayMusic] = useState(true)
  const handleClick = () =>{
    if(playMusic == 'Play'){
        setPlay('Pause')
        setPlayMusic(false)
    }else{
        setPlay('Play')
        setPlayMusic(true)
    }
}
  return (
    <div>
      <ReactHowler src='/music/Billy-Ocean-Suddenly.mp3' playing={playMusic} />
      <button onClick={handleClick}>
      {
        playMusic ? <FaPauseCircle size={36} /> : <FaPlayCircle size={36}/>
      }
      </button>
    </div>
  )
}