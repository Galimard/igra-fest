import { Routes, Route, useLocation } from "react-router";
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import Main from "./pages/Main";
import MusicFest from "./pages/MusicFest";
import SportFest from "./pages/SportFest";
import UIKit from "./pages/UIKit";
import { Layout } from "@widgets/layout";

function App() {
  let location = useLocation();
  
  const menuMusic = [
    {text: 'О фестивале', url: 'about'}, 
    {text: 'Line-up', url: 'lineup'}, 
    {text: 'Билеты', url: 'tickets'}, 
    {text: 'дресс-код', url: 'dresscode'}
  ];

  const menuSport = [
    {text: 'О фестивале', url: 'about'}, 
    {text: 'карта феста', url: 'map-fest'}, 
    {text: 'катаем', url: 'tickets'}, 
    {text: 'локации', url: 'locations'}
  ];

  const menu = location.pathname === '/music' ? menuMusic : menuSport;

  return (
    <>
      <ParallaxProvider>
        <ScrollToHashElement behavior="smooth" inline="center" block="center" />
        <Layout menu={ menu }>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/music" element={<MusicFest />} />
            <Route path="/sport" element={<SportFest />} />
            <Route path="/ui-kit" element={<UIKit />} />
          </Routes>
        </Layout>  
      </ParallaxProvider>    
    </>
  )
}

export default App
