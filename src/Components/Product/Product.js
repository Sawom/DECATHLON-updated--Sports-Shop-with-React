import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Col,Card,Button } from 'react-bootstrap';
import './Product.css';
const Product = (props) => {
    const{name,img,color,madein,price,stock} = props.product;
    // console.log(props.product)
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <Col>
            <Card className='cardStyles'  >
            <Card.Title className='clr' >{name}</Card.Title>
            <Card.Img height='200px' variant="top" src={img} />
                <Card.Body>
                    <h6>Color: {color} </h6>
                    <h6>Made in: {madein} </h6>
                    <h6>Price: {price} Taka</h6>
                    <h6>Only {stock} products remain</h6>
                    <Button onClick={()=> props.addtocart(props.product) } className='btn'  variant="primary"> {element} Add to cart </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};
export default Product;