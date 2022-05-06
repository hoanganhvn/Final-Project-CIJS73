import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFetch } from "../../../hooks";
import * as _ from 'lodash';

const theme = createTheme({
    palette: {
        primary: {
            main: '#66a55f',
        },
        secondary: {
            main: '#66a55f',
        },
    },
});

function Popup(props) {
    const [data] = useFetch("https://625ed20e3b039517f1fcecfd.mockapi.io/img");
    const dataImgurl = _.slice(data, 11, 12);
console.log(dataImgurl);
    return (
        <>
            <ThemeProvider theme={theme}>
                <Modal
                    open={props.openPopup}
                    onClose={props.handleClosePopup}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className="modal-content modal-get-email" style={{ backgroundImage: `url(${dataImgurl.map(dataImgurl=>dataImgurl.imgurl)}` }}>
                        <div className="modal-header-email">
                            <h2>Đăng ký nhận thông tin</h2>
                            <h4>
                                Chúng tôi sẽ cập nhật các chương trình khuyến mãi đến bạn.
                            </h4>
                            <ul>
                                <li>Giảm giá sản phẩm</li>
                                <li>Sản phẩm mới</li>
                                <li>Sản phẩm bán chạy</li>
                            </ul>
                        </div>
                        <input className="input-email-popup" type="text" placeholder="   Nhập email của bạn" />
                        <div className="foot-input-email-popup">
                            ĐĂNG KÝ
                        </div>
                    </div>
                </Modal>
            </ThemeProvider>
        </>
    );
}

export default Popup;
