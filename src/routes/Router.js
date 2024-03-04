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
const PersonalizedCampaigns = Loadable(lazy(()=> import('../views/PersonalizedCampaigns/PersonalizedCampaigns')));
const NegativeSentiments = Loadable(lazy(()=> import('../views/NegativeSentiments/NegativeSentiments')));
const CategorizeSentiments = Loadable(lazy(()=> import('../views/CategorizeSentiments/CategorizeSentiments')));
const CompanyRegistration = Loadable(lazy(()=> import("../views/CompanyRegistration/CompanyRegistration")));

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
      },
      {
        path:"/company-registration",
        element:<CompanyRegistration/>
      }
    ]

  }
  ,

  {
    path: '/dashboard',
    element: <FullLayout />,
    children: [
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/dashboard/personalize-campaigns', exact: true, element:<PersonalizedCampaigns/> },
      { path: '/dashboard/detect-negative-sentiments', exact: true, element:<NegativeSentiments/> },
      { path: '/dashboard/categorize-social-media-sentiments', exact: true, element:<CategorizeSentiments/> },
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
