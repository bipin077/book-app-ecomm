let initialState=0;
const addToCart=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "ADDTOCART":
            return state=state+action.payload;

        default: return state;
    }
}