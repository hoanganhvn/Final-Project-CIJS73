import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Login(props) {

    return (
        <>
            <Typography component="h1" variant="h5">
                ĐĂNG NHẬP
            </Typography>
            <Box component="form" onSubmit={props.onSubmitLogin} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Địa chỉ Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Mật khẩu"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Ghi nhớ tài khoản"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    ĐĂNG NHẬP
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2" onClick={props.clickToGoToForgotPassword} >
                            Quên mật khẩu?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2" onClick={props.clickToGoToRegister}>
                            {"Chưa có tài khoản? Đăng Ký"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Login;