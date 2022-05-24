import BannerOne from "./BannerOne";
import * as _ from 'lodash';
import { useFetch } from "../../../hooks";
import database from "../../../helpers/Firebase.js";
import { ref, child, get, onValue } from "firebase/database";

function Banner() {
    // const [data] = useFetch("https://625ed20e3b039517f1fcecfd.mockapi.io/img");
    // const dataBanner = _.slice(data, 1, 4);

    const userId = [2, 3, 4];
    const dataBanner = [];
    userId.map((userId) => {
        const starCountRef = ref(database, 'users/' + userId);

        onValue(starCountRef, (snapshot) => {
            const data1 = snapshot.val();
            // console.log(data);
            dataBanner.push(data1);
        });
        // console.log(dataBanner.map(dataBanner => dataBanner));
    })


    return (
        <>
            <div className="col-md-12">
                <div className="product-img">
                    {dataBanner.map(
                        (dataBanner) => (
                            <BannerOne class={dataBanner.class} number={dataBanner.numberImg} word1={dataBanner.word1} word2={dataBanner.word2} word3={dataBanner.word3} imgurl={dataBanner.imgurl} />
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default Banner;
