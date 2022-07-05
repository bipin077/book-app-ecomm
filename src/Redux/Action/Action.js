export const updateCartItem =(book)=>{
    return {
        type:'UPDATE_CART_ITEM',
        payload:book
    }
}

export const remove_cart_item=(id)=>
{
    return {
        type:'REMOVE_CART_ITEM',
        payload:id
    }
}