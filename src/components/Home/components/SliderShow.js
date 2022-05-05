import Slider from "react-slick";
import { baseUrl } from "../config";
import SliderImage from "./SliderImage";

function SliderShow() {
    const settings = {
        customPaging: function (i) {
            return (
                <img className="demo" src={`${baseUrl}/home_category_${i + 1}_banner.jpg`} style={{ width: '100%' }} />
            );

        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const dataImage = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <div className="container">
                <Slider {...settings}>
                    {/* {dataImage.map(
                        (dataImage) => (
                            <SliderImage number={dataImage} />
                        )
                    )} */}
                    <div>
                        <img className="img-slide" src={baseUrl + "/home_category_1_banner.jpg"} style={{ width: '100%' }} />
                    </div>
                    <div>
                        <img className="img-slide" src={baseUrl + "/home_category_2_banner.jpg"} style={{ width: '100%' }} />
                    </div>
                    <div>
                        <img className="img-slide" src={baseUrl + "/home_category_3_banner.jpg"} style={{ width: '100%' }} />
                    </div>
                    <div>
                        <img className="img-slide" src={baseUrl + "/home_category_4_banner.jpg"} style={{ width: '100%' }} />
                    </div>
                    <div>
                        <img className="img-slide" src={baseUrl + "/home_category_5_banner.jpg"} style={{ width: '100%' }} />
                    </div>
                    <div>
                        <img className="img-slide" src={baseUrl + "/home_category_6_banner.jpg"} style={{ width: '100%' }} />
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default SliderShow;
