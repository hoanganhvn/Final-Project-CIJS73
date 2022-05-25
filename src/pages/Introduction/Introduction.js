import { Link } from "react-router-dom";
import ImaginIntrodution from "./ImaginIntrodution";
import "./Introduction.scss";
import { useEffect } from 'react';

function Introduction() {
    useEffect(() => {
        document.title = "Fresh Organic - Giới thiệu"
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        < >
            <div id="childWeb2">
                <div className="active">
                    <ul id="active">
                        <li><Link to="/" >Trang Chủ </Link></li>
                        <li id="intro"> / Giới Thiệu</li>
                    </ul>
                </div>
                <div id="container2">
                    <div id="pageCatalogue2">
                        <div id="pagecatalogue">
                            <h3 id="catalogue">DANH MỤC TRANG</h3>
                            <hr width="80%" style={{ margin: 'auto', marginBottom: '7%', height: '2px', color: "black" }} />
                        </div>
                        <ul id="ul1">
                            <li><h4><Link id="Sea" to="/gioi-thieu/tim-kiem">Tìm kiếm</Link></h4></li>
                            <li><h4><Link id="Intro" to="/gioi-thieu">Giới thiệu</Link></h4></li>
                            <li><h4><Link id="Res" to="/gioi-thieu/doi-tra">Chính sách đổi trả</Link></h4></li>
                            <li><h4><Link id="Pri" to="/gioi-thieu/bao-mat">Chính sách bảo mật</Link></h4></li>
                            <li><h4><Link id="Ser" to="/gioi-thieu/dich-vu">Điều khoản dịch vụ</Link></h4></li>
                            <li><h4><Link id="Cont" to="/gioi-thieu/lien-he">Liên hệ</Link></h4></li>
                        </ul>
                    </div>
                    <div id="Introduction">
                        <h2><strong>Giới thiệu</strong></h2>
                        <div id="hr" />
                        <br />
                        <p>
                            Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn.
                            Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ.
                            Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.
                        </p>
                        <p>Một vài gợi ý cho nội dung trang Giới thiệu:</p>
                        <ul id="ul2">
                            <li>Bạn là ai</li>
                            <li>Giá trị kinh doanh của bạn là gì</li>
                            <li>Địa chỉ cửa hàng</li>
                            <li>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
                            <li>Bạn kinh doanh ngành hàng online được bao lâu</li>
                            <li>Đội ngũ của bạn gồm những ai</li>
                            <li>Thông tin liên hệ</li>
                            <li>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</li>
                        </ul>
                        <p>Bạn có thể chỉnh sửa hoặc xoá bài viết này tại
                            <strong>
                                <Link to='/'>
                                    đây
                                </Link>
                            </strong>
                            hoặc thêm những bài viết mới trong phần quản lý
                            <strong>
                                <Link to='/'>
                                    Trang nội dung.
                                </Link>
                            </strong>
                        </p>
                    </div>
                    <div id="img2">
                        <Link to='/'>
                            <ImaginIntrodution />
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Introduction;