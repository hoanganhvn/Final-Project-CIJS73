import "./Searching.css";

function Searching() {

    return (
        < >
            <div id="childWeb1">
                <div>
                    <h2><b>Tìm Kiếm</b></h2>
                </div>
                <div id="Sline" />
                <div id="search">
                    <input id="searchBar" type="text" placeholder="Tìm Kiếm" />
                    <button type="submit" id="searchBtn"><i className="fa fa-search" /></button>
                </div>
                <p id="p1">Rất tiếc, chúng tôi không tìm thấy kết quả cho từ khóa của bạn</p>
                <p id="p2">Vui lòng kiểm tra chính tả, sử dụng các từ tổng quát hơn và thử lại!</p>
            </div>
       </>
    );
}

export default Searching;