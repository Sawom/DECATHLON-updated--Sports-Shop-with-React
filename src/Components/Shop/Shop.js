import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [display, setDisplay] = useState([]);
    useEffect(()=>{
        fetch('dataitems.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplay(data);
        } )
    }, [] )
    // add to cart
    const addtocart = (product)=>{
        const newcart =  [...cart,product];
        setCart(newcart);
    }
    // searching function
    const handleSearch = (event)=>{
        const search = event.target.value;
        const matched = products.filter((product)=> product.name
        .toLowerCase().includes(search.toLowerCase()) );
        setDisplay(matched);
    } 
    return (
        <div>
            <div className='searchPosition' >
                <br />
                <h2 className='text' >We take order maximum budget 12,000 taka for online.</h2>
                <input onChange={handleSearch} placeholder=' Search item here  ' type="text" />
                <br /><br />
            </div>

            <Row xs={2} sm={2} md={2} lg={2} className='shop' >
                <Row xs={1} sm={1} md={2} lg={3} className="g-4 product">
                    {
                        display.map((product)=> <Product
                            key={product.key}
                            product={product}
                            addtocart={addtocart}
                        ></Product> )
                    }
                </Row>
                <div className='cart' >
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </Row>
        </div> 
    );
};

export default Shop;