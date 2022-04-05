import React, { useEffect } from 'react';
import { CartState } from './context/Context';
import FilterBar from './FilterBar';
import Product from './ProductCard';
import './style.css';

 let cartHistory

const Home = () => {

    useEffect(() => {

        const usercart = JSON.parse(localStorage.getItem("cart"));

        cartHistory = usercart

    },[])

    const {state:{products,cart},dispatch,productFilter:{byStock,byFastDelivery,byRating,searchQuery,sort},dispatchFilter} = CartState();

    const Filtering = () => {

    let FilteredProducts = products


    if(sort !== ""){

        if(sort === "lowToHigh"){

            FilteredProducts.sort((a,b) => (a.price - b.price));

        }else{

               FilteredProducts.sort((a,b) => (b.price - a.price));
        }
    }

    if(byStock == true){

     FilteredProducts =  FilteredProducts.filter((c) => c.inStock == "no");

    }
    if(byFastDelivery == true){

     FilteredProducts =  FilteredProducts.filter((c) => c.fastDelivery == true);

    }

    if(searchQuery !== ""){

        FilteredProducts =  FilteredProducts.filter((c) => c.name.toLowerCase().includes(searchQuery));

    }

    if(byRating !== 0){

        FilteredProducts =  FilteredProducts.filter((c) => c.ratings == byRating);

    }


    return FilteredProducts;

    }
    
    return (<div className='home'>

        <FilterBar/>

        <div className='productPage'>

            {Filtering().map(product => { return <Product key={product.id} productDetails={product}/>})}

        </div>
    </div> );
}
 
export default Home;