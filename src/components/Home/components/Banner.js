import BannerOne from "./BannerOne";

function Banner() {
    const dataBanner = [
        {
            class: "breakfast",
            numberImg: "1",
            word1: "Khuyến mãi tới 50%",
            word2: "Món ngon buổi sáng",
            word3: "MUA NGAY",
        },
        {
            class: "france",
            numberImg: "2",
            word1: "BOUILLABAISSE",
            word2: "SALAD KIỂU PHÁP",
            word3: "XEM THÊM",
        },
        {
            class: "healthy",
            numberImg: "3",
            word1: "Sản phẩm mới",
            word2: "BUỔI SÁNG HEALTHY",
            word3: "XEM THÊM",
        },
    ];
    return (
        <>
            <div className="product-img">
                {dataBanner.map(
                    (dataBanner) => (
                        <BannerOne class={dataBanner.class} number={dataBanner.numberImg} word1={dataBanner.word1} word2={dataBanner.word2} word3={dataBanner.word3} />
                    )
                )}
            </div>
        </>
    );
}

export default Banner;
