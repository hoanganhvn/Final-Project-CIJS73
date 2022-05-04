import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css";
import * as _ from "lodash";
import { ProductItem } from "../ProductPage/components/ProductItem";
import { useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";

const ProductDetail = () => {
    const [detail, setDetail] = useState();
    const [selectedImg, setSelectedImg] = useState();
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(false);
    const params = useParams();

    const fetchProductById = async (id) => {
        await axios
            .get(`https://625d83154c36c75357761d85.mockapi.io/Product/${id}`)
            .then((respone) => {
                setDetail(respone.data);
                if (respone.data.inStock > 0) {
                    setCount(1)
                } else setCount(0)
            });
    };

    const fetchData = () => {
        axios
            .get("https://625d83154c36c75357761d85.mockapi.io/Product")
            .then((respone) => {
                let data = [...respone.data];
                data = _.sampleSize(data, 4);
                setProduct(data);
            });
    };

    const updateProductInStock = (id, inStockProduct) => {
        setDetail({ ...detail, inStock: inStockProduct });
        axios.put(`https://625d83154c36c75357761d85.mockapi.io/Product/${id}`, {
            inStock: inStockProduct,
        });
        if (inStockProduct > 0) {
            setCount(1)
        } else setCount(0)
    };

    const handleChangeImg = (newImg) => {
        setSelectedImg(newImg);
    };

    useEffect(() => {
        fetchProductById(params.productId);
        fetchData();
    }, [params.productId]);

    useEffect(() => {
        detail && setSelectedImg(detail.image[0]);
    }, [detail]);

    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }}>
                {detail && (
                    <Grid container spacing={2} className="box-total">
                        <Grid item xs={2} className="box-small-img">
                            {detail.image.map((img) => {
                                return (
                                    <img
                                        src={img}
                                        alt={img.tag}
                                        onClick={() => {
                                            handleChangeImg(img);
                                        }}
                                    />
                                );
                            })}
                        </Grid>
                        <Grid item xs={5} className="box-main-img">
                            <img src={selectedImg} alt={selectedImg ? selectedImg.tag : ""} />
                        </Grid>
                        <Grid item xs={5} className="box-content">
                            <div>
                                <h1 className="title-product">{detail.name}</h1>
                                <hr />
                                {detail.discount > 0 ? (
                                    <div style={{ display: "flex", gap: 20 }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            style={{ textDecoration: "line-through" }}
                                            className="box-price"
                                        >
                                            {(detail.price.toFixed(2) * 1000)
                                                .toString()
                                                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                                            đ
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div" className="box-price">
                                            {(
                                                (
                                                    (detail.price * (100 - detail.discount)) /
                                                    100
                                                ).toFixed(2) * 1000
                                            )
                                                .toString()
                                                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                                            đ
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div" className="box-discount">
                                            -{detail.discount}%
                                        </Typography>
                                    </div>
                                ) : (
                                    <Typography gutterBottom variant="h5" component="div" className="box-price">
                                        {(detail.price.toFixed(2) * 1000)
                                            .toString()
                                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                                        đ
                                    </Typography>
                                )}
                                <hr />
                                <div className="box-input-value">
                                    <input
                                        type="button"
                                        value="-"
                                        className="btnSub"
                                        onClick={() => {
                                            count > 0 ? setCount(count - 1) : setCount(0);
                                        }}
                                    />
                                    <input type="text" value={count} className="txtInput" max={detail.inStock} />
                                    <input
                                        type="button"
                                        value="+"
                                        className="btnAdd"
                                        onClick={() => {
                                            count < detail.inStock ? setCount(count + 1) : setCount(count);
                                        }}
                                    />
                                    <div className="box-instock">Tồn kho: {detail.inStock}</div>
                                </div>
                                <div className="box-button">
                                    {detail.inStock > 0 ? (
                                        <Button
                                            variant="contained"
                                            onClick={() => {
                                                if (detail.inStock >= count) {
                                                    updateProductInStock(detail.id, detail.inStock - count)
                                                    setStatus(true)
                                                }
                                            }}
                                            style={{ height: 40 }}
                                        >
                                            THÊM VÀO GIỎ
                                        </Button>
                                    ) : (
                                        <Button variant="contained" disabled>
                                            HẾT HÀNG
                                        </Button>
                                    )}
                                    {status && (
                                        <Alert onClose={() => { setStatus(false) }} variant="outlined" severity="success" className="box-alert">
                                            Thêm thành công !
                                        </Alert>
                                    )}
                                </div>
                                <hr />
                                <span>
                                    <b>Mô tả sản phẩm</b>
                                </span>
                                {detail.details.map((content) => {
                                    return (
                                        <Typography gutterBottom variant="body1" component="div">
                                            • {content} <br />
                                        </Typography>
                                    );
                                })}
                            </div>
                        </Grid>
                    </Grid>
                )}
                {product && (
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="div"
                                align="center"
                            >
                                Các sản phẩm khác
                            </Typography>
                        </Grid>
                        {product.map((item) => {
                            console.log(item);
                            return (
                                <Grid item xs={3}>
                                    <ProductItem item={item} />
                                </Grid>
                            );
                        })}
                    </Grid>
                )}
            </Box>
        </Container >
    );
};

export default ProductDetail;
