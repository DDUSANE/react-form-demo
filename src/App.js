import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserComponent from './UserComponent';
import ViewUsers from './ViewUsers';
import ChargingStations from './ChargingStations';
import ViewStationList from './viewStationList';
function App() {
  
 
  return (
    <div className="App">
     <UserComponent/>
     <ViewUsers/>

     <div className="container "> <ChargingStations/> </div>
     
    <ViewStationList/>
    </div>
  );

  
  
}

export default App;
