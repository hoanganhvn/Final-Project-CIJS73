import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./page/ProductDetailPage/ProductDetail";
import Product from "./page/ProductPage/Product";
import SignIn from "./page/LoginFormPage/SignIn";
import SignUp from "./page/LoginFormPage/SignUp";
import Layout from './components/Layout/Layout';
import NoPage from './components/NoPage/NoPage';

function App() {

  return (
    < >
      <Header />

      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path="/product-detail/:productId" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>

      {/* <ProductDetail /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      
      <Footer />
    </>
  );
}

export default App;
