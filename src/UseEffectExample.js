import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UseEffectExample = ()=>{
    const[users, setUsers] = useState([]);

    const getUsers = () =>{
        const response = axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((response) =>{
            console.log(response);
            setUsers(response.data);
        })
    }

    useEffect(()=>{
        getUsers()},[])

    return(
        <div className='users'>
            <h2 className='heading'>Data from API</h2>
            <div className='row bg-dark'>{
                users.map((data)=>{
                    return(
                        <div classname='col-12 col-md-4 col-sm-6 mt-3 cards'>
                        <div className="card mr-3 ml-2">
                        <img src={data.url} className="card-img-top rounded image" width="300px" height="200px"/>
                        <div className="card-body bg-dark">
                            <div className="card-title">
                            <p className="card-name">{data.id}</p>
                            </div>
                            <div className="card-text">
                            <p className="card-desc">{data.title}</p>
                            </div>
                        </div>
                        <div className='Button bg-dark'>
                            <p className="link">See More</p>
                            <p className="link2">{data.title}</p>    
                        </div>                        
                        </div>
                        </div>
                    )
                })
            }</div>
        </div>
    )
}
export default UseEffectExample;