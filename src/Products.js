import React from 'react'
import Shoes from './shoes.json';
import {Link} from 'react-router-dom';
function Products() {

    return (

        <div className="App">
            <h1>Welcome to Products</h1>
            <div className="products">
            {Object.keys(Shoes).map(keyName => {
                const shoe = Shoes[keyName];
                return (<Link key={keyName} to={`/products/${keyName}`} className="productStyling">
                    
                    <h4>{shoe.name}</h4>
                    <img src={shoe.img} height={200}></img>
                    
                </Link>
                
                )
            })}

        </div>
        </div>
    )

        }
export default Products
