import useFetch from "./useFetch";
import Product from "./Product";
import * as _ from 'lodash';

function BestsSellProduct() {
    const [data] = useFetch("https://625d83154c36c75357761d85.mockapi.io/Product");
    const data1 = _.slice(data, 0, 12);

    return (
        <>
            <div className="product-best">
                <a href="#">
                    Sản phẩm bán chạy
                </a>
            </div>
            <div className="product-detail-2">
                <div className="product-detail">
                    <ul className="product-top">
                        {data1.map(
                            (data1) => (
                                <Product discount={data1.discount} image={data1.image[0]} name={data1.name} price={data1.price} />
                            )
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default BestsSellProduct;
