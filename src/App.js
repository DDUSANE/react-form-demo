import './App.css';
import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ChargingStations from './ChargingStations';
import ViewStationList from './viewStationList';
function App() {
  return (
    <div className="App">
     <div className="container"> <ChargingStations/> </div>
     
    <ViewStationList/>
    </div>
  );

  
  
}

export default App;
