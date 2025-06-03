import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserDashboardLayout from "../Controller/userController";


const UserPrivateRoutes = () => {
      const token = localStorage.getItem("ruaUserToken");

    return(
        token ? <UserDashboardLayout> <Outlet /> </UserDashboardLayout> : <Navigate to="/usersLogin" />
    )
}
export default UserPrivateRoutes