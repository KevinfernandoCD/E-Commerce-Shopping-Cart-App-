import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { CartState } from './context/Context';
import Rating from './Ratings';
import './style.css';

const FilterBar = () => {

    const {productFilter:{byStock,byFastDelivery,byRating,searchQuery,sort},dispatchFilter} = CartState();

    console.log(byStock,byFastDelivery,byRating,searchQuery,sort);



    return ( 

        <div className='filters' style={{padding:"20px",backgroundColor:"whitesmoke",marginLeft:"20px",borderRadius:"10px",marginTop:"60px"}}>

            <span className='title' style={{fontWeight:"500",fontSize:"22px",color:"black"}}>Search Products</span>

            <span>
                <Form.Check
                onClick={() => dispatchFilter({type:"SORT_BY_PRICE",payload:"lowToHigh"})}
                inline
                label="Ascending"
                name="group1"
                type="radio"
                id={`inline-1`}
                />
                
            </span>
           
            <span>
           <Form.Check
             onClick={() => dispatchFilter({type:"SORT_BY_PRICE",payload:"hightToLow"})}
           inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            />
            </span>

             <span>
           <Form.Check
            inline
            onClick={() => dispatchFilter({type:"SORT_BY_STOCK"})}
            label="Out of Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            />
            </span>

            <span>
           <Form.Check
            onClick={() => dispatchFilter({type:"FILTER_BY_DELIVERY"})}
            inline
            label="Fast Delivery"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            />
            </span>

            <span>
                <label style={{paddingRight:10}}>Ratings:</label>
                <Rating rating={byRating} settingRate={(i) => dispatchFilter({type:"FILTER_BY_RATINGS",payload:i+1})} style={{cursor:"pointer"}}/>
            </span>
            <Button onClick={() => dispatchFilter({type:"RESET"})} className='btn btn-primary' style={{fontWeight:"500"}}>Remove Filters</Button>
        </div>
     );
}
 
export default FilterBar;