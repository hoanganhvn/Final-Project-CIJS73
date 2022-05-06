import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: "80%", sm: "70%", lg: "40%" },
    height: { xs: "50%", sm: "40%", lg: "60%" },
    bgcolor: 'background.paper',
    border: '2px solid #66a55f',
    borderRadius: '6px',
    boxShadow: 24,
    p: 4,
};

const theme = createTheme({
    palette: {
        primary: {
            main: '#66a55f',
        },
        secondary: {
            main: '#66a55f',
        },
    },
});

function Cart(props) {

    return (
        <>
            <ThemeProvider theme={theme}>
                <Modal
                    open={props.openCart}
                    onClose={props.handleCloseCart}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} >
                        <Typography id="modal-modal-title" variant="h6" component="h2" align="center" sx={{ mb: 1 }}>
                            GIỎ HÀNG
                        </Typography>
                        <div className="icon-cart">
                            <i className="fa fa-cart-plus" />
                        </div>
                        <div className="word-cart">
                            <h4>Hiện chưa có sản phẩm</h4>
                        </div>
                        <hr />
                        <Grid container sx={{ color: 'text.primary', my: 3 }} >
                            <Grid item xs={6}>
                                <Typography>TỔNG TIỀN:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{ color: "red", fontWeight: 'bold' }} align="right">0đ</Typography>
                            </Grid>
                        </Grid>
                        <div className="btn-cart">
                            <button className="money-cart1">XEM GIỎ HÀNG</button>
                            <button className="money-cart2">THANH TOÁN</button>
                        </div>
                    </Box>
                </Modal>
            </ThemeProvider>
        </>
    );
}

export default Cart;
