import { useEffect, useState } from "react";
import axios from 'axios';
import { API_URL_SPORT } from "../constants/constants";
import { SportLocation } from "@features/sport-location";
import { SportMapFest } from "@features/sport-map-fest/SportMapFest";
import { SportTickets } from "@features/sport-tickets";
import { SportFaq } from "@features/sport-faq";
import { About } from "@widgets/about";
import { Banner } from "@widgets/banner";
import { Loading } from "@widgets/loading";

export default function SportFest() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [appState, setAppState] = useState();

  useEffect(() => {
    const apiUrl = API_URL_SPORT;

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
          <SportMapFest data={ appState.festSchedule } />
          <SportTickets data={ appState.weRide } />
          <SportLocation data={ appState.locations } />
          <SportFaq data={ appState.faq } />
        </>
      )}  
      
    </>
  )
}