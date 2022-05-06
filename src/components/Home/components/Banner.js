import BannerOne from "./BannerOne";
import * as _ from 'lodash';
import {useFetch} from "../../../hooks";

function Banner() {
    const [data] = useFetch("https://625ed20e3b039517f1fcecfd.mockapi.io/img");
    const dataBanner = _.slice(data, 1, 4);

    return (
        <>
            <div className="product-img">
                {dataBanner.map(
                    (dataBanner) => (
                        <BannerOne class={dataBanner.class} number={dataBanner.numberImg} word1={dataBanner.word1} word2={dataBanner.word2} word3={dataBanner.word3} imgurl={dataBanner.imgurl}/>
                    )
                )}
            </div>
        </>
    );
}

export default Banner;
