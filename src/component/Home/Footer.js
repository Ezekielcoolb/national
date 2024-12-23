import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const FooterRap = styled.div`

 
  background: #1c4f96;
  color: white;
  bottom: 0;
  position: relative;
  .footer-1 {
    border-bottom: 1px solid #ffffff1a;
  }
  .foot-dot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;

    background: url("../images/footer-dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }
  
  @media (max-width: 480px) {
   height: auto;
  }
`;

const Footer = () => {
  return (
    <FooterRap>
      <div className="containers py-12">
        <div className="flex justify-between pb-8 gap-5  items-center flex-wrap footer-1">
          <Link to="/">
          <img
            style={{
              height: "92.62px",
              width: "218.06px", // Set a fixed width to prevent squeezing
              objectFit: "contain",
              display: "block",
              objectPosition: "top",
            }}
            src="./images/footer-img.png"
            alt="..."
          />
          </Link>
          <div className="flex gap-5 justify-between items-center">
          <Link to="#">
            <Icon
              icon="ri:facebook-fill"
              width="11.58"
              height="18"
              style={{ color: "white" }}
            />
            </Link>
            <Link to="#">
            <Icon
              icon="mdi:twitter"
              width="11.58"
              height="18"
              style={{ color: "white" }}
            />
            </Link>
            <Link to="#">
            <Icon
              icon="mdi:instagram"
              width="11.58"
              height="18"
              style={{ color: "white" }}
            />
            </Link>
            <Link to="#">
            <Icon
              icon="mdi:instagram"
              width="11.58"
              height="18"
              style={{ color: "white" }}
            />
            </Link>
          </div>
        </div>
        <div
          className=" flex flex-wrap gap-5 justify-between py-10 "
          style={{ fontFamily: "Roboto", fontSize: "16px" }}
        >
            <div style={{ lineHeight: "24px", width: "242px" }}>
              <p>
                Over the years, our commitment to excellence and passion for our
                has been recognized.
              </p>
            </div>
            <div
              className=" flex flex-col gap-4 "
              style={{ fontSize: "16px", color: "#FFFFFF8C" }}
            >
              <p
                style={{ color: "white", fontWeight: "700", fontSize: "20px" }}
              >
                Explore
              </p>
              <p>About Us</p>
              <p>Our Team</p>
              <p>Upcoming Events</p>
              <p>Latest News</p>
              <p>Contact</p>
            </div>
            <div
              className=" flex flex-col gap-4 "
              style={{ fontSize: "16px", color: "#FFFFFF8C" }}
            >
              <p
                style={{ color: "white", fontWeight: "700", fontSize: "20px" }}
              >
                Departments
              </p>
              <p>Jobs & Unemployment</p>
              <p>Business & Industry</p>
              <p>Roads & Transport</p>
              <p>Colture & Recreation</p>
              <p>Health & Medical</p>
            </div>
            <div
              className=" flex flex-col gap-4 "
              style={{ fontSize: "16px", color: "#FFFFFF8C" }}
            >
              <p
                style={{ color: "white", fontWeight: "700", fontSize: "20px" }}
              >
                Contact
              </p> <Icon
                  icon="fluent:call-24-filled"
                  width="13"
                  height="13"
                  style={{ color: "#FFFFFF8C" }}
                />
              <p className="flex gap-2 items-center">
                <Icon
                  icon="mdi:email-open-outline"
                  width="13"
                  height="13"
                  style={{ color: "#FFFFFF8C" }}
                />
                info@roadusersassociation.com
              </p>
              <p className="flex gap-2 items-center">
               
                +2347464531, +2345546864
              </p>
              <p className="flex gap-2 items-center">
                <Icon
                  icon="material-symbols:add-location-alt-outline-rounded"
                  width="13"
                  height="13"
                  style={{ color: "#FFFFFF8C" }}
                />
                112 Allen Avenue Ikeja, Lagos Nigeria
              </p>
            </div>
          </div>
       
        <div
          className="flex justify-center items-center"
          style={{
            marginTop: "70px",
            fontSize: "14px",
            textAlign: "center",
            fontFamily: "Roboto",
            fontWeight: "400",
            color: "#FFFFFF80",
          }}
        >
          <p style={{ textAlign: "center" }}>
            © 2024 Road Users Association. All rights reserved
          </p>
        </div>
      </div>
      <div className="foot-dot"></div>
    </FooterRap>
  );
};

export default Footer;
