import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from './components/NasaPhoto';

const dummyData = {
  date: "2022-04-20",
  explanation: "There's an interesting sky to see if you wake up before the Sun. Lined up on toward the eastern horizon are four planets in a row. The planets are so bright they can even be seen from the bright sky inside a city. In fact, the featured image was taken from New York City, USA, with the foreground highlighted by the RFK (Triborough) Bridge. Pictured, the planets are, left to right, Jupiter, Venus, Mars, and Saturn.  The planets all appear in a row because they all orbit the Sun in the same plane. This plane, called the ecliptic plane, was created in the early days of our Solar System and includes all planets, including Earth.  The morning planet parade will continue throughout April and May, and will even be joined by Mercury in June.   APOD volunteer programming opportunity: Discord",
  hdurl: "https://apod.nasa.gov/apod/image/2204/PlanetBridge_Honda_3000.jpg",
  title: "Planet Line over New York Bridge"
}

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res);
      setData(res.data)
    })
    .catch(err => console.error(err))
  }, [])
  
  return (
    <div className="App">
     {data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;
/**
 
date: "2022-04-20"
explanation: "There's an interesting sky to see if you wake up before the Sun. Lined up on toward the eastern horizon are four planets in a row. The planets are so bright they can even be seen from the bright sky inside a city. In fact, the featured image was taken from New York City, USA, with the foreground highlighted by the RFK (Triborough) Bridge. Pictured, the planets are, left to right, Jupiter, Venus, Mars, and Saturn.  The planets all appear in a row because they all orbit the Sun in the same plane. This plane, called the ecliptic plane, was created in the early days of our Solar System and includes all planets, including Earth.  The morning planet parade will continue throughout April and May, and will even be joined by Mercury in June.   APOD volunteer programming opportunity: Discord"
hdurl: "https://apod.nasa.gov/apod/image/2204/PlanetBridge_Honda_3000.jpg"
title: "Planet Line over New York Bridge"
 */
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY