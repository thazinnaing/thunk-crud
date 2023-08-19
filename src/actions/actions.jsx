export const addProducts = "ADD_PRODUCTS";

export const addingProductsAction=(payload)=>{
    return{
        type: addProducts,
        payload: payload,
    }
}

