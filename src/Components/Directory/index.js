import "./style.css";
import { Routes, Route } from "react-router-dom";
import { Search } from "./Search/index";
// import { Introduce } from "./Introduce/index";
import { Restore } from "../Detail/Restore/index";
import { Privacy } from "../Detail/Privacy/index";
import { Links } from "./Links";
import { Contact } from "../Detail/Contact";
import { Service } from "../Detail/Service/index";
import { Introduce } from "../Detail/Introduce";

const Directory = () => {
  return (
    <div className="box">
      <div id="catalogue"> DANH MỤC TRANG </div>{" "}
      <hr
        style={{
          width: "80%",
          color: "black",
          margin: "auto",
          marginBottom: "7%",
          height: 2,
        }}
      />{" "}
      <Links />
      <div>
        <Routes>
          <Route path="/search" element={<Search />} />{" "}
          <Route path="/introduce" element={<Introduce />} />{" "}
          <Route path="/restore" element={<Restore />} />{" "}
          <Route path="/privacy" element={<Privacy />} />{" "}
          <Route path="/service" element={<Service />} />{" "}
          <Route path="/contact" element={<Contact />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </div>
  );
};

export default Directory;
