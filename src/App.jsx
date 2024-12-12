import { Routes, Route } from "react-router";

import Main from "./pages/Main";
import MusicFest from "./pages/MusicFest";
import SportFest from "./pages/SportFest";
import UIKit from "./pages/UIKit";

import { Layout } from "@widgets/layout";

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/music" element={<MusicFest />} />
          <Route path="/sport" element={<SportFest />} />
          <Route path="/ui-kit" element={<UIKit />} />
        </Routes>
      </Layout>      
    </>
  )
}

export default App
