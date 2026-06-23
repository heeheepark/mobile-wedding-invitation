import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useRef, useState } from "react";

import Account from "../components/Account";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Greeting from "../components/Greeting";
import Intro from "../components/Intro";
import Map from "../components/Map";
import Route from "../components/Route";

import "../styles/common.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolume, faVolumeOff } from "@fortawesome/free-solid-svg-icons";
import backgroundMusic from "../assets/music/Spring_Flowers.mp3";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.currentTime = audioRef.current.currentTime || 0;
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={backgroundMusic} loop preload="auto" />

      <FontAwesomeIcon
        icon={isPlaying ? faVolume : faVolumeOff}
        className="btn-volume"
        onClick={handlePlayPause}
      />

      <Intro />
      <Greeting />
      <Calendar />
      <Gallery />
      <Map />
      <Route />
      <Account />
      <Footer />
    </div>
  );
}

export default Home;
