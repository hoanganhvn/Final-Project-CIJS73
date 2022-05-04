import Search from "./components/Search";
import LoginAndRegister from "./components/LoginAndRegister";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import { useState } from "react";

function Header() {
    const [openSearch, setOpenSearch] = useState(false);
    const [openLoginAndRegister, setOpenLoginAndRegister] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openMiniMenu, setOpenMiniMenu] = useState(false);
    const [openLogin, setOpenLogin] = useState(true);
    const [openRegister, setOpenRegister] = useState(false);
    const [openForgotPassword, setOpenForgotPassword] = useState(false);

    const handleOpenSearch = () => setOpenSearch(true);
    const handleCloseSearch = () => setOpenSearch(false);

    const handleOpenLoginAndRegister = () => setOpenLoginAndRegister(true);
    const handleCloseLoginAndRegister = () => {
        setOpenLoginAndRegister(false);
        setOpenLogin(true);
        setOpenRegister(false);
        setOpenForgotPassword(false);
    };

    const handleOpenCart = () => setOpenCart(true);
    const handleCloseCart = () => setOpenCart(false);

    const clickOpenMiniMenu = () => setOpenMiniMenu(!openMiniMenu);

    const clickToGoToRegister = () => {
        setOpenLogin(false);
        setOpenRegister(true);
        setOpenForgotPassword(false);
    }
    const clickToGoToLogin = () => {
        setOpenLogin(true);
        setOpenRegister(false);
        setOpenForgotPassword(false);
    }
    const clickToGoToForgotPassword = () => {
        setOpenLogin(false);
        setOpenRegister(false);
        setOpenForgotPassword(true);
    }

    return (
        <>
            < header className="header" >
                < Search openSearch={openSearch} handleCloseSearch={handleCloseSearch} />
                < LoginAndRegister openLoginAndRegister={openLoginAndRegister} openLogin={openLogin} openRegister={openRegister} openForgotPassword={openForgotPassword} handleCloseLoginAndRegister={handleCloseLoginAndRegister} clickToGoToRegister={clickToGoToRegister} clickToGoToForgotPassword={clickToGoToForgotPassword} clickToGoToLogin={clickToGoToLogin}/>
                < Cart openCart={openCart} handleCloseCart={handleCloseCart} />
                <div div className="topbar" id="topbar" >
                    <div className="container-fluid">
                        <div className="topbar-content text-center">
                            <p>Miễn phí vận chuyển với đơn hàng trên 300K</p>
                        </div>
                    </div>
                </div >
                <div className="logo container-fluid">
                    <div className="col-md-2 fa-bars-icon" id="bars">
                        <i className="fa fa-bars" onClick={clickOpenMiniMenu} />
                    </div>
                    <div className="col-md-8 header-logo">
                        <div className="wrap-logo text-center">
                            <a href="index.html" target="_blank">
                                Fresh Organic
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2 icon text-right">
                        <i className="fa fa-search fa-search1" id="myBtn" onClick={handleOpenSearch} />
                        <i className="fa fa-user-circle" id="myBtn1" onClick={handleOpenLoginAndRegister} />
                        <i className="fa fa-shopping-bag" id="myBtn2" onClick={handleOpenCart} />
                    </div>
                </div>
                <div className="search-input container-fluid">
                    <div className="col-md-4">
                        <div className="search-input-btn">
                            <input className="col-sm-9 " type="text" placeholder="Tìm kiếm sản phẩm" />
                            <i className="fa fa-search" />
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <ul className="nav justify-content-center container-fluid">
                        <li className="nav-item">
                            <div className="nav-name home1">
                                <a className="nav-link" href="index.html" target="_blank">Trang chủ</a>
                                <div className="line1" />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-name home2">
                                <a className="nav-link" href="2Introduction.index.html" target="_blank">Giới thiệu</a>
                                <div className="line2" />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-name home3">
                                <a className="nav-link" href="product.html" target="_blank">Sản phẩm</a>
                                <div className="line3" />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-name home4">
                                <a className="nav-link" href="Lựu_đỏ_Peru.html" target="_blank">Product Details</a>
                                <div className="line4" />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-name home5">
                                <a className="nav-link" href="blog.html" target="_blank">Blog</a>
                                <div className="line5" />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-name home6">
                                <a className="nav-link" href="LandingPage.index.html" target="_blank">Landing Page</a>
                                <div className="line6" />
                            </div>
                        </li>
                    </ul>
                </div>
            </header >
            {openMiniMenu && <Menu />}
        </>
    );
}

export default Header;