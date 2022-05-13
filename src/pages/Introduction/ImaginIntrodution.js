import * as _ from 'lodash';
import { useFetch } from "../../hooks";

const ImaginIntrodution = () => {
    const [data] = useFetch("https://625ed20e3b039517f1fcecfd.mockapi.io/img");
    const dataBanner = _.slice(data, 1, 2);

    return (
        <>
            <img src={dataBanner.map(dataBanner => dataBanner.imgurl)} />
        </>
    )
}

export default ImaginIntrodution;