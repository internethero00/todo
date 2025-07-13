import MyInput from "../components/UI/input/MyInput.tsx";
import MyButton from "../components/UI/button/MyButton.tsx";
import {useContext} from "react";
import {AuthContext} from "../context/authContext.tsx";
import {useNavigate} from "react-router-dom";


const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        navigate("/posts");

    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput type={'text'} placeholder={'Enter the login'} />
                <MyInput type={'password'} placeholder={'Enter the password'} />
                <MyButton onClick={login}>Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;