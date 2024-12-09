/*REACT*/
// import * as React from "react";
import { Routes, Route } from "react-router";


/*PAGES*/
import IndexPage from "./pages/IndexPage";
import MusicFestPage from "./pages/MusicFestPage";
import SportFestPage from "./pages/SportFestPage";
import UIKit from "./pages/UIKit";

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/music" element={<MusicFestPage />} />
          <Route path="/sport" element={<SportFestPage />} />
          <Route path="/ui-kit" element={<UIKit />} />
        </Routes>
      </div>      
    </>
  )
}

export default App
