import React from 'react';
import DeviceDescription from './DeviceDescription';
import './description.css';


function Description() {
  return (
    <div className="app">
      <h1>Tv's & Audios</h1>
      <div className="card">
        <img src=".\src\assets\tv\1 (1).jpg" alt="Device" className="device-image" />
        <DeviceDescription
          name="Smartphone X"
          price={399.99}
          discount={10}
          ratings={4.5}
        />
      </div>
      <div className="card">
        <img src=".\src\assets\tv\1 (2).jpg" alt="Device" className="device-image" />
        <DeviceDescription
          name="Smartphone X"
          price={399.99}
          discount={10}
          ratings={4.5}
        />
      </div>
    </div>
  );
}

export default Description;

