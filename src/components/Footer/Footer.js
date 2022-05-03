
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
                                    <a href="#">
                                        <img src="https://theme.hstatic.net/1000309753/1000718324/14/logo_bct.png?v=209" alt="" />
                                    </a>
                                    <div className="foot-icon">
                                        <i className="fa fa-facebook">
                                            <a href="https://fresh-organic-food.myharavan.com/" />
                                        </i>
                                        <i className="fa fa-twitter">
                                            <a href="https://fresh-organic-food.myharavan.com/" />
                                        </i>
                                        <i className="fa fa-instagram">
                                            <a href="https://fresh-organic-food.myharavan.com/" />
                                        </i>
                                        <i className="fa fa-google">
                                            <a href="https://fresh-organic-food.myharavan.com/" />
                                        </i>
                                        <i className="fa fa-youtube-play">
                                            <a href="https://fresh-organic-food.myharavan.com/" />
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
                                            <a href="tel:+1900636099">
                                                1900.636.099
                                            </a>
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
                                        <a href="product.html" target="_blank">
                                            Sản phẩm khuyến mãi
                                        </a>
                                    </span>
                                    <span>
                                        <a href="product.html" target="_blank">
                                            Sản phẩm nổi bật
                                        </a>
                                    </span>
                                    <span>
                                        <a href="product.html" target="_blank">
                                            Tất cả sản phẩm
                                        </a>
                                    </span>
                                </div>
                                <div className="col-md-6 col-lg-3 support">
                                    <h3>
                                        Hỗ trợ
                                    </h3>
                                    <span>
                                        <a href="1Searching.index.html" target="_blank">
                                            Tìm kiếm
                                        </a>
                                    </span>
                                    <span>
                                        <a href="2Introduction.index.html" target="_blank">
                                            Giới thiệu
                                        </a>
                                    </span>
                                    <span>
                                        <a href="3Restore.index.html" target="_blank">
                                            Chính sách đổi trả
                                        </a>
                                    </span>
                                    <span>
                                        <a href="4Privacy.index.html" target="_blank">
                                            Chính sách bảo mật
                                        </a>
                                    </span>
                                    <span>
                                        <a href="5Service.index.html" target="_blank">
                                            Điều khoản dịch vụ
                                        </a>
                                    </span>
                                    <span>
                                        <a href="6Contact.index.html" target="_blank">
                                            Liên hệ
                                        </a>
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