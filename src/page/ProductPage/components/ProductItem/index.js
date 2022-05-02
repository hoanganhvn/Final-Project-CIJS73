import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHover } from "../../../../hooks";

export const ProductItem = (props) => {

    const { item } = props
    const [hoverRef, isHovered] = useHover();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "left",
        color: theme.palette.text.secondary,
        width: 350,
        height: 450,
        paddingLeft: 20,
    }));

    return (
        <Item>
            <img
                src={isHovered ? item.image[1] : item.image[0]}
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
        </Item>
    );
}

