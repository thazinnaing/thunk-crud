import {addProducts} from "../actions/Actions"

const initialState = {
    products: [],
}

export const ProductsReducer= (state=initialState, action)=>{

    switch(action.type){
        case addProducts:{
            return{
                products: [...state?.products,action?.payload]
            }
        }
    }
}