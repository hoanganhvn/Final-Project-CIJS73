import Slider from "react-slick";
import SliderImage from "./SliderImage";
import { useFetch } from "../../../hooks";
import * as _ from 'lodash';

function SliderShow() {
    const [data] = useFetch("https://625ed20e3b039517f1fcecfd.mockapi.io/img");
    const dataImage = _.slice(data, 4, 10);

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img className="demo" src={dataImage[i].imgurl} style={{ width: '100%' }} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="container">
                <Slider {...settings}>
                    {dataImage.map(
                        (dataImage) => (
                            <SliderImage number={dataImage.imgurl} />
                        )
                    )}
                </Slider>
            </div>
        </>
    );
}

export default SliderShow;
