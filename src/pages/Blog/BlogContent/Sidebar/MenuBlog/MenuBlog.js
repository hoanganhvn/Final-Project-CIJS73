import "./MenuBlog.scss"
import { Link } from "react-router-dom";

const MenuBlog = () => {
    return (
        <div className="sidebar-menu-blog">
            <div className="sidebar-title">
                <h2>Danh mục blog</h2>
            </div>
            <div>
                <ul className="sidebar-menu-list">
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
                    <li><Link to="/san-pham">Sản phẩm</Link></li>
                    <li><Link to="/tin-tuc">Tin tức</Link></li>
                    <li><Link to="/khuyen-mai">Khuyến mại</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBlog ;