import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: "80%", sm: "70%", lg: "40%" },
    height: { xs: "60%", sm: "60%", lg: "80%" },
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
    };
    const [openLogin, setOpenLogin] = useState(true);
    const [openRegister, setOpenRegister] = useState(false);
    const [openForgotPassword, setOpenForgotPassword] = useState(false);
    const clickToGoToRegister = () => {
        setOpenLogin(false);
        setOpenRegister(true);
        setOpenForgotPassword(false);
    }
    const clickToGoToLogin = () => {
        setOpenLogin(true);
        setOpenRegister(false);
        setOpenForgotPassword(false);
    }
    const clickToGoToForgotPassword = () => {
        setOpenLogin(false);
        setOpenRegister(false);
        setOpenForgotPassword(true);
    }

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
                        {openLogin && <Login onSubmitLogin={handleSubmitLogin} clickToGoToRegister={clickToGoToRegister} clickToGoToForgotPassword={clickToGoToForgotPassword} />}
                        {openRegister && <Register onSubmitRegister={handleSubmitRegister} clickToGoToLogin={clickToGoToLogin} />}
                        {openForgotPassword && <ForgotPassword clickToGoToLoginFromForgotPassword={clickToGoToLogin} />}
                    </Box>
                </Container>
            </Modal>
        </ThemeProvider>
    );
}

export default LoginAndRegister;