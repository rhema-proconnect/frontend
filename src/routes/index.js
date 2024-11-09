import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom';
import Login from "../pages/Login"
import Guard from '../layouts/Guard';
import Signup from '../pages/Signup';
import Board from '../pages/Board';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import EmailVerify from '../pages/EmailVerify';
import AddPage from '../pages/page/AddPage';
import AddService from '../pages/Service/AddService';
import Company from '../pages/Profil/Company';
import About from '../pages/About';
import Contact from '../pages/Contact';
import AddApp from '../pages/Appointement/AddApp';
import ValidationApp from '../pages/ValidationApp';
import AllApp from '../pages/Appointement/AllApp';
import NavBar from '../layouts/Nav/NavBar';
import AllService from '../pages/Service/AllService';
import AllPage from '../pages/page/AllPage';
import UpdatePag from '../pages/page/UpdatePag';
import DetailPage from '../pages/page/DetailPage';
import DetailService from '../pages/Service/DetailService';
import Support from '../pages/Support';
import PageManagement from '../pages/support/UserManagement';
import Test from '../pages/Test';
import ProfilValid from '../pages/support/ProfilValid';
import DetailPV from '../pages/support/DetailPV';
import DetailMono from '../pages/support/DetailMono';
import SimpleUser from '../pages/Profil/SimpleUser';
import Student from "../pages/Profil/Student"
import DetailSelfEmp from '../pages/support/DetailSelfEmp';
import SimpleUsers from '../pages/support/SimpleUser';
import DetailSU from '../pages/support/DetailSU';
import SelfEmployee from '../pages/support/SelfWorker';
import StudentValid from '../pages/support/StudentValid';
import SEmployee from '../pages/Profil/SelfEmployee';
import DetailStudent from '../pages/support/DetailStudent';
import CreditCard from '../components/CreditCard';
import Monosites from '../pages/Monosites';
import Mail from '../pages/Mail';
import Reply from '../pages/Reply';
import ForgotPass from '../pages/ForgotPass';
import ResetPass from '../pages/ResetPass';
import StudentMono from '../pages/support/StudentMono';
import DetailSdtM from '../pages/support/DetailSdtM';

const AUTH = 'auth';
const DASH ='dash';

export const AUTH_PATH = {
    root: AUTH,
    login:`${AUTH}/login`,
}

export const DASH_PATH = {
    root: DASH,
    login:`${DASH}/`,
}

export default function Routes() {

    return useRoutes([
        {path: "/", element:<Home />},
        {path: "/monosites", element:<Monosites />},
        {path: "/detail/:id", element:<Detail />},
        {path: "/signup", element:<Signup />},
        {path: "/login", element: <Login />}, 
        {path:"/about", element:<About />},
        {path:"/contact", element:<Contact />},
        {path:"/users/:id/verify/:token", element:<EmailVerify />},
        {path:"/forgotpass", element:<ForgotPass />},
        {path:"/reset-password/:token", element:<ResetPass />},
        
        {path:"/dash", element:(<Guard><Board /> </Guard>)},
        {path:"/addPage/:id", element:(<Guard><NavBar /><AddPage /></Guard>)},
        {path:"/company/:id", element:(<Guard><Company /></Guard>)},
        {path:"/users", element:(<Guard><SimpleUser /></Guard>)},
        {path:"/student", element:(<Guard><Student /></Guard>)},
        {path:"/self_employee", element:(<Guard><NavBar /><SelfEmployee /></Guard>)},
        {path:"/s_employee", element:(<Guard><SEmployee /></Guard>)},
        {path:"/support", element:(<Guard><NavBar /><Support /></Guard>)},
        {path:"/mailing", element:(<Guard><NavBar /><Mail /></Guard>)},
        {path:"/profil/management", element:(<Guard><NavBar /><ProfilValid /></Guard>)},
        {path:"/detail/suser/:id", element:(<Guard><NavBar /><DetailSU /></Guard>)},
        {path:"/detail/PV/:id", element:(<Guard><NavBar /><DetailPV /></Guard>)},
        {path:"/validPage", element:(<Guard><NavBar /><PageManagement /></Guard>)},
        {path:"/valid_student_page", element:(<Guard><NavBar /><StudentMono /></Guard>)},
        {path:"/test", element:<Test />},
        {path:"/addApp/", element:(<Guard><AddApp /></Guard>)},
        {path:"/updatePage/:id", element:(<Guard><NavBar /><UpdatePag /></Guard>)},
        {path:"/student_list", element:(<Guard><NavBar /><StudentValid /></Guard>)},
        {path:"/addService", element:(<Guard><NavBar /><AddService /></Guard>)},
        {path:"/appointements", element:(<Guard><NavBar /><AllApp /></Guard>)},
        {path:"/allService", element:(<Guard><NavBar /><AllService /></Guard>)},
        {path:"/allPage/:id", element:(<Guard><NavBar /><AllPage /></Guard>)},
        {path:"/page/:id", element:(<Guard><NavBar /><DetailMono /></Guard>)},
        {path:"/addApp/:id", element:(<Guard><AddApp /></Guard>)},
        {path:"/validation/app/:id", element:(<Guard><NavBar /><ValidationApp /></Guard>)},
        {path:"/detail/page/:id", element:(<Guard><NavBar /><DetailPage /></Guard>)},
        {path:"/detail/stdM/:id", element:(<Guard><NavBar /><DetailSdtM /></Guard>)},
        {path:"/detail/sw/:id", element:(<Guard><NavBar /><DetailSelfEmp /></Guard>)},
        {path:"/detail/service/:id", element:(<Guard><NavBar /><DetailService /></Guard>)},
        {path:"/detail/sdt/:id", element:(<Guard><NavBar /><DetailStudent /></Guard>)},
        {path:"/simple_users", element:(<Guard><NavBar /><SimpleUsers /></Guard>)},
        {path:"/reply/:id", element:(<Guard><NavBar /><Reply /></Guard>)},
        {path:"/credit", element:(<Guard><CreditCard /></Guard>)},
        // {
        //     path: "/",
        //     element: (<Guard> <DashbordLayout /> </Guard>), 
        //     children:[
        //         {path: "/dash", element:<Board />, index:true},
        //         {path: "/yeah", element:<Yeah />},
        //     ],
        // },
        // {path: "/", element:<Navigate to="/home" />, index:true, },
        {path: "*", element:<Error />},
    ])
}