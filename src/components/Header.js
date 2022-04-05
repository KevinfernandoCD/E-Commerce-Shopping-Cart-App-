import React, { useEffect } from 'react';
import { Badge, Button, Container, Dropdown, DropdownButton, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import NotificationBadge from 'react-notification-badge/lib/components/NotificationBadge';
import { Link } from 'react-router-dom';
import { CartState } from './context/Context';
import Rating from './Ratings';
import {AiFillDelete} from 'react-icons/ai';




const Header = () => {


   const {state:{cart},dispatch,productFilter:{searchQuery},dispatchFilter} = CartState();


  

    return (

    /*CREATING THE HEADER SECTION OF THE SITE*/
    <Navbar style={{marginTop:"10px"}}>

        {/*MAIN CONTAINER INSIDE HEADER*/}
        <Container style={{marginLeft:"300px"}}>

            {/*SITE HEADING AND BRANDLINE*/}
            <Container style={{backgroundColor:"white",width:"100%",display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <p style={{fontFamily:'Pacifico',fontSize:"35px"}}>Trendy.LK</p>
                <p style={{color:"grey",fontSize:"12px",marginTop:"-10px"}}>Sri Lanka's Biggest Shopping Site</p> 

                <Navbar.Text>
                    <FormControl onChange={(e) => dispatchFilter({type:"FILTER_BY_SEARCH",payload:e.target.value})}  className='searchBar' placeholder='Search for an item' style={{width:"350px",height:"33px",borderRadius:"20px",border:"none",textAlign:"center",fontSize:"13px",backgroundColor:"whitesmoke"}}/>
                </Navbar.Text>

                <Container style={{display:"flex",justifyContent:"center"}}>

                    <ul style={{display:"flex",marginLeft:"-65px",marginTop:"15px"}}>
                        <Link to="/" className='item'>Home</Link>
                        <Link to="/cart" className='item'>Cart</Link>
                        <Link to="/payments" className='item'>Payments</Link>
                        <Link to='/account' className='item'>Account</Link>
                    </ul>
                </Container>
            </Container>

        </Container>
        <Nav>   
<Dropdown  style={{marginRight:"240px"}}>
     <NotificationBadge style={{marginTop:"-59px",marginRight:"-5px"}} count={cart.length}></NotificationBadge>
    <Dropdown.Toggle variant='outline-secondary' style={{marginTop:"-140px",}}>
        <i className="fas fa-shopping-cart"></i>
    </Dropdown.Toggle>

    <Dropdown.Menu  style={{minWidth:300,marginTop:"-60px",display:"flex",flexDirection:"column"}}>
        {cart && cart.length !== 0? cart.map(c =>  (<Dropdown.Item><div style={{paddingTop:"10px",paddingBottom:"20px",borderBottom: cart.length > 1? "1px solid grey":"none"}}>
        <div style={{display:"flex"}}><div style={{padding:"10px",borderRadius:"50%",marginLeft:"10px"}}><img style={{width:"30px"}} src={c.image}/></div> <div style={{display:"flex",flexDirection:"column"}}>
        <p style={{marginLeft:"10px",color:"black",fontWeight:"500",marginTop:"5px"}}>{c.name}</p><p style={{marginTop:"-20px",marginLeft:"10px",fontSize:"15px",color:"grey"}}>{`LKR.${c.price}`}</p><div style={{display:"flex",marginTop:"-15px",marginLeft:"10px",fontSize:"10px"}}><Rating rating={c.ratings}/></div> 
        </div>  <AiFillDelete onClick={() => dispatch({type:"REMOVE_FROM_CART",payload:c})} style={{marginLeft:"30px",marginTop:"20px"}}/></div>
      </div></Dropdown.Item>)): <Dropdown.Item><span style={{padding:10,textAlign:"center",display:"flex",justifyContent:"center",fontWeight:"500"}}>There Are No Items In The Cart</span></Dropdown.Item>}
    {cart.length !== 0?<Link to='/cart'><Button style={{width:"100%"}}>Go to cart</Button></Link>:null}
    </Dropdown.Menu>
</Dropdown>
</Nav>
</Navbar>   
 );
}
 
export default Header;