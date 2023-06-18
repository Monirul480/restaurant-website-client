import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../componentes/Login/Login";
import Register from "../componentes/Register/Register";
import Blog from "../componentes/Blog/Blog";
import Error from "../componentes/Error/Error";
import MainView from "../componentes/ViewRecipy/MainView";
import PrivateRoute from '../provider/PrivateRoute'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/viewRecipy/:id",
        element: (
          <PrivateRoute>
            <MainView></MainView>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://simply-recipes-server-monirul480.vercel.app/viewRecipy/${params.id}`),
      },
    ],
  },
]);

export default router;

