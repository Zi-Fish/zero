import { createRouter, createWebHistory } from "vue-router"
const Home = () => import("@/views/home")
const Err = () => import("@/views/error")
const Login = () => import("@/views/login")
const Register = () => import("@/views/register")
const YuBlog=()=>import("@/views/yu_blog")
const routes = [
    { 
        path: "/", redirect: "/home" },
    ,
    {
        path: "/home", component: Home, name: "home"
    },
    {
        path: "/login", component: Login, name: "login"
    },
    {
        path: "/register", component: Register, name: "register"
    },
    {
        path: "/err", component: Err, name: "err"
    },
    {
        path:"/blog",component:YuBlog,name:"blog"
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

export default router; 