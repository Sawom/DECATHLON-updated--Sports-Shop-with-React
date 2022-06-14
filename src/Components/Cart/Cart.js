import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    let total1 = total.toFixed(2);
    const tax = total*.02;
    const tax1 = tax.toFixed(2);
    const delivery = total*.04;
    const delivery1 = delivery.toFixed(2);
    const grand = total+tax+delivery; 
    const grand1 = grand.toFixed(2);
    return (
        <div>
            <h5 className='textColor' > Order Summary:</h5>
            <h6>Total product: {props.cart.length} </h6>
            <h6>Product price: {total1} Taka </h6>
            <h6>Tax (2%): {tax1} Taka </h6>
            <h6> Delivery charge (4%) : {delivery1} Taka </h6>
            <h6> Grand Total : {grand1} Taka </h6>
        </div>
    );
};

export default Cart;