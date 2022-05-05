
function Product(props) {

    return (
        <>
            <li className="product-list">
                <h5 className="discount">-  {props.discount}%</h5>
                <div className="img-detail">
                    <img className="img-detail-1" src={props.image} alt="" />
                </div>
                <a className="name" href="Bánh_quy.html">
                    {props.name}
                </a>
                <h5 className="price">
                    <span className="price-red">  {props.price * (100 - props.discount) / 100 * 1000}đ</span>
                    <span className="price-cross">  {props.price * 1000}đ</span>
                </h5>
            </li>
        </>
    );
}

export default Product;