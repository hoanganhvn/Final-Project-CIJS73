import "./MenuBlog.css"
import { Link } from "react-router-dom";

const MenuBlog = () => {
    return (
        <div className="sidebar-menu-blog">
            <div className="sidebar-title">
                <h2>Danh mục blog</h2>
            </div>
            <div>
                <ul className="sidebar-menu-list">
                    <li>Trang chủ</li>
                    <li>Header</li>
                    <li>Sản phẩm</li>
                    <li>Product Views</li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li>Landing Page</li>
                </ul>
            </div>
        </div>
    )
}

export { MenuBlog };