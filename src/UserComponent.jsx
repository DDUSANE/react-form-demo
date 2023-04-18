import { Component } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

export default function UserComponent ()
{

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");

    
    const sendToApi = (event) =>{
   
    event.preventDefault();
    axios({  
        url: "http://localhost:8090/user",  
        method: "POST",  
        header: {    
          "Content-Type": "application/json",  
        },  
        data: { 
            name: name, 
          email:email, 
          mobile: mobile 
        },
      }).then("").catch((error) => console.log(error));;
      window.location.reload();
  };
    return(
        <div className="UserComponent form-control">
            <form  onSubmit={sendToApi}>
       
            <table className="container-fluid">
                <tr className="">
                <td > <input className="form-control"  type="text" placeholder="name" value={name} onChange={(e)=>(setName(e.target.value))} required/>
        </td>
                <td ><input className="form-control"  type="text" placeholder="email" value={email} onChange={(e)=>(setEmail(e.target.value))} required/>
        </td>
                <td > <input className="form-control" type="text" placeholder="mobile" value={mobile} onChange={(e)=>(setMobile(e.target.value))} required/>
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