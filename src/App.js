import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/ProductPage/Product";
import ProductDetail from "./pages/ProductDetailPage/ProductDetail";
import ProductLayout from "./pages/ProductPage/ProductLayout";
import LayoutHome from './pages/Home/LayoutHome';
// import NoPage from './pages/NoPage/NoPage';
import Blog from "./pages/Blog/Blog";
import BlogLayout from "./pages/Blog/BlogLayout";
import Article1 from "./pages/Blog/Article1";
import Article2 from "./pages/Blog/Article2";
import Article3 from "./pages/Blog/Article3";
import Article4 from "./pages/Blog/Article4";
import IntroductionLayout from "./pages/Introduction/IntroductionLayout";
import Introduction from "./pages/Introduction/Introduction";
import Restore from "./pages/Introduction/Restore";
import Privacy from "./pages/Introduction/Privacy";
import Service from "./pages/Introduction/Service";
import Searching from "./pages/Introduction/Searching";
import Contact from "./pages/Introduction/Contact";
import { useState } from "react";
import Context from "./Context";

function App() {
  const [username, setUsername] = useState("");

  return (
      < >
    <Context.Provider value={{ username: username, setUsername: setUsername }}>
        <Header />
        <Routes>
          <Route path="/" element={<LayoutHome />} >
            <Route index element={<Home />} />
            <Route path="/san-pham" element={<ProductLayout />} >
              <Route index element={<Product />} />
              <Route path="/san-pham/:productId" element={<ProductDetail />} />
            </Route>
            <Route path="/gioi-thieu" element={<IntroductionLayout />} >
              <Route index element={<Introduction />} />
              <Route path="doi-tra" element={<Restore />} />
              <Route path="bao-mat" element={<Privacy />} />
              <Route path="dich-vu" element={<Service />} />
              <Route path="tim-kiem" element={<Searching />} />
              <Route path="lien-he" element={<Contact />} />
            </Route>
            <Route path="/tin-tuc" element={<BlogLayout />} >
              <Route index element={<Blog />} />
              <Route path="gio" element={< Article1 />} />
              <Route path="rau-ma" element={< Article2 />} />
              <Route path="trang-mieng" element={< Article3 />} />
              <Route path="banh-ngot" element={< Article4 />} />
            </Route>
            <Route path="/khuyen-mai" element={<LandingPage />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
    </Context.Provider >
      </>
  );
}

export default App;
