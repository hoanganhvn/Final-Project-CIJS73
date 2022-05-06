
function BannerOne(props) {

    return (
        <>
            <div className={props.class}>
                <div className="product-img-scale">
                    <img className={"product-img-scale-" + props.number} src={ props.imgurl} alt="" />
                </div>
                <h4 className="word1">{props.word1}</h4>
                <h2 className="word2">{props.word2}</h2>
                <h4 className="word3">{props.word3}</h4>
            </div>
        </>
    );
}

export default BannerOne;
