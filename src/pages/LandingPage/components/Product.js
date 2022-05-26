import { Link } from 'react-router-dom';

function Product({ srcImage, name, priceOrigin,priceDiscount, discount }) {
 
    return (
        <>
            <div className="product-item">
                <Link to="/san-pham">
                    <img className="img1" src={srcImage} alt="img" />
                </Link>
                <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                <p className="product__name">
                    <Link to="/san-pham">
                        {name}
                    </Link>
                </p>
                {discount === "" ?
                    <b>
                        <p className="product__price">{priceOrigin}</p>
                    </b>
                    :
                    <>
                        <b>
                            <p className="product__price">
                                <span className="price-aft">{priceDiscount}</span>
                                <span className="price-bef">{priceOrigin}</span>
                            </p>
                        </b>
                        <div className="product__discount">{"GIẢM " + discount}</div>
                    </>
                }
            </div>
        </>
    );
}

export default Product;