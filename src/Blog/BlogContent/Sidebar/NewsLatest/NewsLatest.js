import "./NewsLatest.css"
import { Link } from "react-router-dom";

const NewsLatest = (props) => {

    return (
        <div className="sidebar">
            <div className="sidebar-title">
                <h2>Bài viết mới nhất</h2>
            </div>
            <div className="sidebar-article">
                <div className="sidebar-image">
                    <Link to="/tin-tuc/gio"><img src="https://raw.githubusercontent.com/hoanganhvn/Final-Project/master/Trang_Image/sap-mung-1-thanh-hoa-hong-mach-cach-lam-gio-ngu-sac-hinh-hoa-dep-lung-linh-de-thap-huong-6b4-5372426.jpg" alt="" /></Link>
                </div>
                <div className="sidebar-post" style={{ width: '70%' }}>
                    <h3>
                    <Link to="/tin-tuc/gio">
                    7 loại giò không thể thiếu trong ngày Tết cổ truyền Việt Nam
                    </Link>
                    </h3>
                    <span style={{ fontSize: '13px' }}>Fresh Organic Food 30.01.2022</span>
                </div>
            </div>
            <div className="sidebar-article">
                <div className="sidebar-image" style={{ width: '30%' }}>
                <Link to="/tin-tuc/rau-ma">
                    <img src="https://raw.githubusercontent.com/hoanganhvn/Final-Project/master/Trang_Image/blog07_large.jpg" alt="" /></Link>
                </div>
                <div className="sidebar-post" style={{ width: '70%' }}>
                    <h3>
                    <Link to="/tin-tuc/rau-ma">
                    Nước uống ngon từ rau má, đơn giản và bổ dưỡng</Link>
                    </h3>
                    <span style={{ fontSize: '13px' }}>Fresh Organic Food 30.01.2022</span>
                </div>
            </div>
            <div className="sidebar-article">
                <div className="sidebar-image" style={{ width: '30%' }}>
                <Link to="/tin-tuc/trang-mieng">
                    <img src="https://raw.githubusercontent.com/hoanganhvn/Final-Project/master/Trang_Image/blog01_large.jpg" alt="" /></Link>
                </div>
                <div className="sidebar-post" style={{ width: '70%' }}>
                    <h3>
                    <Link to="/tin-tuc/trang-mieng">
                    Công thức món tráng miệng giải ngấy dịp Tết</Link>
                    </h3>
                    <span style={{ fontSize: '13px' }}>Fresh Organic Food 30.01.2022</span>
                </div>
            </div>
            <div className="sidebar-article">
                <div className="sidebar-image" style={{ width: '30%' }}>
                <Link to="/tin-tuc/banh-ngot">
                    <img src="https://raw.githubusercontent.com/hoanganhvn/Final-Project/master/Trang_Image/blog02_large.jpg" alt="" /></Link>
                </div>
                <div className="sidebar-post" style={{ width: '70%' }}>
                    <h3>
                    <Link to="/tin-tuc/banh-ngot">
                    Làm báng ngọt kiểu Pháp từ nguyên liệu đơn giản</Link>
                    </h3>
                    <span style={{ fontSize: '13px' }}>Fresh Organic Food 30.01.2022</span>
                </div>
            </div>
        </div>
    )
}

export default NewsLatest ;