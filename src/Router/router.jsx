import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shopMenu/Menu";
import SignUp from "../Components/SignUp";
import Services from "../pages/Services/Services";
import Offers from "../pages/Offers/Offers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/menu",
          element:<Menu/>
        },
        {
          path:"/services",
          element:<Services/>
        },
        {
          path:"/offers",
          element:<Offers/>
        }

      ]
    },
    {
      path: "/signup",
      element: <SignUp/>
    }
  ]);

  export default router;