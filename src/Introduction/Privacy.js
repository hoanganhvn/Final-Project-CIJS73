import "./Privacy.css";
import { Link } from "react-router-dom";
import ImaginIntrodution from "./ImaginIntrodution";

function Privacy() {

    return (
        < >
            <div id="childWeb4">
                <div className="active">
                    <ul id="active">
                        <li><Link to="/" >Trang Chủ </Link></li>
                        <li id="intro"> Chính sách bảo mật</li>
                    </ul>
                </div>
                <div id="container4">
                    <div id="pageCatalogue4">
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
                    <div id="Privacy">
                        <h2><strong>Chính sách bảo mật</strong></h2>
                        <div id="hr" />
                        <br />
                        <p>
                            Chính sách bảo mật này nhằm giúp bạn hiểu về cách website thu thập và sử dụng thông tin cá nhân của bạn thông qua việc sử dụng trang web,
                            bao gồm mọi thông tin bạn có thể cung cấp thông qua trang web khi bạn đăng ký tài khoản,
                            đăng ký nhận thông tin hoặc liên lạc từ chúng tôi , mua sản phẩm hoặc dịch vụ hoặc yêu cầu thêm thông tin hoặc dịch vụ từ chúng tôi.
                        </p>
                        <p>
                            Chúng tôi sử dụng thông tin cá nhân của bạn để liên lạc với bạn nếu và khi cần thiết liên quan đến việc bạn sử dụng trang web của chúng tôi,
                            để trả lời các câu hỏi của bạn hoặc gửi cho bạn tài liệu và thông tin bạn yêu cầu.
                        </p>
                        <p>
                            Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất bảo vệ thông tin và việc thanh toán của quý khách.
                        </p>
                        <p>
                            Mọi thông tin giao dịch sẽ được bảo mật ngoại trừ trong trường hợp cơ quan pháp luật yêu cầu.
                        </p>
                    </div>
                    <div id="img4">
                        <Link to='/'>
                            <ImaginIntrodution />
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Privacy;