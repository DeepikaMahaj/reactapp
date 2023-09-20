import React,{useState, useEffect} from 'react';
import axios from 'axios';

const File = () => {
    const [users, setUsers] = useState([]);
    const getUsers = () => {
        const response = axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
         
            console.log(response);
            setUsers(response.data);
          });
        
      };
    
      useEffect(() => {
        getUsers();
      }, []);
    return(
        <div className="users">
    <h2 className="heading">Data From API</h2>
    <div className="row">
     {
         users.map((Data)=> {
             return(
<div className="col-12 col-md-4 col-sm-6 mt-3 cards">
<div className="card mr-3 ml-2">
<img src={Data.image_url} className="card-img-top rounded image" width="300px" height="200px"/>
<div className="card-body">
<div className="card-title">
<p className="card-name">{Data.name}</p>
</div>
<div className="card-text">
<p className="card-desc">{Data.description}</p>
</div>
</div>
<div className="Button">
<p className="link">See More</p>
<p className="link2">{Data.id}</p>
</div>
</div>
     </div>
             
             
             )
         })
     }
    </div>
    </div>
    )
}
export default File;