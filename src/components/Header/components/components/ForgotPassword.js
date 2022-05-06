import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ForgotPassword(props) {

    return (
        <>
            <Typography component="h1" variant="h5">
                Quên Mật Khẩu
            </Typography>
            <Typography component="h6" variant="body2" sx={{ my: 3, align: 'left' }}>
                Bạn quên mật khẩu? Hãy nhập địa chỉ email bạn đã đăng ký. Chúng tôi sẽ gửi mật khẩu mới vào email của bạn.
            </Typography>
            <Box component="form" noValidate onSubmit={props.onSubmitRegister} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Địa chỉ Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Nhận mật khẩu mới
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2" onClick={props.clickToGoToLoginFromForgotPassword}>
                            Đã nhớ ra mật khẩu? Đăng nhập ngay
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default ForgotPassword;