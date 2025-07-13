import {Link, useNavigate} from "react-router-dom";
import MyButton from "../button/MyButton.tsx";
import {useContext} from "react";
import {AuthContext} from "../../../context/authContext.tsx";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth');
        navigate('/login')
    }


    return (
        <div className={'navbar'}>
            <MyButton onClick={logout}>
                Exit
            </MyButton>
            <div className={'navbar__links'}>
                <Link to={'/about'}>About</Link>
                <Link style={{marginLeft: '10px'}} to={'/posts'}>Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;