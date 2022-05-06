import { Link } from "react-router-dom";
import "./index.css";
export const Image = () => {
  return (
    <div id="img2">
      <Link to="#">
        <img
          style={{ width: "60%", height: "60%", margin: 30 }}
          src="Image/page_banner.jpg"
          alt=""
        />
      </Link>
    </div>
  );
};
