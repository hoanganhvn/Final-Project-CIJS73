import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import {  useState } from 'react';
import axios from 'axios';
import { useContext } from "react";
import Context from '../../../Context';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: "90%", sm: "70%", lg: "40%" },
    height: { xs: "80%", sm: "60%", lg: "90%" },
    bgcolor: 'background.paper',
    border: '2px solid #66a55f',
    borderRadius: '6px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

function LoginAndRegister(props) {
    const [error, setError] = useState("");
    const [login, setLogin] = useState("");
    const [processing, setProcessing] = useState(false);
    const { clickToGoToLogin, handleCloseLoginAndRegister } = props
    const value = useContext(Context);

    const fetchDataAccount = async () => {
        const respone = await axios.get("https://625d83154c36c75357761d85.mockapi.io/Account")
        return respone.data
    }

    const createNewAccount = async (first, last, user, pass) => {
        setProcessing(true)
        await axios
            .post(`https://625d83154c36c75357761d85.mockapi.io/Account`, {
                firstname: first,
                lastname: last,
                username: user,
                password: pass
            })
        setProcessing(false)
        clickToGoToLogin()
    }

    const handleSubmitLogin = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        const account = await fetchDataAccount()

        if (data.get('username') && data.get('password')) {
            const test_login = account.filter((item) => item.username === data.get('username') && item.password === data.get('password'))
            if (test_login.length === 0) {
                setError("Tên tài khoản hoặc mật khẩu không đúng. Vui lòng nhập lại!")
            } else {
                setLogin("Đăng nhập thành công")
                setError("")
                setTimeout(() => {
                    handleCloseLoginAndRegister()
                    value.setUsername(data.get('username'))
                    setLogin("")
                }, 2000);
            }
        }
        else {
            setError("Vui lòng nhập đầy đủ thông tin.")
        }
    };
    
     const handleSubmitRegister = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        const account = await fetchDataAccount()

        if (data.get('firstName') && data.get('lastName') && data.get('username') && data.get('password')) {
            const test = account.filter((item) => item.username === data.get('username'))
            if (test.length === 0) {
                createNewAccount(data.get('firstName'), data.get('lastName'), data.get('username'), data.get('password'))
                setError("")
            } else {
                setError("Tên tài khoản đã tồn tại. Vui lòng nhập lại!")
            }
        }
        else {
            setError("Vui lòng nhập đầy đủ thông tin.")
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Modal
                open={props.openLoginAndRegister}
                onClose={props.handleCloseLoginAndRegister}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box sx={style}>
                        <Avatar sx={{ m: 1, bgcolor: '#66a55f' }}>
                        </Avatar>
                        {props.openLogin && <Login onSubmitLogin={handleSubmitLogin} clickToGoToRegister={props.clickToGoToRegister} clickToGoToForgotPassword={props.clickToGoToForgotPassword} error={error} login={login} />}
                        {props.openRegister && <Register onSubmitRegister={handleSubmitRegister} clickToGoToLogin={props.clickToGoToLogin} error={error} processing={processing} />}
                        {props.openForgotPassword && <ForgotPassword clickToGoToLoginFromForgotPassword={props.clickToGoToLogin} />}
                    </Box>
                </Container>
            </Modal>
        </ThemeProvider>
    );
}

export default LoginAndRegister;