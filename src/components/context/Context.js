import React, { useContext, useReducer } from 'react';
import { createContext } from 'react';
import { cartReducer } from './Reducer';
import {productReducer} from './Reducer';

const Cart = createContext();

const Context = ({children}) => {

    /*GETTING 20 UNDEFINED ITEMS FROM ARRAY AND MAPPING
    THEM INTO A OBJECT WITH VALUES USING NPM FAKER LIBRARY*/

    const products  = [{id:1,name:"LED Monitor",price: 9000.00,image:"https://zentech.lk/wp-content/uploads/2020/12/Samsung-1.png",inStock:"yes",fastDelivery:true,ratings:4},
                       {id:2,name:"Leather Jacket",price:2000.00,image:"https://eadn-wc01-3207080.nxedge.io/cdn/media/catalog/product/cache/745225252d5a1e225be4203dd3828932/b/i/biker-men-red-quilted-leather-jacket-front.jpg.webp",inStock:"no",fastDelivery:true,ratings:3},
                       {id:3,name:"Surgical Masks",price:150.00,image:"https://amsp.africa/all_media/2021/04/6.jpg",inStock:"yes",fastDelivery:false,ratings:2},
                       {id:4,name:"Sports Waterbottle",price:4000.00,image:"https://www.insportline.eu/p77112/Sports-Water-Bottle-inSPORTline-BT70-700-ml.jpg",inStock:"no",fastDelivery:false,ratings:3},
                       {id:5,name:"Nike Backpack",price:10000.00,image:"https://m.media-amazon.com/images/I/81ZxYl4iK-L._AC_SL1500_.jpg",inStock:"yes",fastDelivery:true,ratings:4},
                       {id:6,name:"Razor Headphones",price:18000.00,image:"https://m.media-amazon.com/images/I/814WZ5eAFoL._AC_SL1500_.jpg",inStock:"yes",fastDelivery:true,ratings:5},
                       {id:7,name:"Recharble Fan",price:6000.00,image:"https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_500/https://supersavings.lk/wp-content/uploads/2019/08/fan-br-92rc.jpg",inStock:"no",fastDelivery:true,ratings:5},
                       {id:8,name:"Iphone xs",price:180000.00,image:"https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-xs-gold.png",inStock:"yes",fastDelivery:false,ratings:3},
                       {id:9,name:"Gaming Mouse",price:5000.00,image:"https://www.tradeinn.com/f/13806/138068783/razer-deathadder-pro-v2-wireless-gaming-mouse.jpg",inStock:"no",fastDelivery:false,ratings:2},
                       {id:10,name:"Gaming Console",price:180000.00,image:"https://i5.walmartimages.com/asr/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",inStock:"yes",fastDelivery:true,ratings:2}]

                       const[state,dispatch] = useReducer(cartReducer,{products:products,cart:[]});

                       const[productFilter,dispatchFilter] = useReducer(productReducer,
                        {
                        sort:"",
                        byStock:false,
                        byFastDelivery:false,
                        byRating:0,
                        searchQuery:"",})

    return ( <Cart.Provider value={{state,dispatch,productFilter,dispatchFilter}} >
        {children}
    </Cart.Provider>
);


}

export default Context;

export const CartState = () => {

    return useContext(Cart)

}