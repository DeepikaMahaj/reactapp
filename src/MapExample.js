import React from 'react';
import DATA from './Data';

const MapExample = () =>{
    const newList=['item1','item2','item3']
    const dataItems=(item)=>{

        return(
            <div>
                <div> Item id: {item.id} Item title:{item.title} Item price:{item.price}</div>                
            </div>
        )
    }
    return(
        <div>
            <h2>Product List</h2>
            <div>{DATA.map(dataItems)}       
            </div>
            <div>My List: {newList}</div>
        </div>
    )
}
export default MapExample