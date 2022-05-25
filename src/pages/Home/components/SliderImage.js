
function SliderImage(props) {

    return (
        <>
            <div>
                <img className="img-slide" src={props.number} style={{ width: '100%' }} alt=""/>
            </div>
        </>
    );
}

export default SliderImage;
