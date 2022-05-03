import Slider from "react-slick";
import { baseUrl } from "../config";
import SliderImage from "./SliderImage";

function SliderShow() {
    const settings = {
        customPaging: function (i) {
            return (
                <img class="demo" src={`${baseUrl}/home_category_${i + 1}_banner.jpg`} style={{ width: '100%' }} />
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
                    {dataImage.map(
                        (dataImage) => (
                            <SliderImage number={dataImage} />
                        )
                    )}
                </Slider>
            </div>
        </>
    );
}

export default SliderShow;
