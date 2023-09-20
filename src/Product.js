import React from 'react';
import DATA from "./Data";

const Product=()=>{
    const cardItem = (item) =>{
        return(
            
            <div class="card my-5 py-4 bg-dark" key={item.id} style={{width:"30%"}}>
                <img src={item.img} class="card-img-top" alt={item.title} />
                <div class="card-body text-center">
                <h5 class="card-title">{item.title}</h5>
                <p class="lead">${item.price}</p>                    
                </div>
            </div>
        );
    }
    return (
        <div>
            <div className="container py-5">
            <div className="row">
            <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
            </div>
            </div>
            <div className="container">
            <div className="row justify-content-around">
                        {DATA.map(cardItem)}
              </div>
              </div>
              </div>
        </div>
    );
}
export default Product;
