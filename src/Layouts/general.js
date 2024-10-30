import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/Nav/Nav";
import Footer from "../component/Home/Footer";


export default function General () {
    return (
        <>
        <NavBar />
        <Outlet />
        <Footer />
        </>
    )
}