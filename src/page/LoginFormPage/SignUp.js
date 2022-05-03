import axios from "axios";
import { useEffect, useState } from "react";
// import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from 'yup';

const SignUp = () => {
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
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        name="username"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        name="password"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;