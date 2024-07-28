import  {Layout, RequireAuth } from "./components/layout/Layout";
import HomePage from "./routes/homePage/HomePage";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import Profile from "./routes/profile/Profile";
import Register from "./routes/register/Register";
import Login from "./routes/login/Login";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
       
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> }

      ],
    },
{
  path: "/",
  element: <RequireAuth />,
  children: [
    { path: "/profile", element: <Profile /> },
    { path: "/profile/update", element: <ProfileUpdatePage /> },

  ],
},

  ]);

  return <RouterProvider router={router} />;
}

export default App;
