import { Component } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

 export default function ChargingStations ()
{

    const [stationId,setStationId] = useState("");
    const [stationName,setStationName] = useState("");
    const [stationImage,setStationImage] = useState("");
    const [stationPricing,setStationPricing] = useState("");
    const [stationAddress,setStationAddress] = useState("");
    

    
    const sendToApi = (event) =>{
        // station_id
        // station_name
        // station_image
        // station_pricing
        // station_address
    event.preventDefault();
    axios({  
        url: "http://localhost:8090/add",  
        method: "POST",  
        header: {    
          "Content-Type": "application/json",  
        },  
        data: { 
            stationId: stationId, 
            stationName:stationName, 
            stationImage: stationImage ,
            stationPricing:stationPricing,
             stationAddress:stationAddress
        },
      }).then("").catch((error) => console.log(error));;
      window.location.reload();
  };
    return(
        <div className="ChargingStations form-control">
            <form  onSubmit={sendToApi}>
       
            <table className="container-fluid table-responsive">
                <tr className="">
                <td > <input className="form-control"  type="text" placeholder="Name" value={stationName} onChange={(e)=>(setStationName(e.target.value))} required/>
        </td>
                
                <td > <input className="form-control" type="text" placeholder="Price" value={stationPricing} onChange={(e)=>(setStationPricing(e.target.value))} required/>
       </td>
       <td ><img className="form-control"  src={stationImage}  />
        </td>
        <td > <input className="form-control" type="text" placeholder="Address" value={stationAddress} onChange={(e)=>(setStationAddress(e.target.value))} required/>
       </td>
       <td><input   className="btn btn-success" type="submit"  value="save"/>
      </td>
                </tr>

            
        
      </table>
      </form>
     
      <br/>

      
      </div>
    );

}

