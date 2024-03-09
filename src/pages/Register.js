import RegisterForm from "../components/register/RegisterForm";
import OTPForm from "../components/register/OTPForm";
import { useSelector } from "react-redux";
import { clearMessage, selectauth } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Toast from "../components/common/Toast";

const Register = () => {

    const navigate = useNavigate();

    const { sendOTP, registerSuccess, status, message } = useSelector(selectauth);

    useEffect(() => {
        if (registerSuccess) {
            return navigate("/");
        }
    }, [registerSuccess, navigate]);


    return (
        <>
            <Toast type={status === "failed" ? "error" : "success"} message={message} clearMessage={clearMessage} />
            {
                !sendOTP ?
                    <RegisterForm />
                    :
                    <OTPForm />
            }
        </>
    )
}

export default Register
