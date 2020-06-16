import React, { useState } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Main from './Components/Main/Main';
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
  const [state, setState] = useState({
    activeTab: '',
    main_content_z: -1
  });
  const { height, width } = useWindowDimensions();
  const onRightTabOpen = () => {
    setState({activeTab: 'RIGHT', main_content_z: -1});
  }
  const onRightTabClose = () => {
    setState({main_content_z: 1});
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
      <Main contentZ={state.main_content_z}/>
      <RightTab 
        activeTab={state.activeTab} 
        onOpen={onRightTabOpen}
        onClose={onRightTabClose}
      />
      <BottomTab 
        activeTab={state.activeTab}
        onOpen={onBottomTabOpen}
      />
    </div>
  );
}


export default App;
