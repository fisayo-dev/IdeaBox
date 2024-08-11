import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/AppPage/HomePage";
import Signup from "./pages/AppPage/Signup";
import Login from "./pages/AppPage/Login";
// Dashboard Pages
import Ideas from "./pages/UserPage/Ideas";
import Create from "./pages/UserPage/Create";
import Profile from "./pages/UserPage/Profile";
import Activity from "./pages/UserPage/Activity";
import Logout from "./pages/UserPage/Logout";
import NotAvailable from "./pages/AppPage/NotAvailable";
import PrivateRoutes from "./utils/PrivateRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<NotAvailable />} />
      <Route index element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="" element={<PrivateRoutes />}>
        <Route path="/dashboard/ideas" element={<Ideas />} />
        <Route path="/dashboard/logout" element={<Logout />} />
        <Route path="/dashboard/create" element={<Create />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/activity" element={<Activity />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
