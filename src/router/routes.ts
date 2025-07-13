import About from "../pages/About.tsx";
import Posts from "../pages/Posts.tsx";
import PostIdPage from "../pages/PostIdPage.tsx";
import Login from "../pages/Login.tsx";
import Error from "../pages/Error.tsx";
import React from "react";

interface RouteType {
    path: string;
    component: React.FC;
}

export const privateRoutes: RouteType[] = [
    {path:'/about',component:About},
    {path:'/posts',component:Posts},
    {path:'/',component:Posts},
    {path:'/posts/:id',component:PostIdPage},
    // {path:'*', component:Error},
]

export const publicRoutes: RouteType[] = [
    {path:'/login',component:Login}
]