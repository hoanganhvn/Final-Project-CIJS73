import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';

function Register(props) {
    const { error, processing } = props

    return (
        <>
            <Typography component="h1" variant="h5">
                ĐĂNG KÝ
            </Typography>
            <Box component="form" noValidate autoComplete="off" onSubmit={props.onSubmitRegister} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            required
                            fullWidth
                            label="Họ"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="lastName"
                            name="lastName"
                            required
                            fullWidth
                            label="Tên"

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="username"
                            name="username"
                            required
                            fullWidth
                            label="Tên tài khoản"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            required
                            fullWidth
                            label="Mật khẩu"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="Khi bạn nhấn vào nút đăng nhập là đồng ý vô điều kiện với: Điều khoản Dịch vụ và Bảo mật của chúng tôi."
                        />
                    </Grid>
                </Grid>
                {error && <FormHelperText error={true}>
                    {error}
                </FormHelperText>}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={processing}
                >
                    ĐĂNG KÝ
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2" onClick={props.clickToGoToLogin}>
                            Đã có tài khoản? Đăng nhập ngay
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Register;