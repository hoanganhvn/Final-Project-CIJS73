import { Link } from 'react-router-dom';

function Footer() {

    return (
        <>
            <footer className="footertotal">
                <div className="footer">
                    <div className="container-fluid">
                        <div className="foot-up">
                            <div className="row">
                                <div className="col-md-1 col-lg-1 blank">
                                </div>
                                <div className="col-md-11 col-lg-2 foot-icon-email">
                                    <i className="fa fa-envelope-open-o" />
                                    <span>
                                        Đăng ký nhận tin
                                    </span>
                                </div>
                                <div className="col-md-12 col-lg-5 foot-email">
                                    <div className="container">
                                        <div className="row">
                                            <input className="col-md-6 col-lg-9 input-email" type="text" placeholder="   Nhập email của bạn" />
                                            <div className="col-md-2 col-lg-3 foot-input-email">
                                                ĐĂNG KÝ
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 col-lg-1 blank">
                                </div>
                                <div className="col-md-12 col-lg-3 foot-register">
                                    <i className="fa fa-phone phone-icon" />
                                    <span> Hỗ trợ / Mua hàng: </span>
                                    <span className="hotline">1900 636 099</span>
                                </div>
                                <div className="foot-icon-support" />
                            </div>
                        </div>
                        <div className="foot-middle">
                            <div className="row">
                                <div className="col-lg-1 blank">
                                </div>
                                <div className="col-md-6 col-lg-3 introdution">
                                    <h3>Giới thiệu</h3>
                                    <span>
                                        Fresh Organic trang mua sắm trực tuyến của thương hiệu thời trang Lama, thời trang nam, nữ, phụ kiện, giúp bạn tiếp cận xu hướng thời trang mới nhất.
                                    </span>
                                    <Link to="/">
                                        <img src="https://theme.hstatic.net/1000309753/1000718324/14/logo_bct.png?v=209" alt="" />
                                    </Link>
                                    <div className="foot-icon">
                                        <i className="fa fa-facebook">
                                           <Link to="/" />
                                        </i>
                                        <i className="fa fa-twitter">
                                           <Link to="/" />
                                        </i>
                                        <i className="fa fa-instagram">
                                           <Link to="/" />
                                        </i>
                                        <i className="fa fa-google">
                                           <Link to="/" />
                                        </i>
                                        <i className="fa fa-youtube-play">
                                           <Link to="/" />
                                        </i>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 infomation">
                                    <h3>Thông tin liên hệ</h3>
                                    <div className="address">
                                        <i className="fa fa-map-marker" />
                                        <div className="address-detail">
                                            <span>
                                                Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận 11, Tp. Hồ Chí Minh.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="phone">
                                        <i className="fa fa-phone" />
                                        <span type="tel">
                                            1900.636.099
                                        </span>
                                    </div>
                                    <div className="fax">
                                        <i className="fa fa-print" />
                                        <span>
                                           <Link to="/tel:+1900636099">
                                                1900.636.099
                                            </Link>
                                        </span>
                                    </div>
                                    <div className="email">
                                        <i className="fa fa-envelope" />
                                        <span>
                                            hi@haravan.com
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-2 link">
                                    <h3>
                                        Liên kết
                                    </h3>
                                    <span>
                                       <Link to="/san-pham/1" >
                                            Sản phẩm khuyến mãi
                                        </Link>
                                    </span>
                                    <span>
                                       <Link to="/san-pham/1">
                                            Sản phẩm nổi bật
                                        </Link>
                                    </span>
                                    <span>
                                       <Link to="/san-pham/1">
                                            Tất cả sản phẩm
                                        </Link>
                                    </span>
                                </div>
                                <div className="col-md-6 col-lg-3 support">
                                    <h3>
                                        Hỗ trợ
                                    </h3>
                                    <span>
                                       <Link to="/gioi-thieu/searching">
                                            Tìm kiếm
                                        </Link>
                                    </span>
                                    <span>
                                       <Link to="/gioi-thieu">
                                            Giới thiệu
                                        </Link>
                                    </span>
                                    <span>
                                       <Link to="/gioi-thieu/restore">
                                            Chính sách đổi trả
                                        </Link>
                                    </span>
                                    <span>
                                       <Link to="/gioi-thieu/privacy">
                                            Chính sách bảo mật
                                        </Link>
                                    </span>
                                    <span>
                                       <Link to="/gioi-thieu/service">
                                            Điều khoản dịch vụ
                                        </Link>
                                    </span>
                                    <span>
                                       <Link to="/gioi-thieu/contact">
                                            Liên hệ
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="foot-down">
                            <div className="topbar-content text-center">
                                <p>Copyright © 2022 Fresh Organic. Powered by Team 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;