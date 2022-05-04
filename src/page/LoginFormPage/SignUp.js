import axios from "axios";
import { useEffect, useState } from "react";
// import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SignUp = (props) => {
    const [account, setAccount] = useState([]);
    const [status, setStatus] = useState(false);

    const fetchDataAccount = () => {
        axios
            .get("https://625d83154c36c75357761d85.mockapi.io/Account")
            .then((respone) => {
                setAccount(respone.data);
            });
    }

    useEffect(() => {
        fetchDataAccount()
    }, []);

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .min(2, "Too Short!")
            .max(10, "Too Long!")
            .required("Required"),
        password: yup
            .string()
            .min(2, "Too Short!")
            .max(10, "Too Long!")
            .required("Required")
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (values) => {
            const found = account.find(values.username === account.username);
            console.log(found);
        },
        validationSchema: validationSchema
    });

    return (
        <>
            <Typography component="h1" variant="h5">
                ĐĂNG KÝ
            </Typography>
            <Box component="form" noValidate onSubmit={props.onSubmitRegister} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="Họ"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Tên"
                            name="lastName"
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Địa chỉ Email"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Mật khẩu"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="Khi bạn nhấn vào nút đăng nhập là đồng ý vô điều kiện với: Điều khoản Dịch vụ và Bảo mật của chúng tôi."
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
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

export default SignUp;