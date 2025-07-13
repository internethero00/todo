import {BrowserRouter, useNavigate} from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar.tsx";
import AppRouter from "./components/AppRouter.tsx";
import {AuthContext} from "./context/authContext.tsx";
import {useEffect, useState} from "react";


const App = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
        </AuthContext.Provider>
    )
};

export default App;