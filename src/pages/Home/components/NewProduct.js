import {useFetch} from "../../../hooks";
import Product from "./Product";
import * as _ from 'lodash';
import { Link } from 'react-router-dom';

function NewProduct() {
    const [data] = useFetch("https://625d83154c36c75357761d85.mockapi.io/Product");
    const dataImageUrl = _.slice(data, 0, 6);

    return (
        <>
            <div className="product">
            <Link to="/">
                    Sản phẩm mới
                </Link>
            </div>
            <div className="product-detail">
                <ul className="product-top">
                    {dataImageUrl.map(
                        (dataImageUrl) => (
                            <Product discount={dataImageUrl.discount} image={dataImageUrl.image[0]} name={dataImageUrl.name} price={dataImageUrl.price} id={dataImageUrl.id}/>
                        )
                    )}
                </ul>
            </div>
        </>
    );
}

export default NewProduct;
