import "./MainBlog.scss"
import { Link } from "react-router-dom";

const MainBlog = () => {
    return (
        <>
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div class="main-title">
                    <h1>Tin tức</h1>
                </div>
                <div className="main-body">
                    <div className="main-item row">
                        <div className="col-md-4 col-xs-12 col-sm-12">
                            <div className="image-zoom">
                                <Link to="/tin-tuc/gio"><img src="https://raw.githubusercontent.com/hoanganhvn/Final-Project/master/Trang_Image/sap-mung-1-thanh-hoa-hong-mach-cach-lam-gio-ngu-sac-hinh-hoa-dep-lung-linh-de-thap-huong-6b4-5372426.jpg" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-12">
                            <Link to="/tin-tuc/gio" className="margin-bottom" style={{ fontSize: '17px', fontWeight: 400 }}>7 loại giò không thể thiếu trong ngày Tết cổ truyền Việt Nam</Link>
                            <div className="margin-bottom" style={{ fontSize: '14px', color: '#999' }}>Fresh Organic Food / 30.01.2022</div>
                            <p className="margin-bottom">Giò là món ăn truyền thống của người Việt Nam bởi nó vừa dân giã, vừa ngon miệng vừa sang trọng khi tiếp khách. Việt...</p>
                        </div>
                    </div>
                    <div className="main-item row">
                        <div className="col-md-4 col-xs-12 col-sm-12">
                            <div className="image-zoom">
                                <Link to="/tin-tuc/rau-ma"><img src="https://raw.githubusercontent.com/hoanganhvn/Final-Project/master/Trang_Image/blog07_large.jpg" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-12">
                            <Link to="/tin-tuc/rau-ma" className="margin-bottom" style={{ fontSize: '17px', fontWeight: 400 }}>Nước uống ngon từ rau má, đơn giản và bổ dưỡng</Link>
                            <div className="margin-bottom" style={{ fontSize: '14px', color: '#999' }}>Fresh Organic Food / 30.01.2022</div>
                            <p className="margin-bottom">Mùa hè nóng bức thế này chúng ta nên làm một cốc nước ép rau má cùng chút đá mát lạnh...</p>
                        </div>
                    </div>
                    <div className="main-item row">
                        <div className="col-md-4 col-xs-12 col-sm-12">
                            <div className="image-zoom">
                                <Link to="/tin-tuc/trang-mieng"><img src="https://raw.githubusercontent.com/hoanganhvn/Final-Project/master/Trang_Image/blog01_large.jpg" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-12">
                            <Link to="/tin-tuc/trang-mieng" className="margin-bottom" style={{ fontSize: '17px', fontWeight: 400 }}>Công thức món tráng miệng giải ngấy dịp Tết</Link>
                            <div className="margin-bottom" style={{ fontSize: '14px', color: '#999' }}>Fresh Organic Food / 30.01.2022</div>
                            <p className="margin-bottom">Sau một bữa ăn đầy ắp thịt cá, còn gì tuyệt vời hơn việc được thưởng thức những món tráng miệng ngon ngọt, mát lạnh đúng không?...</p>
                        </div>
                    </div>
                    <div className="main-item row">
                        <div className="col-md-4 col-xs-12 col-sm-12">
                            <div className="image-zoom">
                                <Link to="/tin-tuc/banh-ngot"><img src="https://raw.githubusercontent.com/hoanganhvn/Final-Project/master/Trang_Image/blog02_large.jpg" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-12">
                            <Link to="/tin-tuc/banh-ngot" className="margin-bottom" style={{ fontSize: '17px', fontWeight: 400 }}>Làm báng ngọt kiểu Pháp từ nguyên liệu đơn giản</Link>
                            <div className="margin-bottom" style={{ fontSize: '14px', color: '#999' }}>Fresh Organic Food / 30.01.2022</div>
                            <p className="margin-bottom">Nếu bạn đã thưởng thức bánh ngọt Pháp trước đây, rất có thể bạn đã thưởng thức crème pâtissière, hay còn gọi là kem bánh ngọt. Một khi bạn biết làm thế nào để làm cho một loại kem bánh ngọt cổ điển....</p>
                        </div>
                    </div>
                </div>
            </div>
      
        </>
    )
}

export default MainBlog;