import {Route, Routes} from "react-router-dom";
import About from "../pages/About.tsx";
import Posts from "../pages/Posts.tsx";
import Error from "../pages/Error.tsx";
import PostIdPage from "../pages/PostIdPage.tsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/" element={<Posts/>}/>
            <Route path="/posts/:id" element={<PostIdPage/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;