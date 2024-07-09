import Home from "./pages/Home";
import Questions from "./pages/Questions";


import {
    createBrowserRouter
  } from "react-router-dom";

import { routePaths } from "./index.const";



const router = createBrowserRouter([
    {
      path: routePaths.root,
      element: <Home />,
    }, {
        path: routePaths.questions,
        element: <Questions />
    }, {
        path: routePaths.report,
        element: <Report />
    }
  ]);

  export default router;
