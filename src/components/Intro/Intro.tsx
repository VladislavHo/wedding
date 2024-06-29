import { useEffect, useRef, useState } from "react";
import myAudioFile from "../../assets/audio/intro.mp3";
import "./intro.scss"

type OverlayProps = {
  activeOverlay: boolean;


}



export default function Intro({ activeOverlay }: OverlayProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };



  useEffect(()=>{
    if(!activeOverlay){
      audioRef.current?.play();
    }
  }, [activeOverlay])

  return (
    <section id="intro" className="intro">
      <div className="intro--title">
        <h2>Артём и Владислава</h2>
        <p className="date">30.08.2024</p>
        <button onClick={handlePlayPause} className="volume-logo">
          <img src={isPlaying ? "./svg/sound-on.svg" : "./svg/sound-off.svg"} alt="icon" />
        </button>
        <audio ref={audioRef} controls={false}>
          <source src={myAudioFile} type="audio/mpeg" />
          Ваш браузер не поддерживает воспроизведение аудио.
        </audio>
      </div>
    </section>
  )
}
