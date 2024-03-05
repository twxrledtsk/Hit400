import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';


/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const ErrorPage = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Home = Loadable(lazy(()=>import("../views/home/home")));
const About = Loadable(lazy(()=> import('../views/about/About')));
const Companies = Loadable(lazy(()=> import("../views/Companies/Companies")));
const CompanyDetail =Loadable(lazy(()=>import("../views/CompanyDetails/CompanyDetail")));

const Router = [

  {
    path:"/",
    element: <BlankLayout/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },

      {
        path:"/about",
        element:<About/>
      }
    ]

  }
  ,

  {
    path: '/dashboard',
    element: <FullLayout />,
    children: [
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/dashboard/companies', exact: true, element:<Companies/> },
      { path: '/dashboard/company-details', exact: true, element:<CompanyDetail/> },
      { path: '*', element: <Navigate to="/dashboard/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <ErrorPage /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
