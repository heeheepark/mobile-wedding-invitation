import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useRef, useState } from "react";

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
import backgroundMusic from "../assets/music/The_Beauty_of_Love.mp3";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error(error);
    }
  };

  const pauseMusic = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlayPause = async () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      await playMusic();
    }
  };

  useEffect(() => {
    const startMusic = async () => {
      if (audioRef.current && audioRef.current.paused) {
        await playMusic();
      }
    };

    document.addEventListener("touchstart", startMusic, { once: true });
    document.addEventListener("click", startMusic, { once: true });

    return () => {
      document.removeEventListener("touchstart", startMusic);
      document.removeEventListener("click", startMusic);
    };
  }, []);

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
