import { Routes, Route } from "react-router-dom";
import ProductDetail from "./page/ProductDetailPage/ProductDetail";
import Product from "./page/ProductPage/Product";
import SignIn from "./page/LoginFormPage/SignIn";
import SignUp from "./page/LoginFormPage/SignUp";


function App() {
  return (
    <div >
      <Routes>
        <Route path='/product' element={<Product />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
      </Routes>
      {/* <ProductDetail /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
