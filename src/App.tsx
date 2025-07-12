import {BrowserRouter} from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar.tsx";
import AppRouter from "./components/AppRouter.tsx";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
};

export default App;