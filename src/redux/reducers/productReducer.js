import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
            id: 1,
            title: "Lucka",
            category: "programmer"
        }
    ]
}

const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state    
        default:
            return state 
    }
}

export default productReducer