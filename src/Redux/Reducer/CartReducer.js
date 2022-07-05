let initialState=[];
const addToCart=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "ADDTOCART":
            return state.push(action.payload);

        default: return state;
    }
}