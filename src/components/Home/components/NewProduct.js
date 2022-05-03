import useFetch from "./useFetch";
import Product from "./Product";
import * as _ from 'lodash';

function NewProduct() {
    const [data] = useFetch("https://625d83154c36c75357761d85.mockapi.io/Product");
    const data1 = _.slice(data, 0, 6);

    return (
        <>
            <div className="product">
                <a href="#">
                    Sản phẩm mới
                </a>
            </div>
            <div className="product-detail">
                <ul className="product-top">
                    {data1.map(
                        (data1) => (
                            <Product discount={data1.discount} image={data1.image[0]} name={data1.name} price={data1.price} />
                        )
                    )}
                </ul>
            </div>
        </>
    );
}

export default NewProduct;
