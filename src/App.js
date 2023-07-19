import React, { useState } from "react";
import FrameComponent1 from "./pages/FrameComponent1";
import { useMediaQuery } from 'react-responsive'
import "./App.css"
import Select from 'react-select'



function App() {



  const isDesktopOrLaptop = useMediaQuery({ minWidth: 700 })
  // const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isMobile = useMediaQuery({ maxWidth: 700 })

  return (
    <div className="App">

      <FrameComponent1 />
    </div>

  );
}
export default App;
