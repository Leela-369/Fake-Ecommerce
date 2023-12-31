import { Header } from "./Container/Header";
import { Routes, Route } from "react-router-dom";
import { ProductComponent } from "./Container/ProductComponetnt";
import ProductDetails  from "./Container/ProductDetails";
import Cart from "./Container/Cart";

function App() {
  return (
    <div>
     <Header/>
     <Routes>

    <Route path="/" element={<ProductComponent/>}/>
    <Route path="/Product/:id" element={<ProductDetails/>}/>
    <Route exact path="/cart" element={<Cart/>} />
    </Routes>
    

    </div>
  );
}

export default App;
