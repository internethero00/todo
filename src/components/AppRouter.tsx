import {Route, Routes, useNavigate} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/routes.ts";
import {useContext, useEffect} from "react";
import {AuthContext} from "../context/authContext.tsx";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth);
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/login');
    }, []);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
            navigate('/posts')
        } else {
            navigate('/login')
        }
    }, [])
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route => {
                        const Component = route.component;
                        return <Route key={route.path} path={route.path} element={<Component/>}/>
                    }
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => {
                        const Component = route.component;
                        return <Route key={route.path} path={route.path} element={<Component/>}/>
                    }
                )}
            </Routes>
    );
};

export default AppRouter;