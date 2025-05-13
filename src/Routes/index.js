import { useRoutes } from "react-router-dom";
import General from "../Layouts/general";
import Home from "../component/Home/Home";
import About from "../component/About/About";
import Members from "../component/Member/Member";
import NewsMedia from "../component/News/News";
import Events from "../component/News/Event";
import Project from "../component/News/Project";
import Contact from "../component/Contact/Contact";
import UserDashboardLayout from "../Controller/userController";
import UserDashboard from "../UserPages/UserDashboard";
import AgencySelector from "../test";
import Ride from "../UserPages/Ride";
import RideDetails from "../UserPages/RidePages/RideDetails";
import History from "../UserPages/History";
import ItemDetails from "../UserPages/HistoryPages/ItemDetails";
import ComplainDetails from "../UserPages/HistoryPages/ComplainDetails";
import EmergencyDetails from "../UserPages/HistoryPages/EmergencyDetails";
import CrimeReportDetails from "../UserPages/HistoryPages/CrimeReportDetails";
import Traffic from "../UserPages/Traffic";
import TrafficDetials from "../UserPages/TrafficDetails";
import News from "../UserPages/News/News";
import NewsDetails from "../UserPages/News/NewsDetails";
import Settings from "../UserPages/Setting";
import Parking from "../UserPages/Parking";
import AdminDashboardLayout from "../Controller/adminController";
import AdminDashboard from "../Admin/AdminDashboard";
import Complaints from "../Admin/Complaints";
import ComplaintsDetails from "../Admin/ComplaintsDetails";
import AdminSetting from "../Admin/AdminSettings";
import ParkingDetials from "../UserPages/PakingPages/ParkingDetails";
import GeneralParkingDetials from "../UserPages/PakingPages/GeneralParkingDetails";
import AdminRide from "../Admin/AdminRides";
import AdminRideDetails from "../Admin/AdminRideDetails";




export default function Routers () {
    return (
        useRoutes(
            [
                {
                    path : "/",
                    element: <General />,
                    children:  [
                        {path: "/", element: <Home />},
                        {path: "/about", element: <About />},
                        {path: "/members", element: <Members />},
                        {path: "/news&media", element: <NewsMedia />},
                        {path: "/news&events", element: <Events />},
                        {path: "/news&others", element: <Project />},
                        {path: "/contact", element: <Contact />}
                    ]
                },
                {
                    path : "/users",
                    element: <UserDashboardLayout />,
                    children:  [
                        {path: "/users/dashboard", element: <UserDashboard />},
                        {path: "/users/test", element: <AgencySelector />},
                        {path: "/users/rides", element: <Ride />},
                        {path: "/users/ridesDetails", element: <RideDetails />},
                        {path: "/users/history", element: <History />},
                        {path: "/users/itemDetails", element: <ItemDetails />},
                        {path: "/users/complainDetails", element: <ComplainDetails />},
                        {path: "/users/emergencyDetails", element: <EmergencyDetails />},
                        {path: "/users/crimeDetails", element: <CrimeReportDetails />},
                        {path: "/users/traffic", element: <Traffic />},
                        {path: "/users/trafficDetails", element: <TrafficDetials />},
                        {path: "/users/news", element: <News />},
                        {path: "/users/newsDetails", element: <NewsDetails />},
                        {path: "/users/settings", element: <Settings />},
                        {path: "/users/parking", element: <Parking />},
                        {path: "/users/parking/details", element: <ParkingDetials />},
                        {path: "/users/explore-parking/details", element: <GeneralParkingDetials />},

                    ]
                },
                {
                    path : "/admin",
                    element: <AdminDashboardLayout />,
                    children:  [
                        {path: "/admin/dashboard", element: <AdminDashboard />},
                         {path: "/admin/rides", element: <AdminRide />},
                         {path: "/admin/rides/details", element: <AdminRideDetails />},
                        {path: "/admin/complaints", element: <Complaints />},
                        {path: "/admin/complaintsDetails", element: <ComplaintsDetails />},
                        {path: "/admin/settings", element: <AdminSetting />},
                      
                    ]
                }
            ]
        )
    )
}