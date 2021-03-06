import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFetch } from "../../../hooks";
import * as _ from 'lodash';
import { useState ,useEffect} from 'react';
// import database from "../../../helpers/Firebase.js";
import { ref, onValue } from "firebase/database";

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

    // const userId = 12;
    // const starCountRef = ref(database, 'users/' + userId);
    // const data =[];

    // onValue(starCountRef, (snapshot) => {
    //     const data1 = snapshot.val().imgurl;
    //     // console.log(data);
    //     data.push(data1);
    // });

    const [openPopup, setOpenPopup] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setOpenPopup(true);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);
    const handleClosePopup = () => setOpenPopup(false);

    const [email, setEmail] = useState(false);
    const [inputEmail, setInputEmail] = useState("");
    const handleSubmitEmail = () => {
        setInputEmail("");
        setEmail(true);
        setTimeout(() => {
            setOpenPopup(false);
        }, 2000);
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <Modal
                    open={openPopup}
                    onClose={handleClosePopup}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className="modal-content modal-get-email" style={{ backgroundImage: `url(${dataImgurl.map(dataImgurl => dataImgurl.imgurl)}` }}>
                    {/* <div className="modal-content modal-get-email" style={{ backgroundImage: `url(${data.map(data => data)}` }}> */}
                        <div className="modal-header-email">
                            <h2>????ng k?? nh???n th??ng tin</h2>
                            <h4>
                                Ch??ng t??i s??? c???p nh???t c??c ch????ng tr??nh khuy???n m??i ?????n b???n.
                            </h4>
                            <ul>
                                <li>Gi???m gi?? s???n ph???m</li>
                                <li>S???n ph???m m???i</li>
                                <li>S???n ph???m b??n ch???y</li>
                            </ul>
                        </div>
                        <input className="input-email-popup" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} type="text" placeholder="   Nh???p email c???a b???n" />
                        <div className="foot-input-email-popup" onClick={handleSubmitEmail}>
                            {email ? "B???N ???? ????NG K?? TH??NH C??NG!" : "????NG K??"}
                        </div>
                    </div>
                </Modal>
            </ThemeProvider>
        </>
    );
}

export default Popup;
