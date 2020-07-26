import React from 'react'
import { useParams } from 'react-router-dom'
import Shoes from './shoes.json';
const ProductDetails = () => {
    const { productid } = useParams();
    if(!Shoes[productid]){
        return(
            <h3>Product Not Found</h3>
        )
    }
    console.log(Shoes[productid].img);
    return (
        <div className="App">
            <h3>{Shoes[productid].name}</h3>
            <img src={Shoes[productid].img}></img>
            
        </div>
    )

}

export default ProductDetails
