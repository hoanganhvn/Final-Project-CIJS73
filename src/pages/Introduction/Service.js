import "./Service.css";
import { Link } from "react-router-dom";
import ImaginIntrodution from "./ImaginIntrodution";
import  { useEffect } from 'react';

function Service() {
    useEffect(() => {
        document.title = "Fresh Organic - Điều khoản dịch vụ"
      }, [])

    return (
        < >
            <div id="childWeb5">
                <div className="active">
                    <ul id="active">
                        <li><Link to="/" >Trang Chủ </Link></li>
                        <li id="intro"> / Điều khoản dịch vụ</li>
                    </ul>
                </div>
                <div id="container5">
                    <div id="pageCatalogue5">
                        <div id="pagecatalogue">
                            <h3 id="catalogue">DANH MỤC TRANG</h3>
                            <hr width="80%" style={{ margin: 'auto', marginBottom: '7%', height: '2px', color: "black" }} />
                        </div>
                        <ul id="ul1">
                            <li><h4><Link id="Sea" to="/gioi-thieu/searching">Tìm kiếm</Link></h4></li>
                            <li><h4><Link id="Intro" to="/gioi-thieu">Giới thiệu</Link></h4></li>
                            <li><h4><Link id="Res" to="/gioi-thieu/restore">Chính sách đổi trả</Link></h4></li>
                            <li><h4><Link id="Pri" to="/gioi-thieu/privacy">Chính sách bảo mật</Link></h4></li>
                            <li><h4><Link id="Ser" to="/gioi-thieu/service">Điều khoản dịch vụ</Link></h4></li>
                            <li><h4><Link id="Cont" to="/gioi-thieu/contact">Liên hệ</Link></h4></li>
                        </ul>
                    </div>
                    <div id="Service">
                        <h2><strong>Điều khoản dịch vụ</strong></h2>
                        <div id="hr" />
                        <br />
                        <ol>
                            <strong><li>Giới thiệu</li></strong>
                            <br />
                            <p>Chào mừng quý khách hàng đến với website chúng tôi.</p>
                            <p>
                                Khi quý khách hàng truy cập vào trang website của chúng tôi có nghĩa là quý khách đồng ý với các điều khoản này.
                                Trang web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản mua bán hàng hóa này,
                                vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước.
                                Và khi quý khách tiếp tục sử dụng trang web, sau khi các thay đổi về Điều khoản này được đăng tải,
                                có nghĩa là quý khách chấp nhận với những thay đổi đó.
                            </p>
                            <p>Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi.</p>
                            <br />
                            <strong><li>Hướng dẫn sử dụng website</li></strong>
                            <br />
                            <p>
                                Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi,
                                hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp.
                                Khách hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện các giao dịch mua bán hàng hóa theo quy định hiện hành của pháp luật Việt Nam.
                            </p>
                            <p>Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ website.
                                Nếu không muốn tiếp tục nhận mail, quý khách có thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.</p>
                            <br />
                            <strong><li>Thanh toán an toàn và tiện lợi</li></strong>
                            <br />
                            <p>Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp dụng phương thức phù hợp:</p>
                            <p><strong>Cách 1: </strong> Thanh toán trực tiếp (người mua nhận hàng tại địa chỉ người bán):</p>
                            <br />
                            <p><strong>Cách 2: </strong> Thanh toán sau (COD - giao hàng và thu tiền tận nơi):</p>
                            <br />
                            <p><strong>Cách 3: </strong> Thanh toán online qua thẻ tín dụng, chuyển khoản</p>
                        </ol>
                    </div>
                    <div id="img5">
                        <Link to='/'>
                            <ImaginIntrodution />
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Service;