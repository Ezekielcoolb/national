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
import UserLogin from "../LoginPages/UserLogins/UserLogin";
import UserSignUP from "../LoginPages/UserLogins/UserSignUp";
import UserSignVerification from "../LoginPages/UserLogins/Verification";
import UserPersonalInfo from "../LoginPages/UserLogins/UserPersonalInformation";
import UserPasswordCreation from "../LoginPages/UserLogins/PasswordCreation";
import EventsDetails from "../component/News/EventDetailPage";
import MoreProject from "../component/News/MoreProjects";
import UserForgetPasswordVerification from "../LoginPages/UserLogins/UserForgetPasswordEmailVerify";
import UserForgetPassword from "../LoginPages/UserLogins/UserForgetPassword";
import Manifest from "../UserPages/Manifest";
import IncomingParkingDetials from "../UserPages/PakingPages/IncomingParkingDetails";
import UserComplain from "../UserPages/UserComplain";
import UserComplaintsDetails from "../UserPages/UserComplainDetails";
import MyTraffic from "../UserPages/TrafficPages/MyTrafficPage";
import MyTrafficDetials from "../UserPages/TrafficPages/MyTrafficPageDetails";
import UserPrivateRoutes from "../UserPages/UserPrivateRoutes";
import UserLodgedItem from "../UserPages/UserLodgedItem";
import AdminFlagItem from "../Admin/AdminFlagItems";
import AdminFlagedItemDetails from "../Admin/FlagedItemDetails";
import UserMessage from "../UserPages/UserMessage";
import PrivateTerm from "../component/PrivateTerm";
import TermsConditions from "../component/TermsCondition";

export default function Routers() {
  return useRoutes([
    {
      path: "/",
      element: <General />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/members", element: <Members /> },
        // {path: "/news&media", element: <NewsMedia />},
        { path: "/news&events", element: <Events /> },
        { path: "/event/details/:id", element: <EventsDetails /> },
        { path: "/news&others", element: <Project /> },
        { path: "/contact-us", element: <Contact /> },
        { path: "/project/:id", element: <MoreProject /> },
        { path: "/privacy-policy", element: <PrivateTerm /> },
        { path: "/terms-condition", element: <TermsConditions /> },
      ],
    },
    {
      path: "/users",
      element: <UserPrivateRoutes />,
      children: [
        { path: "/users/dashboard", element: <UserDashboard /> },
        { path: "/users/test", element: <AgencySelector /> },
        { path: "/users/rides", element: <Ride /> },
        { path: "/users/manifest", element: <Manifest /> },
        { path: "/users/ridesDetails/:id", element: <RideDetails /> },
        { path: "/users/lodgedItem", element: <UserLodgedItem /> },
        { path: "/users/history", element: <History /> },
        { path: "/users/itemDetails/:id", element: <ItemDetails /> },
        { path: "/users/complainDetails", element: <ComplainDetails /> },
        { path: "/users/emergencyDetails", element: <EmergencyDetails /> },
        { path: "/users/crimeDetails", element: <CrimeReportDetails /> },
        { path: "/users/traffic", element: <Traffic /> },
        { path: "/users/mytraffic", element: <MyTraffic /> },
        { path: "/users/trafficDetails/:id", element: <TrafficDetials /> },
        { path: "/users/mytraffic/details/:id", element: <MyTrafficDetials /> },
        { path: "/users/news", element: <News /> },
        { path: "/users/newsDetails", element: <NewsDetails /> },
        { path: "/users/settings", element: <Settings /> },
        { path: "/users/parking", element: <Parking /> },
        { path: "/users/messages", element: <UserMessage /> },
        { path: "/users/complain", element: <UserComplain /> },
        {
          path: "/users/complain/details/:id",
          element: <UserComplaintsDetails />,
        },
        { path: "/users/parking/details/:id", element: <ParkingDetials /> },
        {
          path: "/users/incoming/parking/details/:id",
          element: <IncomingParkingDetials />,
        },
        {
          path: "/users/explore-parking/details/:id",
          element: <GeneralParkingDetials />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminDashboardLayout />,
      children: [
        { path: "/admin/dashboard", element: <AdminDashboard /> },
        { path: "/admin/rides", element: <AdminRide /> },
        { path: "/admin/rides/details/:id", element: <AdminRideDetails /> },
        { path: "/admin/complaints", element: <Complaints /> },
        { path: "/admin/flagedItems", element: <AdminFlagItem /> },
        {
          path: "/admin/flagedItems/details/:id",
          element: <AdminFlagedItemDetails />,
        },
        {
          path: "/admin/complaintsDetails/:id",
          element: <ComplaintsDetails />,
        },
        { path: "/admin/settings", element: <AdminSetting /> },
      ],
    },
    { path: "/usersLogin", element: <UserLogin /> },
    { path: "/usersSignup", element: <UserSignUP /> },
    { path: "/usersEmailVerification", element: <UserSignVerification /> },
    { path: "/usersPersonalDetails", element: <UserPersonalInfo /> },
    { path: "/usersPasswordCreation", element: <UserPasswordCreation /> },
    { path: "/usersForgetPassword", element: <UserForgetPassword /> },
    {
      path: "/usersForgetPasswordVerification",
      element: <UserForgetPasswordVerification />,
    },
  ]);
}
