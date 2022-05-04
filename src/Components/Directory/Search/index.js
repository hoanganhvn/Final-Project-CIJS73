import "../style.css";
import "./index.css";
import { useState } from "react";
// import Directory from "./../Directory/index";
// import { JSONDATA } from "MOCK_DATA.json";

export const Search = (props) => {
  const [search, setSearch] = useState(props.keywork);
  const handleSearch = () => {
    props.changeHandleSearch(search);
  };
  // console.log("he");

  return (
    <div>
      <h1 className="title"> Tìm Kiếm </h1>
      <div className="hr"> </div>
      <div id="search">
        <input
          width={"100%"}
          id="searchBar"
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <button type="submit" id="searchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
