import { useState } from 'react';
import {useSound} from 'use-sound';
import {FaPlayCircle, FaPauseCircle} from 'react-icons/fa'
function Player() {
    const soundUrl = '/music/Billy-Ocean -Suddenly.mp3';
    const [playMusic, setPlayMusic] = useState(false)
    const [play, { stop }] = useSound(soundUrl);
    
    const handleClick = () =>{
        if(playMusic == false){
            play()
            setPlayMusic(true)
        }else{
            stop()
            setPlayMusic(false)
        }
            
    }
    return (
        <div className="flex items-center justify-center">
            <div>
            <button onClick={handleClick}>
                {
                    playMusic ? <FaPauseCircle size={36} /> : <FaPlayCircle size={36}/>
                }
            </button>
            </div>
        </div>
    );
}

export default Player