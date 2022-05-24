import Slider from "react-slick";
import SliderImage from "./SliderImage";
import { useFetch } from "../../../hooks";
import * as _ from 'lodash';
// import database from "../../../helpers/Firebase.js";
// import { ref, child, get, onValue } from "firebase/database";

function SliderShow() {
    const [data] = useFetch("https://625ed20e3b039517f1fcecfd.mockapi.io/img");
    const dataImage = _.slice(data, 4, 10);

    // const dataImage = [];
    // const userId = [5, 6, 7, 8, 9, 10];

    // userId.map((userId) => {
    //     const starCountRef = ref(database, 'users/' + userId);

    //     onValue(starCountRef, (snapshot) => {
    //         const data1 = snapshot.val().imgurl;
    //         // console.log(data);
    //         dataImage.push(data1);
    //     });
    //     console.log(dataImage.map(dataBanner => dataBanner));
    // })



    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img className="demo" src={dataImage[i].imgurl} style={{ width: '100%' }} />
                    {/* <img className="demo" src={dataImage[i]} style={{ width: '100%' }} /> */}
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
                            // <SliderImage number={dataImage} />
                        )
                    )}
                </Slider>
            </div>
        </>
    );
}

export default SliderShow;
