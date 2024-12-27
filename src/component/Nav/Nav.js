import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";


const NavBar = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
    
  const {pathname} = useLocation()
  useEffect(() => {
    setClicked(false); 
  }, [pathname]);

  return (
   

    <nav
      className="flex flex-col"
      style={{ width: "100%", height: "129px" }}
    >
      <div
      id="top-nav"
        className="flex  justify-between text-sm items-center px-5 py-4 px-6"
        style={{
          right: "0",
          backgroundColor: "#56BF2A",
          fontWeight: "400",
          color: "white",
          height: "50px",
          marginLeft: "10%",
          fontFamily: "roboto",
        }}
      >
        <div className="top-address flex justify-between items-center gap-5">
          <div>
            <p>info@roadusersassociation.com</p>
          </div>
          <div>
            <p>112 Allen Avenue Ikeja Lagos Nigeria</p>
          </div>
        </div>
        <div className="login-div flex justify-between items-center gap-10">
          <p className=""><span><Link to="#">Complaints</Link></span> / <span><Link to="#">Login</Link></span></p>
          <div className="flex justify-between gap-3.5">
            <Link to="#">
            <Icon
              icon="entypo-social:twitter"
              width="14.36"
              height="14"
              style={{ color: "white",  }}
            />
            </Link>
            <Link to="#">
            <Icon
              icon="mdi:facebook"
              width="14.36"
              height="14"
              style={{ color: "white" }}
            />
            </Link>
            <Link to="#">
            <Icon
              icon="mdi:instagram"
              width="14.36"
              height="14"
              style={{ color: "white" }}
            />
            </Link>
            <Link to="#">
            <Icon
              icon="ph:pinterest-logo"
              width="14.36"
              height="14"
              style={{ color: "white" }}
            />
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
         
          fontFamily: "inter",
          fontWeight: "500",
          color: "#5C6A7F",
        }}
        className="flex px-3 text-base items-center py-3 justify-between "
      >
        <div id="nav" className="flex  flex-row justify-between items-center gap-7 flex-nowrap">
            <div className="flex gap-">
                
            <div className="nav-mobile" onClick={handleClick}>
                        {clicked ? <Icon width="50px" height="50px"  icon="prime:times" /> : <Icon width="50px" height="50px" icon="mdi-light:menu" />}
                    </div>
         <Link to="/">
          <img
            style={{
              height: "50.91px",
              width: "150.77px", // Set a fixed width to prevent squeezing
              objectFit: "contain",
              display: "block",
              objectPosition: "top",
            }}
            src="./images/Frame.png"
            alt="..."
          />
          </Link>
            </div>
          <div
          id="#navbar"
            style={{}}
            className={clicked? "navbar active" : "flex flex-row navbar gap-3 flex-grow justify-between items-center w-full"}
          >
            <Link to="/" ><p className="nav-link-border">Home</p></Link>
            <Link to="/about" ><p className="nav-link-border">About us</p></Link>
            <Link to="/members" > <p className="nav-link-border">Membership</p></Link>
            <Link to="/news&media" ><p className="nav-link-border">News & Media</p></Link>
            <Link to="/contact" > <p className="nav-link-border">Contact</p></Link>
            <div id="nav-call-hidden" className="flex justify-center items-center nav-contact">
            <div >
              <Icon
                icon="solar:phone-calling-linear"
                width="30"
                height="30"
                style={{ color: "#56BF2A" }}
              />
            </div>
            <div >
              <p className="nav-call" style={{ fontSize: "12px" }}>Call us:</p>
              <a
                style={{
                  fontWeight: "700",
                  textDecoration: "none",
                  color: "#1C4F96",
                }}
                href=""
              >
                +234 812354656
              </a>
            </div>
            </div>
           
          
          </div>
        </div>

        <div id="nav-contact-col" className="flex justify-center items-center gap-7">
          <div id="nav-call-div" className="flex justify-center items-center nav-contact">
            <div >
              <Icon
                icon="solar:phone-calling-linear"
                width="30"
                height="30"
                style={{ color: "#56BF2A" }}
              />
            </div>
            <div >
              <p className="nav-call" style={{ fontSize: "12px" }}>Call us:</p>
              <a
                style={{
                  fontWeight: "700",
                  textDecoration: "none",
                  color: "#1C4F96",
                }}
                href=""
              >
                +234 812354656
              </a>
            </div>
          </div>
          <Link to="/admin/dashboard">
            <div
              className="p-5 flex justify-center items-center join "
              style={{
                color: "white",
                fontWeight: "700",
                height: "55px",
                width: "180px",
                borderRadius: "100px",
                backgroundColor: "#1C4F96",
              }}
            >
              Admin
            </div>
          </Link>
          <Link to="/users/dashboard">
            <div
              className="p-5 flex justify-center items-center join "
              style={{
                color: "white",
                fontWeight: "700",
                height: "55px",
                width: "180px",
                borderRadius: "100px",
                backgroundColor: "#1C4F96",
              }}
            >
              JOIN US
            </div>
          </Link>
        </div>
      </div>
    
    </nav>
    
   
  );
};
export default NavBar;
