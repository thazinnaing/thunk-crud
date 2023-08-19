import { ProductsReducer } from "../reducer/productsReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store=createStore(
    ProductsReducer, 
    applyMiddleware(thunk)
    )

