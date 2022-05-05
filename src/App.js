import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./page/ProductDetailPage/ProductDetail";
import Product from "./page/ProductPage/Product";
import Layout from './components/Layout/Layout';
import NoPage from './components/NoPage/NoPage';
import { Blog } from "./Blog/Blog";
// import { db,data } from "./firebase";

function App() {
// console.log(db);
// console.log(data);

  return (
    < >
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/gian-hang' element={<Product />} />
          <Route path="/san-pham/:productId" element={<ProductDetail />} />
          <Route path="/tin-tuc" element={<Blog />} />
          <Route path="/khuyen-mai" element={<LandingPage />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
