import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { CartState } from './context/Context';
import Rating from './Ratings';
import './style.css';

const Product = ({productDetails}) => {

    const {state:{cart},dispatch}= CartState();

    return ( <div className='products'>

        <Card className="card" style={{padding:"20px",borderRadius:"10px",maxHeight:"600px",marginTop:"40px",}}>
            <Card.Img style={{width:"150px"}} variant='top' src={productDetails.image} alt={productDetails.name}/>
            <Card.Body>
                <Card.Title>
                    {productDetails.name}
                </Card.Title>
                <Card.Subtitle style={{paddingBottom:10}}>
   
                   <span>{`LKR.${productDetails.price}`}</span>

                   {productDetails.fastDelivery? (<div style={{color:"green"}}> Deleivery : Fast Delivery Available</div>):(<div> Delivery : 3-4 Working Days</div>)}

                   <Rating rating={productDetails.ratings}/> <br/>

                   {cart.some(item => item.id === productDetails.id)? (<Button onClick={() => dispatch({type:"REMOVE_FROM_CART",payload:productDetails})} style={{marginTop:"15px"}} variant="danger">Remove from cart</Button>):
                   ( <Button onClick={() => dispatch({type:"ADD_TO_CART",payload:productDetails})} disabled={productDetails.inStock == "no"} style={{marginTop:"15px"}} variant="primary">{productDetails.inStock == "yes"? "Add to cart":"Out of Stock"}</Button>)}         
                </Card.Subtitle>
            </Card.Body>
        </Card>

    </div> );
}
 
export default Product;