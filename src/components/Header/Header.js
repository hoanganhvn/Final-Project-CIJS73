import Search from "./components/Search";
import LoginAndRegister from "./components/LoginAndRegister";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import {useContext, useState } from "react";
import './Header.scss';
import { NavLink,Link } from 'react-router-dom';
import Context from "../../Context";

function Header() {
    const [openSearch, setOpenSearch] = useState(false);
    const [openLoginAndRegister, setOpenLoginAndRegister] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openMiniMenu, setOpenMiniMenu] = useState(false);
    const [openLogin, setOpenLogin] = useState(true);
    const [openRegister, setOpenRegister] = useState(false);
    const [openForgotPassword, setOpenForgotPassword] = useState(false);
    const value = useContext(Context);

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

    const activeClass = (params) => {
        return params.isActive ? "active-item" : "navbar-brand";
    }

    return (
        <>
            < header className="header" >
                < LoginAndRegister openLoginAndRegister={openLoginAndRegister} openLogin={openLogin} openRegister={openRegister} openForgotPassword={openForgotPassword} handleCloseLoginAndRegister={handleCloseLoginAndRegister} clickToGoToRegister={clickToGoToRegister} clickToGoToForgotPassword={clickToGoToForgotPassword} clickToGoToLogin={clickToGoToLogin} />
                < Search openSearch={openSearch} handleCloseSearch={handleCloseSearch} />
                < Cart openCart={openCart} handleCloseCart={handleCloseCart} />
                <div div className="topbar" id="topbar" >
                    <div className="container-fluid">
                        <div className="topbar-content text-center">
                            <p>Mi???n ph?? v???n chuy???n v???i ????n h??ng tr??n 300K</p>
                        </div>
                    </div>
                </div >
                <div className="logo container-fluid">
                    <div className="col-md-2 fa-bars-icon" id="bars">
                        <i className="fa fa-bars" onClick={clickOpenMiniMenu} />
                    </div>
                    <div className="col-md-8 header-logo">
                        <div className="wrap-logo text-center">
                            <Link to="/" >
                                Fresh Organic
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-2 icon text-right">
                        {value.username ? <span>Xin ch??o, {value.username}<i className="fas fa-sign-out-alt" onClick={() => value.setUsername(undefined)} /></span> : <i className="fa fa-user-circle" id="myBtn1" onClick={handleOpenLoginAndRegister} />}
                        <i className="fa fa-search fa-search1" id="myBtn" onClick={handleOpenSearch} />
                        <i className="fa fa-shopping-bag" id="myBtn2" onClick={handleOpenCart} />
                    </div>
                </div>
                <div className="search-input container-fluid">
                    <div className="col-md-4">
                        <div className="search-input-btn">
                            <input className="col-sm-9 " type="text" placeholder="T??m ki???m s???n ph???m" />
                            <i className="fa fa-search" />
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <ul className="nav justify-content-center container-fluid">
                        <li className="nav-item">
                            <div className="nav-name home1">
                                <NavLink className={`nav-link ${activeClass}`} to="/">Trang ch???</NavLink>
                                <div className="line1" />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-name home2">
                            <NavLink className={`nav-link ${activeClass}`} to="/gioi-thieu">Gi???i thi???u</NavLink>
                                <div className="line2" />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-name home3">
                                <NavLink className={`nav-link ${activeClass}`} to="/san-pham">S???n ph???m</NavLink>
                                <div className="line3" />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-name home5">
                                <NavLink className={`nav-link ${activeClass}`} to="/tin-tuc">Tin t???c</NavLink>
                                <div className="line5" />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-name home6">
                                <NavLink className={`nav-link ${activeClass}`} to="/khuyen-mai">Khuy???n m???i</NavLink>
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