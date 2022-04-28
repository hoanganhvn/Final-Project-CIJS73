import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./style.css"
import * as _ from 'lodash';
import { ProductItem } from "./components/ProductItem";

const Product = () => {
    const [product, setProduct] = useState([]);
    const [sort, setSort] = useState({
        by: '',
        direction: ''
    });
    // const [hoverRef, isHovered] = useHover();

    const fetchData = () => {
        axios
            .get("https://625d83154c36c75357761d85.mockapi.io/Product")
            .then((respone) => {
                let data = [...respone.data];
                if (_.isArray(data)) {
                    data = data.map((item) => {
                        return {
                            ...item,
                            priceAfterDiscount: ((item.price * (100 - item.discount) / 100).toFixed(2) * 1000)
                        }
                    })
                }
                ((sort.by !== "" && sort.direction !== "") && (data = _.orderBy(data, [sort.by], [sort.direction])));
                setProduct(data);
            });
    }

    const updateSort = (newSort) => {
        setSort(newSort);
    }

    useEffect(() => {
        fetchData()
    }, [sort]);



    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <Typography gutterBottom variant="h3" component="div">
                            Tất cả sản phẩm
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <select onChange={(e) => {
                            switch (e.target.value) {
                                case "increase_price":
                                    updateSort({ by: "priceAfterDiscount", direction: "asc" })
                                    break;
                                case "decrease_price":
                                    updateSort({ by: "priceAfterDiscount", direction: "desc" })
                                    break;
                                case "increase_name":
                                    updateSort({ by: "name", direction: "asc" })
                                    break;
                                case "decrease_name":
                                    updateSort({ by: "name", direction: "desc" })
                                    break;
                                default:
                                    break;
                            }
                        }} defaultValue="">
                            <option value="">None</option>
                            <option value="increase_price">Giá: tăng dần</option>
                            <option value="decrease_price">Giá: giảm dần</option>
                            <option value="increase_name">Tên: A-Z</option>
                            <option value="decrease_name">Tên: Z-A</option>
                        </select>
                    </Grid>
                    {product.map((item) => {
                        return (
                            <Grid item xs={3}>
                                <ProductItem item={item} />
                                {/* <Item>
                                    <img
                                        src={isHovered ? item.image[0] : item.image[1]}
                                        alt={item.tag}
                                        width="300"
                                        height="300"
                                        ref={hoverRef}
                                    />
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    {item.discount > 0 ? (
                                        <div style={{ display: "flex", gap: 20 }}>
                                            <Typography
                                                gutterBottom
                                                variant="subtitle1"
                                                component="div"
                                                style={{ textDecoration: "line-through" }}
                                            >
                                                {(item.price.toFixed(2) * 1000).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}đ
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="subtitle1"
                                                component="div"
                                            >
                                                {((item.price * (100 - item.discount) / 100).toFixed(2) * 1000).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}đ
                                            </Typography>
                                            <div className="box-discount">
                                                <Typography
                                                    gutterBottom
                                                    variant="subtitle1"
                                                    component="div"
                                                >
                                                    -{item.discount}%
                                                </Typography>
                                            </div>
                                        </div>
                                    ) : (
                                        <Typography
                                            gutterBottom
                                            variant="subtitle1"
                                            component="div"
                                        >
                                            {(item.price.toFixed(2) * 1000).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}đ
                                        </Typography>
                                    )}
                                    {item.inStock > 0 ? <Button variant="contained">THÊM VÀO GIỎ</Button> : <Button variant="contained" disabled>HẾT HÀNG</Button>}
                                </Item> */}
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Container >
    );
};

export default Product;
