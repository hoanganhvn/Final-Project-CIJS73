import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css"
import * as _ from 'lodash';
import { ProductItem } from "../ProductPage/components/ProductItem";

const ProductDetail = () => {
    const [detail, setDetail] = useState();
    const [selectedImg, setSelectedImg] = useState();
    const [product, setProduct] = useState([]);

    const fetchProductById = async (id) => {
        await axios
            .get(`https://625d83154c36c75357761d85.mockapi.io/Product/${id}`)
            .then((respone) => {
                setDetail(respone.data);
            });
    }

    const fetchData = () => {
        axios
            .get("https://625d83154c36c75357761d85.mockapi.io/Product")
            .then((respone) => {
                let data = [...respone.data];
                data = _.sampleSize(data, 5);
                console.log(data);
                setProduct(data);
            });
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "left",
        color: theme.palette.text.secondary,
    }));

    const handleChangeImg = (newImg) => {
        setSelectedImg(newImg)
    };

    useEffect(() => {
        fetchProductById(5)
        fetchData()
    }, []);

    useEffect(() => {
        detail && setSelectedImg(detail.image[0])
    }, [detail]);

    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }}>
                {detail && (
                    <Grid container spacing={2}>
                        <Grid item xs={2} className="box-small-img" >
                            {detail.image.map((img) => {
                                return (<img src={img} alt={img.tag} onClick={() => { handleChangeImg(img) }} />)
                            })}
                        </Grid>
                        <Grid item xs={5} className="box-main-img">
                            <img src={selectedImg} alt={selectedImg ? selectedImg.tag : ""} />
                        </Grid>
                        <Grid item xs={5}>
                            <Item>
                                <Typography gutterBottom variant="h5" component="div">
                                    {detail.name}
                                </Typography>
                                <hr />
                                {detail.discount > 0 ? (
                                    <div style={{ display: "flex", gap: 20 }}>
                                        <Typography
                                            gutterBottom
                                            variant="subtitle1"
                                            component="div"
                                            style={{ textDecoration: "line-through" }}
                                        >
                                            {((detail.price.toFixed(2) * 1000).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","))}đ
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant="subtitle1"
                                            component="div"
                                        >
                                            {(((detail.price * (100 - detail.discount) / 100).toFixed(2) * 1000).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","))}đ
                                        </Typography>
                                        <div className="box-discount">
                                            <Typography
                                                gutterBottom
                                                variant="subtitle1"
                                                component="div"
                                            >
                                                -{detail.discount}%
                                            </Typography>
                                        </div>
                                    </div>
                                ) : (
                                    <Typography
                                        gutterBottom
                                        variant="subtitle1"
                                        component="div"
                                    >
                                        {((detail.price.toFixed(2) * 1000).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","))}đ
                                    </Typography>
                                )}
                                <hr />
                                {detail.inStock > 0 ? <Button variant="contained">THÊM VÀO GIỎ</Button> : <Button variant="contained" disabled>HẾT HÀNG</Button>}
                                <hr />
                                <span><b>Mô tả</b></span>
                                {detail.details.map((content) => {
                                    return (
                                        <Typography gutterBottom variant="body1" component="div">
                                            {content} < br />
                                        </Typography>
                                    )
                                })}

                            </Item>
                        </Grid>
                    </Grid>
                )}
                {product && (
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography gutterBottom variant="h5" component="div">
                                Sản phẩm liên quan
                            </Typography>
                        </Grid>
                        {product.map((item) => {
                            return (
                                <Grid item xs={12}>
                                    <ProductItem item={item} />
                                </Grid>
                            );
                        })}
                    </Grid>
                )}

            </Box>
        </Container>
    );
};

export default ProductDetail;