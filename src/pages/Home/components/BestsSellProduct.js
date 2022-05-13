import {useFetch} from "../../../hooks";
import Product from "./Product";
import * as _ from 'lodash';
import { Link } from 'react-router-dom';

function BestsSellProduct() {
    const [data] = useFetch("https://625d83154c36c75357761d85.mockapi.io/Product");
    const dataImgurl = _.slice(data, 0, 12);

    return (
        <>
            <div className="product-best">
                <Link to="/san-pham">
                    Sản phẩm bán chạy
                </Link>
            </div>
            <div className="product-detail-2">
                <div className="product-detail">
                    <ul className="product-top">
                        {dataImgurl.map(
                            (dataImgurl) => (
                                <Product discount={dataImgurl.discount} image={dataImgurl.image[0]} name={dataImgurl.name} price={dataImgurl.price} id={dataImgurl.id}/>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default BestsSellProduct;
