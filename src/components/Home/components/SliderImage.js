import { baseUrl } from "../config";

function SliderImage(props) {

    return (
        <>
            <div>
                <img className="img-slide" src={baseUrl + "/home_category_" + props.number + "_banner.jpg"} style={{ width: '100%' }} />
            </div>
        </>
    );
}

export default SliderImage;
