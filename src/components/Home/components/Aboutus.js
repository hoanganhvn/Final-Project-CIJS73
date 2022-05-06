import {useFetch} from "../../../hooks";
import * as _ from 'lodash';
import { Link } from 'react-router-dom';

function Aboutus() {
    const [data] = useFetch("https://625ed20e3b039517f1fcecfd.mockapi.io/img");
    const dataImgurl = _.slice(data, 10, 11);

    return (
        <>
            <div className="about">
                <div className="about-img">
                    <div className="about-img-scale">
                        <img className="about-img-scale-1"  src={dataImgurl.map(dataImgurl=>dataImgurl.imgurl)}/>
                    </div>

                    <h1 className="about-img-word2">Về chúng tôi</h1>
                    <Link to="/gioi-thieu">
                        <h3 className="about-img-word3">
                            XEM NGAY
                        </h3>
                    </Link>
                </div>
                <div className="about-word">
                    <p>
                        Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.
                    </p>
                    <p>
                        Một vài gợi ý cho nội dung trang Giới thiệu:
                    </p>
                    <p>
                        Bạn là ai
                    </p>
                    <p>
                        Giá trị kinh doanh của bạn là gì
                    </p>
                    <p>
                        Địa chỉ cửa hàng
                    </p>
                    <p>
                        Bạn đã kinh doanh trong ngành hàng này bao lâu rồi
                    </p>
                    <p>
                        Bạn kinh doanh ngành hàng online được bao lâu
                    </p>
                    <p>
                        Đội ngũ của bạn gồm những ai
                    </p>
                    <p>
                        Thông tin liên hệ
                    </p>
                    <p>
                        Liên kết đến các trang mạng xã hội (Twitter, Facebook)
                    </p>
                    <p>
                        Bạn có thể chỉnh sửa hoặc xoá bài viết này <span className="black-word"><Link to="/">tại đây</Link></span>  hoặc thêm những bài viết mới trong phần quản lý <span className="black-word"><Link to="/">Trang nội dung.</Link></span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Aboutus;
