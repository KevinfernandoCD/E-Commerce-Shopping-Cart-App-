export const cartReducer = (state,action) => {

    switch(action.type){

        case "ADD_TO_CART":

        localStorage.setItem("cart",JSON.stringify([...state.cart,{...action.payload,qty:1}]));

        return{...state,cart:[...state.cart,{...action.payload,qty:1}]} 

        case "REMOVE_FROM_CART":

        const cart = JSON.parse(localStorage.getItem("cart"));

        const Index = cart.indexOf(c => c.id === action.payload.id)

        cart.splice(Index,1)

        localStorage.setItem("cart",JSON.stringify(cart));

        return{...state,cart:state.cart.filter(c => c.id !== action.payload.id),}


case "QTY_CHANGE":

const changingCart = JSON.parse(localStorage.getItem("cart"));

const UpdatingItem = changingCart.find(c => c.id === action.payload.id);

const Updated = UpdatingItem.qty = action.payload.qty;

localStorage.setItem("cart",JSON.stringify(changingCart));

    return{...state,cart:state.cart.filter(c => c.id === action.payload.id?c.qty = action.payload.qty:c.qty)}
         default:
        return state
    }

}

export const productReducer =(state,action) => {

switch(action.type){

    case "SORT_BY_PRICE":
        return{...state,sort:action.payload}

        case "SORT_BY_STOCK":
            return{...state,byStock:!state.byStock}

            case "FILTER_BY_DELIVERY":
                return {...state,byFastDelivery:!state.byFastDelivery}

                case "FILTER_BY_RATINGS":
                    return {...state,byRating:action.payload}

                    case "FILTER_BY_SEARCH":
                        return {...state,searchQuery:action.payload}

                        case "RESET":
                            return {sort:"",
                        byStock:false,
                        byFastDelivery:false,
                        byRating:0,
                        searchQuery:"",}
            
                        default:
                             return state

                            }


}