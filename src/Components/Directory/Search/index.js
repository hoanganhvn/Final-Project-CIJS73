import "../style.css";
import { useState } from "react";
// import Directory from "./../Directory/index";

export const Search = () => {
  const [search, setSearch] = useState("");
  // console.log("he");
  return (
    <div>
      <h1 className="title"> Tìm Kiếm </h1> <div className="hr"> </div>{" "}
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />{" "}
      <button> Search </button>{" "}
    </div>
  );
};
