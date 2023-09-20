import React, {useState} from 'react';

const StateExample2 = () => {
    const[myName, setMyName] = useState('Deepika');

    const changeName = () =>{
        let val = myName;
        if(val==='Deepika'){
            setMyName("Abc")
        }else{
            setMyName('Deepika')
        }
    }
    console.log(myName);
    return(<div>
        <h1>{myName}</h1>
        <button className="btn btn-primary" onClick={changeName}>Click me</button>      
    </div>
    )
}
export default StateExample2;