import "./SideBar.scss";

function SideBar() {

    return (
        < >
            <div id="pageCatalogue2">
                <div id="pagecatalogue">
                    <h3 id="catalogue">DANH MỤC TRANG</h3>
                    <hr width="80%" color="black" style={{ margin: 'auto', marginBottom: '7%', height: '2px' }} />
                </div>
                <ul id="ul1">
                    <li><h4><a id="Intro" href="2Introduction.index.html">Giới thiệu</a></h4></li>
                    <li><h4><a id="Res" href="3Restore.index.html">Chính sách đổi trả</a></h4></li>
                    <li><h4><a id="Pri" href="4Privacy.index.html">Chính sách bảo mật</a></h4></li>
                    <li><h4><a id="Ser" href="5Service.index.html">Điều khoản dịch vụ</a></h4></li>
                    <li><h4><a id="Sea" href="1Searching.index.html">Tìm kiếm</a></h4></li>
                    <li><h4><a id="Cont" href="6Contact.index.html">Liên hệ</a></h4></li>
                </ul>
            </div>
        </>
    );
}

export default SideBar;