import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';
import Alert from "@mui/material/Alert";

function Login(props) {
    const { error } = props
    const { login } = props

    return (
        <>
            <Typography component="h1" variant="h5">
                ĐĂNG NHẬP
            </Typography>
            <Box component="form" onSubmit={props.onSubmitLogin} noValidate autoComplete="off" sx={{ mt: 1 }}>
                <TextField
                    id="username"
                    name="username"
                    required
                    fullWidth
                    margin="normal"
                    label="Tên người dùng"
                    autoFocus
                // autoComplete="username"
                />
                <TextField
                    id="password"
                    name="password"
                    required
                    fullWidth
                    margin="normal"
                    label="Mật khẩu"
                    type="password"
                // autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Ghi nhớ tài khoản"
                />
                {error && <FormHelperText error={true}>
                    {error}
                </FormHelperText>}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    ĐĂNG NHẬP
                </Button>
                {login && <Alert variant="outlined" severity="success" className="box-alert">
                    Đăng nhập thành công.
                </Alert>}
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