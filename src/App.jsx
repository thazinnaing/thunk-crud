import ProductsList from "./components/productsList";
import { addProducts } from "../actions/Actions";
import { useEffect } from "react";
import axios from "axios";

const PRODUCTS_URL = "https://api.escuelajs.co/api/v1/products";

const App=()=>{

  const fetchProducts=()=>{
    return async(dispatch)=>{
        const products=await axios.get(PRODUCTS_URL);
        console.log("products data", products.data);
        dispatch(addProducts(products.data));
    }
  }

  useEffect(()=>{
      fetchProducts
  },[])

  return(
    <>
    <ProductsList />
    </>
  )

}

export default App;