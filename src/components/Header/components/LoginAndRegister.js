import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    const [account, setAccount] = useState([]);
    const [error, setError] = useState("");

    const fetchDataAccount = () => {
        axios
            .get("https://625d83154c36c75357761d85.mockapi.io/Account")
            .then((respone) => {
                setAccount(respone.data);
            });
    }

    const createNewAccount = (first, last, user, pass) => {
        axios
            .post(`https://625d83154c36c75357761d85.mockapi.io/Account`, {
                firstname: first,
                lastname: last,
                username: user,
                password: pass
            })
    }

    useEffect(() => {
        fetchDataAccount()
    }, []);

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const handleSubmitRegister = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
        });

        if (data.get('firstName') && data.get('lastName') && data.get('username') && data.get('password')) {
            const test = account.filter((item) => item.username === data.get('username'))
            if (test.length === 0) {
                createNewAccount(data.get('firstName'), data.get('lastName'), data.get('username'), data.get('password'))
                setError("")
            } else {
                setError("Username đã tồn tại. Vui lòng nhập username khác.")
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
                        {props.openLogin && <Login onSubmitLogin={handleSubmitLogin} clickToGoToRegister={props.clickToGoToRegister} clickToGoToForgotPassword={props.clickToGoToForgotPassword} />}
                        {props.openRegister && <Register onSubmitRegister={handleSubmitRegister} clickToGoToLogin={props.clickToGoToLogin} error={error} />}
                        {props.openForgotPassword && <ForgotPassword clickToGoToLoginFromForgotPassword={props.clickToGoToLogin} />}
                    </Box>
                </Container>
            </Modal>
        </ThemeProvider>
    );
}

export default LoginAndRegister;