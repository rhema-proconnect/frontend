import './App.css';
import { BrowserRouter, } from 'react-router-dom'
import AppRoute from './routes';
import Header from './layouts/Header/Header';
// import { useEffect } from 'react';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header/>
            <AppRoute />
        </BrowserRouter>
      </div>
  );
}

export default App;




// // import { useEffect } from "react";
// // react-router components
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// // @mui material components
// // import { ThemeProvider } from "@mui/material/styles";
// // import CssBaseline from "@mui/material/CssBaseline";
// // Material Kit 2 React themes
// // import theme from "assets/theme";
// import PrivateRoute from "./PrivateRoute";
// import Header from "./layouts/Header/Header"
// // import "./app.css";
// //import ThemeCustomization from 'themes';

// // Material Kit 2 React routes
// // import routes from "routes";
// // import { Navbar } from "components/NavBarV";
// import Board from "./pages/Board";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Error from "./pages/Error";
// import Detail from "./pages/Detail";
// import AddPage from "./pages/AddPage";
// import Home from "./pages/Home";
// import AddService from "./pages/AddService";
// import EmailVerify from "./pages/EmailVerify";

// export default function App() {
//   // const { pathname } = useLocation();

//   // Setting page scroll to 0 when changing the route
//   // useEffect(() => {
//   //   document.documentElement.scrollTop = 0;
//   //   document.scrollingElement.scrollTop = 0;
//   // }, [pathname]);

//   // const getRoutes = (allRoutes) =>
//   //   allRoutes.map((route) => {
//   //     if (route.collapse) {
//   //       return getRoutes(route.collapse);
//   //     }
//   //     if (route.route) {
//   //       return <Route exact path={route.route} element={route.component} key={route.key} />;
//   //     }
//   //     return null;
//   //   });

//   return (
//     <BrowserRouter>
//       {/* <CssBaseline /> */}

//       <Header />
//       <Routes>
//         {/* {getRoutes(routes)} */}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/detail/:id" element={<Detail />} />
//         <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
//         <Route
//           path="/dash"
//           element={
//             <PrivateRoute>
//               <Board />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/addPage"
//           element={
//             <PrivateRoute>
//               <AddPage />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/addService"
//           element={
//             <PrivateRoute>
//               <AddService />
//             </PrivateRoute>
//           }
//         />
//         {/* <Route path="*" element={<Navigate to="/error" />} /> */}
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
