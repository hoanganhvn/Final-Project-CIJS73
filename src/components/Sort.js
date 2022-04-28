const Sort = (props) => {
    const { product } = props;
    return (
        <select>
            <option value="increase_price">Giá: tăng dần</option>
            <option value="decrease_price">Giá: giảm dần</option>
            <option value="increase_name">Tên: A-Z</option>
            <option value="decrease_name">Tên: Z-A</option>
        </select>
    );
}

export default Sort;