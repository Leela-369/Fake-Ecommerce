import { Header } from "./Container/Header";
import { Routes, Route } from "react-router-dom";
import { ProductComponent } from "./Container/ProductComponetnt";
import ProductDetails  from "./Container/ProductDetails";
import { ProductListing } from "./Container/productListing";
import Cart from "./Container/Cart";

function App() {
  return (
    <div>
     <Header/>
     <Routes>
    <Route path="/ProductComponent" element={<ProductComponent/>}/>
    <Route path="/" element={<ProductListing/>}/>
    <Route path="/Product/:id" element={<ProductDetails/>}/>
    <Route exact path="/cart" element={<Cart/>} />
    </Routes>
    

    </div>
  );
}

export default App;
