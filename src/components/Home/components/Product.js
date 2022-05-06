
function Product(props) {

    return (
        <>
            <li className="product-list">
                <h5 className={props.discount !== 0 ? "discount" : "discount-opacity"}>-  {props.discount}%</h5>
                <div className="img-detail">
                    <img className="img-detail-1" src={props.image} alt="" />
                </div>
                <a className="name" href="Bánh_quy.html">
                    {props.name}
                </a>
                <h5 className="price">
                    {props.discount !== 0 ?
                        <>
                            <span className="price-red">  {(props.price * (100 - props.discount) / 100 * 1000).toString()
                                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}đ</span>
                            <span className="price-cross">  {(props.price * 1000).toString()
                                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}đ</span>
                        </>
                        :
                        <>
                            <span className="price-red-no-discount">  {(props.price * (100 - props.discount) / 100 * 1000).toString()
                                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}đ</span>
                            <span className="price-cross-opacity">  {(props.price * 1000).toString()
                                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}đ</span>
                        </>
                    }

                </h5>
            </li>
        </>
    );
}

export default Product;
