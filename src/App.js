import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Context from "./Context";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import Product from "./pages/ProductPage/Product";
import ProductDetail from "./pages/ProductDetailPage/ProductDetail";
import ProductLayout from "./pages/ProductPage/ProductLayout";
import Layout from './pages/Layout/Layout';
import NoPage from './pages/NoPage/NoPage';
import Blog from "./pages/Blog/Blog";
import BlogLayout from "./pages/Blog/BlogLayout";
import Gio from "./pages/Blog/Gio";
import RauMa from "./pages/Blog/RauMa";
import TrangMieng from "./pages/Blog/TrangMieng";
import BanhNgot from "./pages/Blog/BanhNgot";
import IntroductionLayout from "./pages/Introduction/IntroductionLayout";
import Introduction from "./pages/Introduction/Introduction";
import Restore from "./pages/Introduction/Restore";
import Privacy from "./pages/Introduction/Privacy";
import Service from "./pages/Introduction/Service";
import Searching from "./pages/Introduction/Searching";
import Contact from "./pages/Introduction/Contact";


function App() {
  const [username, setUsername] = useState("");

  return (
    <Context.Provider value={{ username: username, setUsername: setUsername }}>
      < >
        <Header />
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/san-pham" element={<ProductLayout />} >
              <Route index element={<Product />} />
              <Route path="/san-pham/:productId" element={<ProductDetail />} />
            </Route>
            <Route path="/gioi-thieu" element={<IntroductionLayout />} >
              <Route index element={<Introduction />} />
              <Route path="restore" element={<Restore />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="service" element={<Service />} />
              <Route path="searching" element={<Searching />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/tin-tuc" element={<BlogLayout />} >
              <Route index element={<Blog />} />
              <Route path="gio" element={< Gio />} />
              <Route path="rau-ma" element={< RauMa />} />
              <Route path="trang-mieng" element={< TrangMieng />} />
              <Route path="banh-ngot" element={< BanhNgot />} />
            </Route>
            <Route path="/khuyen-mai" element={<LandingPage />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </>
    </Context.Provider >
  );
}

export default App;
