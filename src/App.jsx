import ProductsList from "./components/productsList";
import { addingProductsAction } from "./actions/Actions";
import axios from "axios";
import { useEffect } from "react";

const PRODUCTS_URL = "https://api.escuelajs.co/api/v1/products";

const App=()=>{

  const fetchProducts=()=>{
    console.log("llllll")
    return function(dispatch){
      console.log(".......")
        axios.get(PRODUCTS_URL)
        .then(res=>
          dispatch(addingProductsAction(res.data)))
        
    }
  }

  useEffect(()=>{
      fetchProducts();
  },[])

  return(
    <>
    <ProductsList />
    </>
  )

}

export default App;