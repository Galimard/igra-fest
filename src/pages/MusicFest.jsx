import { useEffect, useState } from "react";
import axios from 'axios';
import { MusicDresscode } from "@features/music-dresscode";
import { MusicPartners } from "@features/music-partners";
import { MusicTickets } from "@features/music-tickets";
import { About } from "@widgets/about";
import { Banner } from "@widgets/banner";
import { MusicLineUp } from "@features/music-line-up";
import { API_URL_MUSIC } from "../constants/constants";
import { Loading } from "@widgets/loading";

export default function MusicFest() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [appState, setAppState] = useState();

  useEffect(() => {
    const apiUrl = API_URL_MUSIC;

    axios.get(apiUrl)
      .then(function (response) {
        setIsLoaded(true);
        setAppState(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setAppState]);

  return (
    <>    
      {!isLoaded ? <Loading /> : (
        <>
          <Banner data={ appState.runnigLine } />
          <About data={ appState.about } />
          <MusicLineUp data={ appState.lineUp } />
          <MusicTickets data={ appState.tickets } />
          <MusicDresscode data={ appState.dresscode } />
          <MusicPartners data={ appState.partners } />
        </>
      )}      
    </>
  )
}