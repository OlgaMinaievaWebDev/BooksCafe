import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "../layouts/Root"
import Home from "../pages/Home"
import BookDetails from "../pages/BookDetails"
import UserCabinet from "../pages/UserCabinet"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

const router = createBrowserRouter([
 {
  path: '/',
  Component: Root, //Main Layout
  children: [
   {
    index: true,
    Component: Home
   },
   {
    path: 'book:id',
    Component: BookDetails
   },
   {
    path: 'cabinet',
    Component: UserCabinet
   },
   {
    path: 'auth',
    Component: AuthLayout,
    children: [
     {
      path: 'login',
      Component: Login
     },
     {
      path: 'signup',
      Component: Signup
     }
    ]
   }
  ]
 },

])

const Routes = () => <RouterProvider router={router} />;
export default Routes;
