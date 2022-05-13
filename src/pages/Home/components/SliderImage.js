
function SliderImage(props) {

    return (
        <>
            <div>
                <img className="img-slide" src={props.number} style={{ width: '100%' }} />
            </div>
        </>
    );
}

export default SliderImage;
