import "./Restore.scss";
import { Link } from "react-router-dom";
import ImaginIntrodution from "./ImaginIntrodution";
import { useEffect } from 'react';

function Restore() {
    useEffect(() => {
        document.title = "Fresh Organic - Chính sách đổi trả"
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        < >
            <div id="childWeb3">
                <div className="active">
                    <ul id="active">
                        <li><Link to="/" >Trang Chủ </Link></li>
                        <li id="intro"> / Chính sách đổi trả</li>
                    </ul>
                </div>
                <div id="container3">
                    <div id="pageCatalogue3">
                        <div id="pagecatalogue">
                            <h3 id="catalogue">DANH MỤC TRANG</h3>
                            <hr width="80%" color="black" style={{ margin: 'auto', marginBottom: '7%', height: '2px' }} />
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
                    <div id="Restore">
                        <h2><strong>Chính sách đổi trả</strong></h2>
                        <div id="hr" />
                        <br />
                        <ol>
                            <strong><li>Điều kiện đổi trả</li></strong>
                            <br />
                            <p>Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:</p>
                            <ul className="ul3">
                                <li>Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.</li>
                                <li>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
                                <li>Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…</li>
                            </ul>
                            <p>Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa. </p>
                            <br />
                            <br />
                            <strong><li> Quy định về thời gian thông báo và gửi sản phẩm đổi trả</li></strong>
                            <br />
                            <ul className="ul3">
                                <li><strong>Thời gian thông báo đổi trả:</strong> trong vòng 48h kể từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng; hoặc bể vỡ.</li>
                                <li><strong>Thời gian gởi chuyển trả sản phẩm:</strong> trong vòng 14 ngày từ nhận sản phẩm.</li>
                            </ul>
                            <br />
                            <p>Địa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi Hoặc chuyển qua đường bưu điện.</p>
                            <br />
                            <p>Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan Chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.</p>
                        </ol>
                    </div>
                    <div id="img3">
                        <Link to='/'>
                            <ImaginIntrodution />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Restore;