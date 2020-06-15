import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import RightTab from './Components/RightTab/RightTab';
import BottomTab from './Components/BottomTab/BottomTab';
import useWindowDimensions from './Components/useWindowDimentions';


const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true
      }
    }
  }
}

const App = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div className="App">
      <Particles 
        className='particles'
        params={particlesOptions}
        width={width}
        height={height}
      />
      <RightTab />
      <BottomTab />
    </div>
  );
}


export default App;
