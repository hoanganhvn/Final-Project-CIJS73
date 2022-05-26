
function Voucher({ discount,condition,date,code }) {

    return (
        <>
            <div className="voucher__item">
                <div className="voucher__item--content">
                    <div className="discount__amount">
                        <b id="discount">GIẢM NGAY <span className="amount"> {discount}</span></b>
                    </div>
                    <ul className="co">
                        <li className="condition">{condition}</li>
                        <div>
                            <button className="copyBtn" onclick="navigator.clipboard.writeText('5MNLITQQA3ER'); this.innerHTML=('Đã sao chép')">Sao
                                chép mã</button>
                        </div>
                    </ul>
                </div>
                <div className="exp">
                    <p>Hạn sử dụng:</p>
                    <p>{date}</p>
                    <p>{code}</p>
                </div>
            </div>
        </>
    );
}

export default Voucher;