import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../component/Nav/Nav";
import Footer from "../component/Home/Footer";


export default function General () {

     const location = useLocation();

   useEffect(() => {
    setTimeout(() => {
      // Scroll window (most common)
      window.scrollTo(0, 0);

      // Try common layout containers
      const main = document.querySelector("main");
      if (main && main.scrollTop !== 0) {
        main.scrollTop = 0;
      }

      const app = document.getElementById("root");
      if (app && app.scrollTop !== 0) {
        app.scrollTop = 0;
      }

      // Try body
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

    }, 100); // Delay ensures DOM is ready
  }, [location.pathname]);



    return (
        <>
        <NavBar />
        <main>
        <Outlet />
        </main>
        <Footer />
        </>
    )
}