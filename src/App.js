import React, { useState } from "react";
import FrameComponent1 from "./pages/FrameComponent1";
import { useMediaQuery } from 'react-responsive'
import "./App.css"
import Select from 'react-select'


function App() {

  const [cartIsShown, setCartIsShown] = useState(true);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 700 })
  // const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isMobile = useMediaQuery({ maxWidth: 700 })
  const closeModal = () => {
    setCartIsShown(false);
  };
  const openModal = () => {
    setCartIsShown(true);
  };
  return (
    <div className="App">
      <Select options={options} />
      <FrameComponent1 />
    </div>

  );
}
export default App;
