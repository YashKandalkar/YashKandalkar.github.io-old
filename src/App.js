import React, { useState } from 'react';
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
  const [state, setState] = useState({activeTab: ''});
  const { height, width } = useWindowDimensions();
  const onRightTabOpen = () => {
    setState({activeTab: 'RIGHT'})
  }
  const onBottomTabOpen = () => {
    setState({activeTab: 'BOTTOM'})
  }
  return (
    <div className="App">
      <Particles 
        className='particles'
        params={particlesOptions}
        width={width}
        height={height}
      />
      <RightTab 
        activeTab={state.activeTab} 
        onOpen={onRightTabOpen}
      />
      <BottomTab 
        activeTab={state.activeTab}
        onOpen={onBottomTabOpen}
      />
    </div>
  );
}


export default App;
