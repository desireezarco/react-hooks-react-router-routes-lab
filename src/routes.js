import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";

const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/movie/:title",
      element: <Movie />
    },
    {
      path: "/directors",
      element: <Directors />
    },
    {
      path:"/actors",
      element: <Actors />
    }
  ]

export default routes;
