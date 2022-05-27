import Time from "./components/Time";
import ImageBottom from "./components/ImageBottom";
import Voucher from "./components/Voucher";
import Product from "./components/Product";
import { useEffect, useState } from 'react';
import "./LandingPage.scss";
import { useFetch } from "../../hooks";
import * as _ from 'lodash';
import dataLandingPage from "../../helpers/dataLandingPage.json";
import moment from 'moment';

function LandingPage() {
    const [startNumber, setStartNumber] = useState(12);
    const [endNumber, setEndNumber] = useState(22);
    const [displayButton, setDisplayButton] = useState("");
    const [displayHighLight, setDisplayHighLight] = useState("");
    const [displaySale, setDisplaySale] = useState("");
    const [displayBestSale, setDisplayBestSale] = useState("");
    const [displayNew, setDisplayNew] = useState("");
    const [displayButtonDown, setDisplayButtonDown] = useState("");
    const [displayToday, setDisplayToday] = useState("");
    const [displayHot, setDisplayHot] = useState("");
    const [displaySuperSale, setDisplaySuperSale] = useState("");
    const [days, setDays] = useState(undefined);
    const [hours, setHours] = useState(undefined);
    const [minutes, setMinutes] = useState(undefined);
    const [seconds, setSeconds] = useState(undefined);
    const [countdown, setCountdown] = useState(true);

    const [data] = useFetch("https://625ed20e3b039517f1fcecfd.mockapi.io/img");
    const dataImageUrl = _.slice(data, startNumber, endNumber);
    const dataLandingPageVoucher = _.slice(dataLandingPage, 4, 8);
    const dataLandingPageImageUp = _.slice(dataLandingPage, 8, 10);
    const dataLandingPageImageDown = _.slice(dataLandingPage, 10, 12);;

    const handleButton = () => {
        if (displayHighLight === "block" && displayButton === "") {
            setStartNumber(12);
            setEndNumber(27);
            setDisplayButton("none");
        }
        if (displayNew === "block" && displayButton === "flex") {
            setStartNumber(47);
            setEndNumber(62);
            setDisplayButton("none");
        }
    }

    const handleHighLight = () => {
        setStartNumber(12);
        setEndNumber(22);
        setDisplayButton("");
        setDisplayHighLight("block");
        setDisplaySale("none");
        setDisplayBestSale("none");
        setDisplayNew("none");
    }
    const handleSale = () => {
        setStartNumber(28);
        setEndNumber(38);
        setDisplayButton("none");
        setDisplayHighLight("none");
        setDisplaySale("block");
        setDisplayBestSale("none");
        setDisplayNew("none");
    }
    const handleBestSale = () => {
        setStartNumber(39);
        setEndNumber(47);
        setDisplayButton("none");
        setDisplayHighLight("none");
        setDisplaySale("none");
        setDisplayBestSale("block");
        setDisplayNew("none");
    }
    const handleNew = () => {
        setStartNumber(47);
        setEndNumber(57);
        setDisplayButton("flex");
        setDisplayHighLight("none");
        setDisplaySale("none");
        setDisplayBestSale("none");
        setDisplayNew("block");
    }

    const handleButtonDown = () => {
        if (displayToday === "block" && displayButtonDown === "") {
            setStartNumber(58);
            setEndNumber(73);
            setDisplayButtonDown("none");
        }
    }

    const handleToday = () => {
        setStartNumber(58);
        setEndNumber(68);
        setDisplayButtonDown("");
        setDisplayToday("block");
        setDisplayHot("none");
        setDisplaySuperSale("none");
    }
    const handleHot = () => {
        setStartNumber(73);
        setEndNumber(83);
        setDisplayButtonDown("none");
        setDisplayToday("none");
        setDisplayHot("block");
        setDisplaySuperSale("none");
    }
    const handleSuperSale = () => {
        setStartNumber(84);
        setEndNumber(92);
        setDisplayButtonDown("none");
        setDisplayToday("none");
        setDisplayHot("none");
        setDisplaySuperSale("block");
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // const then = moment().set({'years': 2022, 'months': 4,'date':30,'hours':23,'minutes':59,'seconds':59}).year();
            const now = moment();
            const endMonth = moment().endOf('month').get('date');
            // console.log(endMonth)
            const days = endMonth - now.get('date');
            const hours = 23 - now.get('hours');
            const minutes = 59 - now.get('minutes');
            const seconds = 59 - now.get('seconds');
            if (days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0) {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
                setCountdown(true);
            } else {
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
                setCountdown(false);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        document.title = "Fresh Organic - Khuyến mại"
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        < >
            <div className="container-fluid">
                <div className="body">
                    <div>
                        <img className="top__banner1" src="https://theme.hstatic.net/1000309753/1000718324/14/food01_bannertop_image.jpg?v=209" alt="img" />
                    </div>
                    <div className="top">
                        <img className="top__banner2" src="https://theme.hstatic.net/1000309753/1000718324/14/food01_bannertop_2.jpg?v=209" alt="img" />
                    </div>
                    <div className="pageTitle">
                        <h1 className="pageTitle__text" style={{ color: 'white' }}>HÈ CỰC NÓNG, GIÁ CỰC SỐC</h1>
                    </div>
                    <div className="countdown">
                        <h3>{countdown?"ƯU ĐÃI KẾT THÚC SAU":"ƯU ĐÃI ĐÃ KẾT THÚC"}</h3>
                        <div id="clockdiv">
                            <Time timeTitle={"days"} time={"Ngày"} number={days} />
                            <Time timeTitle={"hours"} time={"Giờ"} number={hours} />
                            <Time timeTitle={"minutes"} time={"Phút"} number={minutes} />
                            <Time timeTitle={"seconds"} time={"Giây"} number={seconds} />
                        </div>
                    </div>
                    <nav>
                        <ul className="ul">
                            <div className="li">
                                <li className="li1" onClick={handleHighLight}>Nổi bật <div className="hr1" style={{ display: displayHighLight }} /></li>
                                <li className="li2" onClick={handleSale}>Khuyến mãi <div className="hr2" style={{ display: displaySale }} /></li>
                                <li className="li4" onClick={handleBestSale}>Bán chạy <div className="hr4" style={{ display: displayBestSale }} /></li>
                                <li className="li3" onClick={handleNew}>Sản phẩm mới <div className="hr3" style={{ display: displayNew }} /></li>
                            </div>
                        </ul>
                    </nav>
                    <div className="outstanding">
                        {dataImageUrl.map((dataImageUrl) => (
                            <Product srcImage={dataImageUrl.imgurl1} name={dataImageUrl.name} priceOrigin={dataImageUrl.priceOrigin} priceDiscount={dataImageUrl.priceDiscount} discount={dataImageUrl.discount} />
                        ))}
                        <div className="seemore" style={{ display: displayButton }}>
                            <button className="btn outstanding__btn" onClick={handleButton}>Xem thêm sản phẩm</button>
                        </div>
                    </div>
                    <div className="voucher">
                        {dataLandingPageVoucher.map((dataLandingPageVoucher) => (
                            <Voucher discount={dataLandingPageVoucher.discount} condition={dataLandingPageVoucher.condition} date={dataLandingPageVoucher.date} code={dataLandingPageVoucher.code} />
                        ))}
                    </div>
                    <div className="pageTitle">
                        <h1 className="pageTitle__text" style={{ color: 'white' }}>TOP SẢN PHẨM BÁN CHẠY</h1>
                    </div>
                    <nav>
                        <ul className="ul">
                            <li className="li1 li10" onClick={handleToday}>Ưu đãi hôm nay <div className="hr1 hr10" style={{ display: displayToday }} />
                            </li>
                            <li className="li2 li20" onClick={handleHot}>Sản phẩm hot <div className="hr2 hr20" style={{ display: displayHot }} />
                            </li>
                            <li className="li3 li30" onClick={handleSuperSale}>Siêu khuyến mãi <div className="hr3 hr30" style={{ display: displaySuperSale }} />
                            </li>
                        </ul>
                    </nav>
                    <div className="concessionary">
                        {dataImageUrl.map((dataImageUrl) => (
                            <Product srcImage={dataImageUrl.imgurl1} name={dataImageUrl.name} priceOrigin={dataImageUrl.priceOrigin} priceDiscount={dataImageUrl.priceDiscount} discount={dataImageUrl.discount} />
                        ))}
                        <div className="seemore" style={{ display: displayButtonDown }}>
                            <button className="btn concessionary__btn" onClick={handleButtonDown}>Xem thêm sản phẩm</button>
                        </div>
                    </div>
                    <div className="banners">
                        <div className="banner1">
                            {dataLandingPageImageUp.map((dataLandingPageImageUp) => (
                                <ImageBottom srcImage={dataLandingPageImageUp.srcImage} />
                            ))}
                        </div>
                        <div className="banner2">
                            {dataLandingPageImageDown.map((dataLandingPageImageDown) => (
                                <ImageBottom srcImage={dataLandingPageImageDown.srcImage} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;