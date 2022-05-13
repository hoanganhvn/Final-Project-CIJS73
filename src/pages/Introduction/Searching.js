import "./Searching.css";
import { useEffect, useState } from 'react';
import ProductData from "../../helpers/Product.json";

function Searching() {
    useEffect(() => {
        document.title = "Fresh Organic - Tìm kiếm"
    }, [])

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        const newFilter = ProductData.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    // const clearInput = () => {
    //     setFilteredData([]);
    //     setWordEntered("");
    // };

    return (
        < >
            <div id="childWeb1">
                <div>
                    <h2><b>Tìm Kiếm</b></h2>
                </div>
                <div id="Sline" />
                <div id="search">
                    <input id="searchBar" type="text" placeholder="Tìm Kiếm" value={wordEntered} onChange={handleFilter} />
                    {/* <div className="searchIcon">
                        {filteredData.length === 0 ? (
                            <SearchIcon />
                        ) : (
                            <CloseIcon id="clearBtn" onClick={clearInput} />
                        )}
                    </div> */}
                    <button type="submit" id="searchBtn"><i className="fa fa-search" /></button>
                </div>
                {filteredData.length !== 0 && (
                    <div className="dataResult">
                        {filteredData.slice().map((value, key) => {
                            // console.log(value.image);
                            return (
                                <div>
                                    <a className="dataItem" href={value.image[0]} target="_blank">
                                        <p> {value.name}</p>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                )}
                {/* <p id="p1">Rất tiếc, chúng tôi không tìm thấy kết quả cho từ khóa của bạn</p>
                <p id="p2">Vui lòng kiểm tra chính tả, sử dụng các từ tổng quát hơn và thử lại!</p> */}
                <p id="p1"></p>
                <p id="p2"></p>
            </div>
        </>
    );
}

export default Searching;