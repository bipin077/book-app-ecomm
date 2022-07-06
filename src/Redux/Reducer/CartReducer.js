<<<<<<< HEAD
let initialState=0;
const addToCart=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "ADDTOCART":
            return state=state+action.payload;
=======
const initialState={ 
    cart: [],
    totalItems:0,
    totalPrice:0
}
const addToCart=(state =initialState ,action)=>
{
    switch(action.type)
    {
        case 'UPDATE_CART_ITEM':
            const item = action.payload;
            if(state.totalItems>0)
            {
                const index = state.cart.findIndex(it => it.id === item.id);
>>>>>>> 9c131f6b0a5714f98d0ee501e294a8dd1cad7f51

                const newItems = [...state.cart];
                if(index!==-1)
                {
                    newItems[index]=item;
                    return { ...state, cart: newItems };
                } else {
                    newItems.push({ ...item });
                }
                state.totalItems=state.cart.length+1;
                state.totalPrice=parseInt(state.totalPrice)+parseInt(item.price);
                
                return { ...state, cart: newItems };
            }
            else{
                state.cart.push(item);
                state.totalItems=1;
                state.totalPrice=item.price;
            }

            return state;
        
             
        case 'REMOVE_CART_ITEM':
            const id=action.payload;
            const newItems = state.cart.filter(it => it.id !== id);
            state.totalItems=state.totalItems-1;
            return { ...state, cart: newItems };
            
        default:
            return state;
    }
}

export default addToCart;