import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import LandingPage from "./Components/LandingPage/LandingPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./page/ProductPage/Product";
import ProductDetail from "./page/ProductDetailPage/ProductDetail";
import ProductLayout from "./page/ProductPage/ProductLayout";
import Layout from "./Components/Layout/Layout";
import NoPage from "./Components/NoPage/NoPage";
import Blog from "./Blog/Blog";
import BlogLayout from "./Blog/BlogLayout";
import Gio from "./Blog/Gio";
import RauMa from "./Blog/RauMa";
import TrangMieng from "./Blog/TrangMieng";
import BanhNgot from "./Blog/BanhNgot";
import { Introduce } from "./Components/Directory/Introduce";
import { Search } from "./Components/Directory/Search";
import { Restore } from "./Components/Directory/Restore";
import { Privacy } from "./Components/Directory/Privacy";
import { Service } from "./Components/Directory/Service";
import { Contact } from "./Components/Directory/Contact";
import ProductData from "../src/Components/Directory/Product.json";
import Directory from "./Components/Directory";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gioi-thieu/*" element={<Directory />} />
          <Route path="/san-pham" element={<ProductLayout />}>
            <Route index element={<Product />} />
            <Route path="/san-pham/:productId" element={<ProductDetail />} />
          </Route>

          <Route path="/tin-tuc" element={<BlogLayout />}>
            <Route index element={<Blog />} />
            <Route path="gio" element={<Gio />} />
            <Route path="rau-ma" element={<RauMa />} />
            <Route path="trang-mieng" element={<TrangMieng />} />
            <Route path="banh-ngot" element={<BanhNgot />} />
          </Route>
          <Route path="/khuyen-mai" element={<LandingPage />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
