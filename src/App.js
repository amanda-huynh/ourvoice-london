import React from 'react';
import Map from './Map';
import ZS_Photo1 from './assets/ZS_Photo1.jpeg';
import ZS_Photo2 from './assets/ZS_Photo2.jpeg';
import ZS_Photo3 from './assets/ZS_Photo3.jpeg';
import ZS_Photo4 from './assets/ZS_Photo4.jpeg';
import ZS_Photo5 from './assets/ZS_Photo5.jpeg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 id="heading" tabindex="1">Our Voice London</h3>
      </header>
      <Map tabindex="2"/>
      <div id="photoOverview" tabindex="3">
        <img src={ZS_Photo1} tabindex="4" alt="ZS_Photo1" width="300px" height="300px" />
        <img src={ZS_Photo2} tabindex="5" alt="ZS_Photo2" width="300px" height="300px" />
        <img src={ZS_Photo3} tabindex="6" alt="ZS_Photo3" width="300px" height="300px" />
        <img src={ZS_Photo4} tabindex="7" alt="ZS_Photo4" width="300px" height="300px" />
        <img src={ZS_Photo5} tabindex="8" alt="ZS_Photo5" width="300px" height="300px" />
      </div>
    </div>
  );
}

export default App;
