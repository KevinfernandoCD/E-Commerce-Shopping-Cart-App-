import React, { useEffect, useState } from 'react';
import { Button, Col, Form, ListGroup, Row,Image } from 'react-bootstrap';
import { CartState } from './context/Context';
import Rating from './Ratings';
import './style.css';
import {AiFillDelete} from 'react-icons/ai';



const Cart = () => {

    const {state:{cart},dispatch} = CartState();
    const [total,setTotal] = useState(0);



    useEffect(() => {

        //  USING THE JS REDCER METHOD TO COUNT THE TOTAL
        setTotal(cart?.reduce((acc,curr) => acc + Number(curr.price) * curr.qty,0));

    },[cart])



    return ( 
 <div className='home'>
    <div className='productPage'>
    <ListGroup>
        {cart && cart.length !== 0? cart.map(c =>  (<ListGroup.Item style={{padding:"50px",display:"flex",justifyContent:"center",alignItems:"center"}} key={c.id}>
        <Row>
        <Col><Image style={{width:"50px"}} src={c.image}/></Col>
        <Col md={2}><span style={{fontWeight:"500"}}>{c.name}</span></Col>
        <Col md={2}><span style={{marginLeft:"10px"}}> LKR.{c.price}.00</span></Col>
        <Col md={2}><span style={{marginLeft:"30px",display:"flex"}}><Rating rating={c.ratings}/></span></Col>
        <Col md={2}><Form.Control onChange={(e) => dispatch({type:"QTY_CHANGE",payload:{id:c.id,qty:e.target.value}})} style={{marginLeft:"40px",padding:"10px",borderRadius:"10px",border:"none",backgroundColor:"whitesmoke"}} as="select" value={c.qty} >

            {[...Array(5)].map((_,i) => {

                 return <option key={i}>{i + 1}</option>

            })}
            </Form.Control>
            </Col>
            <Col><span onClick={() => dispatch({type:"REMOVE_FROM_CART",payload:c})} style={{marginLeft:"50px",cursor:"pointer"}}><AiFillDelete/></span></Col>
        </Row></ListGroup.Item>)):(<p style={{fontSize:"20px",position:"absolute",top:"50%"}}>There are no items in the cart</p>)}
    </ListGroup>
    </div>
    <div className='productSummary summary'>
        <ol style={{marginLeft:"-25px",fontSize:"15px",color:"black"}}>
            {cart?.map(c => (<li>{`${c.name} : ${c.price} x ${c.qty}`}</li>))}

        </ol>
        <span className='title' style={{fontWeight:"500"}}>Subtotal ({cart.length}) items</span>
        <span style={{fontWeight:700,fontSiaze:20}}> Current Total : LKR {total}.00</span>
        <Button style={{marginTop:"10px"}} type="button" disabled={cart.length === 0}>
            Proceed to Checkout
        </Button>
    </div>
</div>

     );

};
 
export default Cart;