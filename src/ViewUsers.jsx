import axios from "axios";
import { useState,useEffect } from "react";

export default function ChargingStations() {
   
    let [users, setUsers] = useState([]);
    const [user,setUser] =useState("");

    

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    
    axios
      .get("http://localhost:8090/users")
      .then(response => setUsers(response.data));
      
  }, []);

  function deleteUser(id)
  {
        
        axios 
        . delete("http://localhost:8090/user/"+id)
        .then(response =>  window.location.reload(),alert("User deleted successfully"));
        
             
  }
  function editUser(val)
  {
    alert(val);
  }
  return (


    
    <div >
        <div class="container">
                                                                                  
  <div class="table-responsive">          
  <table class="table table-hover">
    <thead>
      <tr >
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th ></th>
        <th ></th>
       
      </tr>
    </thead>

            {users.map(user => (
                    


    <tbody>
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <td><button className="btn btn-success" onClick={() => editUser(user.id)}>Edit</button></td>
        <td><button className="btn btn-success" onClick={() => deleteUser(user.id)}>Delete</button></td>
        
      </tr>
    </tbody>
   
                ))}
                </table></div></div>
      
    </div>
  );
  
    
  }