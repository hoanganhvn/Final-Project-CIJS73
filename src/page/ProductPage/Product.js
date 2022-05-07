import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./style.css"
import * as _ from 'lodash';
import { ProductItem } from "./components/ProductItem";
import {useFetch} from "../../hooks";
import { Link } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState([]);
    const [sort, setSort] = useState({
        by: '',
        direction: ''
    });

    const [data] = useFetch("https://625ed20e3b039517f1fcecfd.mockapi.io/img");
    const dataImgurl = _.slice(data, 0, 1);

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
        <>
            <div class="container-fluid total-product">
                <div className="container-banner">
                    <img src={dataImgurl.map(dataImgurl=>dataImgurl.imgurl)} alt="" />
                </div>
                <Container maxWidth="xl">

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <div className="box-header">
                                    <div></div>
                                    <div className="product">
                                        <Link to="/san-pham">
                                            Tất cả sản phẩm
                                        </Link>

                                    </div>

                                    <div className="header-sort">
                                    <span className="sort-title"> Lọc sản phẩm: </span>
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
                                                    updateSort({ by: "", direction: "" })
                                                    break;
                                            }
                                        }} defaultValue="">
                                            <option value="">None</option>
                                            <option value="increase_price">Giá: tăng dần</option>
                                            <option value="decrease_price">Giá: giảm dần</option>
                                            <option value="increase_name">Tên: A-Z</option>
                                            <option value="decrease_name">Tên: Z-A</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="product-detail">
                                    <ul className="product-top">
                                        {product.map((item) => {
                                            return (
                                                <Grid item xs={6} md={3}>
                                                    <ProductItem item={item} />
                                                </Grid>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </Grid>

                        </Grid>
                    </Box>
                </Container >
            </div>

        </>

    );
};

export default Product;