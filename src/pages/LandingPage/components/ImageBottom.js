import { Link } from 'react-router-dom';

function ImageBottom({ srcImage }) {

    return (
        <>
            <div className="banner-item banner">
                <Link to="/" >
                    <img className="banner-img" src={srcImage} alt="img" />
                </Link>
            </div>
        </>
    );
}

export default ImageBottom;