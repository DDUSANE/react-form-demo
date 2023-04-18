import axios from "axios";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState,useEffect } from "react";

export default function ViewStationList() {
   
    let [stations, setStations] = useState([]);
    const [station,setStation] =useState("");

    

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    
    axios
      .get("http://localhost:8090/show")
      .then(response => setStations(response.data));
      
  }, []);

  function deleteStation(id)
  {
   
        axios 
        . delete("http://localhost:8090/delete/"+id)
        .then(response =>  window.location.reload(),alert("station record deleted successfully"));
        
             
  }
  function editStation(val)
  {
    alert(val);
  }
  return (

 // station_id
        // station_name
        // station_image
        // station_pricing
        // station_address
    
    <div className="ViewStationList">
        
        <div className="container">
       <button className="btn btn-success" onClick={() => window.prompt()}>+</button>

        
                                                                                  
  <div className="table-responsive">          
  <table className="table table-condensed">
    <thead>
      <tr >
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>Address</th>
        <th >img</th>
        <th ></th>
        <th ></th>
       
      </tr>
    </thead>

            {stations.map(station => (
                    


    <tbody>
      <tr>
        <td>{station.stationId}</td>
        <td>{station.stationName}</td>
        <td>{station.stationPricing}</td>
        <td>{station.stationAddress}</td>
        <td><img className="App-logo" src={station.stationImage}/></td>
        <td><button className="btn btn-success" onClick={() => editStation(station.stationId)}>Edit</button></td>
        <td><button className="btn btn-success" onClick={() => deleteStation(station.stationId)}>Delete</button></td>
        
      </tr>
    </tbody>
   
                ))}
                </table></div></div>
      
    </div>
  );
  
    
  }