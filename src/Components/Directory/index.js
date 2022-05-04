import "./style.css";
import { Routes, Route } from "react-router-dom";
import { Search } from "../Directory/Search";
import { Introduce } from "../Directory/Introduce";
import { Privacy } from "../Directory/Privacy/index";
import { Links } from "../Links";
import { Contact } from "../Directory/Contact";
import { Service } from "../Directory/Service/index";
import { Restore } from "./../Directory/Restore/index";
import { Image } from "./../Directory/Img/index";

const Directory = () => {
  return (
    <div className="container">
      <div>
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
          />
          <div className="content">
            <Links />
          </div>
        </div>
        <div>
          <Image />
        </div>
      </div>
      <div className="content1">
        <Routes>
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/search" element={<Search />} />{" "}
          <Route path="/restore" element={<Restore />} />{" "}
          <Route path="/privacy" element={<Privacy />} />{" "}
          <Route path="/service" element={<Service />} />{" "}
          <Route path="/contact" element={<Contact />} />
        </Routes>{" "}
      </div>
    </div>
  );
};

export default Directory;
