import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const HomeSection = styled.section`
  position: relative;
  background-image: url("../images/home-img-bg.jpg");
  background-size: 100% 100%;
  background-position: center;
  height: 700px; /* Full height */
  display: flex;
  padding-left: 135px;
  padding-top: 161px;
  align-items: center;
//   justify-content: center;
  color: white;
  
  /* Dark overlay on the background */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
    z-index: 1;
  }

  /* Ensuring content sits above the dark overlay */
  .content {
    position: relative;
    z-index: 2;
    
    max-width: 570px;
  }

  h1 {
    font-size: 70px;
    font-weight: 700;
    line height: 75px;
    font-family: Bricolage Grotesque;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 14px;
    font-weight: 800;
    font-family: Inter;
    margin-bottom: 10px;
  }

  .buttons {
    display: flex;
    gap: 15px;
    justify-content: flex-start;
    
    button {
    width: 183.19px;
    height: 55px;
    font-family: Inter;
    font-weight: 600;
    line-height: 19.36px;
      padding: 0.8rem 1.5rem;
      font-size: 16px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:first-child {
        background-color:  #56BF2A;; /* Green for Get Started */
        color: white;
      }

      &:last-child {
        background-color: transparent;
        color: white;
        border: 1px solid white; /* Outline button for Learn More */
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
const OtherSection = styled.div`
  font-family: Inter;
  button {
    width: 183.19px;
    height: 55px;
    font-family: Inter;
    font-weight: 600;
    line-height: 19.36px;
    padding: 0.8rem 1.5rem;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
    background: #56bf2a;

    &:hover {
      opacity: 0.8;
    }
  }

  .D-1 {
    background: linear-gradient(90deg, #f3f4f7 0%, rgba(254, 253, 253, 0) 100%);
    width: 48px;
    height: 48px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center; /* Correct typo here */
    color: #5c6a7f;
    font-size: 14px;
  }

  .influence {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 700;
    color: #112240;
    line-height: 21.6px;
    height: 183px;
    width: 370px;
    border-radius: 8px;
    border: 1px solid #e3e6ef;
    background: white;
    color: black;
    position: relative; /* Make sure influence is positioned relative */
    z-index: 2; /* Make sure it's above the .dots */
  }

  .dots {
    position: absolute;
    top: 1100px; /* Adjust positioning to be underneath the content */
    left: 0;
    width: 100%;
    height: 200px;
    background: url("../images/dot-img.png");
    background-color: white;
    z-index: 1; /* Ensure it stays below the content */
  }

  .blue-dot {
    position: absolute;
    top: 2100px;
    width: 100%;
    height: 200px;

    background: url("../images/blue_dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }

  .sideCard {
    box-shadow: 0px 20px 100px 0px #0000001a;
    width: 180px;
    height: 197px;
    gap: 0px;
    border-radius: 5px 0px 0px 0px;
    opacity: 0px;
    margin-top: 300px;
    margin-right: -40px;
    z-index: 1;
    background: white;
  }
  .services-section {
    display: flex;
    justify-content: space-between;
    // padding: 40px;
    background-color: #0d4a88;
    color: white;
  }

  .services-info {
    max-width: 400px;
  }

  .services-info h3 {
    font-size: 14px;
    text-transform: uppercase;
    color: #56bf2a;
  }

  .services-info h1 {
    font-size: 36px;
    margin: 10px 0;
  }

  .services-info p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .contact-btn {
    background-color: #56bf2a;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
  }

  .services-section {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    background-color: #0d4a88;
    color: white;
  }

  .services-info {
    max-width: 400px;
  }

  .services-info h3 {
    font-size: 14px;
    text-transform: uppercase;
    color: #56bf2a;
  }

  .services-info h1 {
    font-size: 36px;
    margin: 10px 0;
  }

  .services-info p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .contact-btn {
    background-color: #56bf2a;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
  }

  /* General styling for the services section */
  .services-section {
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
    // padding: 40px;
    background-color: #1c4f96;
    color: white;
  }

  .services-info {
    max-width: 312px;
  }

  .services-info h3 {
    text-transform: uppercase;
    color: white;
  }

  .services-info h1 {
    max-width: 250px;
    font-size: 45px;
    font-weight: 700;
    font-family: Bricolage Grotesque;
  }

  .services-info p {
    font-size: 16px;
    line-height: 24px;
  }

  /* Styling for the image section with two images */
  .image-section {
    display: flex;
    gap: 20px; /* Space between the two images */
  }

  .image-overlay {
    position: relative;
    width: 371px; /* Adjust width as needed */
    height: 421px; /* Adjust height as needed */
    background-size: cover;
    background-position: center;
    border-radius: 10px;
  }

  /* First image (Road Safety Management) */
  .image-overlay:nth-child(1) {
    background-image: url("../images/road_1.jpg");
  }

  /* Second image (Road Traffic Management) */
  .image-overlay:nth-child(2) {
    background-image: url("../images/road-2.jpg");
  }

  /* Gradient overlay on the images */
  .overlay-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(
      359.95deg,
      #021230 0.05%,
      rgba(2, 18, 48, 0) 113.96%
    );
  }

  /* Text content on the images */
  .text-content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
  }

  .text-content h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    max-width: 188px;
  }
  .round-arrow {
    backdrop-filter: blur(5px);
    background: #ffffff33;
  }
  .logic-shadow {
    box-shadow: 0px 15px 50px 0px #00000014;
    boder-radius: 15px;
    width: 580px;
    height: 427px;
  }
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(true);
  const [clicked, setClicked] = useState(false);
  const handleToggle = () => [setIsOpen(!isOpen)];
  const secondToggle = () => {
    setClicked(!clicked);
  };
  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <HomeSection>
        <div className="content">
          <p>WELCOME TO ROAD USERS ASSOCIATION</p>
          <h1>The National Road Transport Organization.</h1>
          <div className="buttons">
            <button className="flex justify-around items-center">
              <div>Get Started</div>
              <div
                className="flex justify-center items-center"
                style={{
                  backgroundColor: "white",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                }}
              >
                <Icon
                  icon="weui:arrow-filled"
                  width="5.56"
                  height="14"
                  style={{ color: "#56bf2a" }}
                />
              </div>
            </button>
            <button>Learn More</button>
          </div>
        </div>
      </HomeSection>
      <OtherSection>
        <div className="">
          <div
            style={{
              width: "100vw",
              backgroundColor: "#1c4f96",
              color: "white",
            }}
          >
            <p className="py-14 text-center">
              <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                RUA delivers for its individual and corporate members.{" "}
              </span>
              <a style={{ textDecoration: "white" }} href="#">
                Our Department
              </a>
            </p>

            {/* Dots background */}
            <div className="dots"></div>
            <div className="flex justify-center gap-7">
              <div className="influence justify-center px-7">
                <div className="flex justify-between items-center ">
                  <img
                    style={{
                      height: "34px",
                      width: "34px",
                      objectFit: "contain",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/Icon.png"
                    alt="..."
                  />
                  <div className="D-1 items-center">D1</div>
                </div>
                <p style={{ lineHeight: "21.6px", marginTop: "20px" }}>
                  Influence
                </p>
              </div>

              <div className="influence justify-center px-7">
                <div className="flex justify-between items-center ">
                  <img
                    style={{
                      height: "34px",
                      width: "34px",
                      objectFit: "contain",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/Icon.png"
                    alt="..."
                  />
                  <div className="D-1 items-center">D1</div>
                </div>
                <p style={{ lineHeight: "21.6px", marginTop: "20px" }}>
                  Intelligence
                </p>
              </div>

              <div className="influence justify-center px-7">
                <div className="flex justify-between items-center ">
                  <img
                    style={{
                      height: "34px",
                      width: "34px",
                      objectFit: "contain",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/Icon.png"
                    alt="..."
                  />
                  <div className="D-1 items-center">D1</div>
                </div>
                <p style={{ lineHeight: "21.6px", marginTop: "20px" }}>
                  Access
                </p>
              </div>
            </div>
          </div>
          <div className="containers">
            <div
              className="flex gap-32 justify-between items-center"
              style={{ marginTop: "152px", marginBottom: "100px" }}
            >
              <div className="flex">
                <div
                  style={{
                    fontFamily: "Bricolage Grotesque",
                    color: "#112240",
                    overflow: "hidden",
                    borderRadius: "5px",
                  }}
                  className="sideCard flex flex-col justify-center items-center"
                >
                  <div
                    style={{
                      position: "relative",
                      background: "#56bf2a",
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      top: "-45px", // Move it upwards by half of its height
                      left: "-30px", // Move it to the left by half of its width
                      zIndex: "-1",
                      marginBottom: "-50px",
                      transform: "translate(-10%, -15%)", // Ensures that half of the circle goes beyond the corner
                    }}
                  ></div>
                  <p
                    style={{
                      fontSize: "90px",
                      fontWeight: "700",
                      lineHeight: "80px",
                      marginTop: "-100px",
                    }}
                  >
                    12
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontFamily: "500",
                      lineHeight: "22px",
                      maxWidth: "102.48px",
                    }}
                  >
                    years of existence
                  </p>
                </div>
                <div style={{ height: "558px", width: "464px" }}>
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/image_1.png"
                    alt="..."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "800",
                    color: "#56bf2a",
                    lineHeight: "16.94px",
                  }}
                >
                  THE VOICE OF ROAD TRANSPORT
                </p>
                <h2
                  style={{
                    lineHeight: "55px",
                    color: "#112240",
                    fontWeight: "700",
                    fontFamily: "Bricolage Grotesque",
                    marginTop: "15px",
                    fontSize: "45px",
                    maxWidth: "453px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p
                  style={{
                    lineHeight: "24px",
                    color: "#5c6a7f",
                    maxWidth: "431px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. In ac facilisi
                  ultrices nulla tempus neque in. Pharetra volutpat turpis
                  parturient a egestas sed nulla nisl egestas. Nisl nunc massa
                  at id. Cursus eu urna dolor convallis auctor vitae
                  scelerisque. Lobortis mauris auctor placerat magnis. Cras
                  montes habitant leo sed. Habitant sapien urna risus nibh
                  viverra vestibulum nec. Felis id id a aliquet a eu.
                </p>
                <button className="flex justify-around items-center">
                  <div>Read More</div>
                  <div
                    className="flex justify-center items-center"
                    style={{
                      backgroundColor: "white",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                    }}
                  >
                    <Icon
                      icon="weui:arrow-filled"
                      width="5.56"
                      height="14"
                      style={{ color: "#56bf2a" }}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center items-center gap-8"
            style={{ backgroundColor: "#eef5ff", height: "135.19px" }}
          >
            <div
              style={{
                borderTop: "4px solid #1c4f96",
                width: "50.83px",
                height: "4px",
              }}
            ></div>
            <p
              style={{
                fontFamily: "Bricolage Grotesque",
                fontSize: "24px",
                textAlign: "center",
                fontWeight: "500px",
                color: "#112240",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Odio viverra massa.
            </p>
            <div
              style={{
                borderTop: "4px solid #1c4f96",
                width: "50.83px",
                height: "4px",
              }}
            ></div>
          </div>
          <div style={{ backgroundColor: "#1c4f96" }}>
            <div className="blue-dot"></div>
            <div className="services-section items-center containers">
              {/* Left Section */}
              <div className="services-info flex flex-col gap-5">
                <h3>SERVICES</h3>
                <h1>What we do</h1>
                <p>
                  RUA actively shapes the future of the industry, working with
                  businesses, industry experts, CEOs, politicians, researchers,
                  and everyone else involved in road transport at regional and
                  national levels.
                </p>
                <button className="flex justify-around items-center">
                  <div>Get in Touch</div>
                  <div
                    className="flex justify-center items-center"
                    style={{
                      backgroundColor: "white",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                    }}
                  >
                    <Icon
                      icon="weui:arrow-filled"
                      width="5.56"
                      height="14"
                      style={{ color: "#56bf2a" }}
                    />
                  </div>
                </button>
              </div>

              {/* Right Section - Two Images with Gradient and Text */}
              <div className="image-section">
                {/* First Image */}
                <div className="image-overlay">
                  <div className="overlay-gradient"></div>
                  <div className="text-content px-5 gap-12 flex justify-between">
                    <h2>Road Safety Management</h2>
                    <div
                      className="flex justify-center items-center round-arrow"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      <Icon
                        icon="solar:arrow-right-outline"
                        width="28"
                        height="28"
                        style={{ color: "black" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Second Image */}
                <div className="image-overlay">
                  <div className="overlay-gradient"></div>
                  <div className="text-content px-5 gap-12 flex justify-between">
                    <h2>Road Traffic Management</h2>
                    <div
                      className="flex justify-center items-center round-arrow"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      <Icon
                        icon="solar:arrow-right-outline"
                        width="28"
                        height="28"
                        style={{ color: "black" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ paddingTop: "100px" }}
              className="flex gap-7 justify-between items-center containers"
            >
              <div className="logic-shadow">
                <div className="flex">
                  <div
                    style={{
                      width: "290px",
                      height: "214px",
                      borderRight: "1px solid #e3e6ef",
                      borderBottom: "1px solid #e3e6ef",
                    }}
                    className="flex flex-col justify-center items-center"
                  >
                    <p
                      style={{
                        color: "#112240",
                        fontFamily: "Bricolage Grotesque",
                        fontWeight: "700",
                        fontSize: "60px",
                        lineHeight: "60px",
                      }}
                    >
                      60%
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#898d95",
                        lineHeight: "32px",
                      }}
                    >
                      LOGISTICS
                    </p>
                  </div>
                  <div
                    style={{
                      width: "290px",
                      height: "214px",
                      borderBottom: "1px solid #e3e6ef",
                    }}
                    className="flex flex-col justify-center items-center"
                  >
                    <p
                      style={{
                        color: "#112240",
                        fontFamily: "Bricolage Grotesque",
                        fontWeight: "700",
                        fontSize: "60px",
                        lineHeight: "60px",
                      }}
                    >
                      40%
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#898d95",
                        lineHeight: "32px",
                      }}
                    >
                      MOBILITY
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div
                    style={{
                      width: "290px",
                      height: "214px",
                      borderRight: "1px solid #e3e6ef",
                    }}
                    className="flex flex-col justify-center items-center"
                  >
                    <p
                      style={{
                        color: "#112240",
                        fontFamily: "Bricolage Grotesque",
                        fontWeight: "700",
                        fontSize: "60px",
                        lineHeight: "60px",
                      }}
                    >
                      5+
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#898d95",
                        lineHeight: "32px",
                      }}
                    >
                      STATES
                    </p>
                  </div>
                  <div
                    style={{ width: "290px", height: "214px" }}
                    className="flex flex-col justify-center items-center"
                  >
                    <p
                      style={{
                        textAlign: "center",
                        color: "#112240",
                        fontFamily: "Bricolage Grotesque",
                        fontWeight: "700",
                        fontSize: "60px",
                        lineHeight: "60px",
                      }}
                    >
                      40%
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#898d95",
                        lineHeight: "32px",
                      }}
                    >
                      MEMBERS ORGANIZATION
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2
                  style={{
                    maxWidth: "500px",
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: "700",
                    fontSize: "35px",
                    lineHeight: "55px",
                    color: "#112240",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Seed.
                </h2>
                <div
                  className="flex flex-col gap-3 py-4"
                  onClick={handleIsClicked}
                  style={{
                    borderBottom: "1px solid #e3e6ef",
                    cursor: "pointer",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <h3
                      style={{
                        fontWeight: "600",
                        fontSize: "19px",
                        lineHeight: "32px",
                        color: "#112240",
                      }}
                    >
                      You deserve time to recover
                    </h3>
                    {isClicked ? (
                      <Icon
                        icon="ri:arrow-up-s-line"
                        width="16.3"
                        height="19"
                        style={{ color: "#112240", fontWeight: "900" }}
                      />
                    ) : (
                      <Icon
                        icon="ri:arrow-down-s-line"
                        width="16.3"
                        height="19"
                        style={{ color: "#112240", fontWeight: "900" }}
                      />
                    )}
                  </div>

                  {isClicked ? (
                    <p style={{ maxWidth: "482px" }}>
                      Lorem ipsum dolor sit amet consectetur. Eget gravide
                      fermentum viverra mi. At ipsum convallis tortor laculis
                      viverra dignissim velit ultrices. Diam fringilla risus mi
                      eget natoque.
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div
                  className="flex flex-col gap-3 py-4"
                  onClick={handleToggle}
                  style={{
                    borderBottom: "1px solid #e3e6ef",
                    cursor: "pointer",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <h3
                      style={{
                        fontWeight: "600",
                        fontSize: "19px",
                        lineHeight: "32px",
                        color: "#112240",
                      }}
                    >
                      Don't settle for less than you deserve
                    </h3>
                    {isOpen ? (
                      <Icon
                        icon="ri:arrow-up-s-line"
                        width="16.3"
                        height="19"
                        style={{ color: "#112240", fontWeight: "900" }}
                      />
                    ) : (
                      <Icon
                        icon="ri:arrow-down-s-line"
                        width="16.3"
                        height="19"
                        style={{ color: "#112240", fontWeight: "900" }}
                      />
                    )}
                  </div>

                  {isOpen ? (
                    <p style={{ maxWidth: "482px" }}>
                      At ipsum convallis tortor laculis viverra dignissim velit
                      ultrices. Diam fringilla risus mi eget natoque.
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div
                  className="flex flex-col gap-3 py-4"
                  onClick={secondToggle}
                  style={{ cursor: "pointer" }}
                >
                  <div className="flex justify-between items-center">
                    <h3
                      style={{
                        fontWeight: "600",
                        fontSize: "19px",
                        lineHeight: "32px",
                        color: "#112240",
                      }}
                    >
                      Experience you can trust
                    </h3>
                    {clicked ? (
                      <Icon
                        icon="ri:arrow-up-s-line"
                        width="16.3"
                        height="19"
                        style={{ color: "#112240", fontWeight: "900" }}
                      />
                    ) : (
                      <Icon
                        icon="ri:arrow-down-s-line"
                        width="16.3"
                        height="19"
                        style={{ color: "#112240", fontWeight: "900" }}
                      />
                    )}
                  </div>

                  {clicked ? (
                    <p style={{ maxWidth: "482px" }}>
                      Lorem ipsum dolor sit amet consectetur. Eget gravide
                      fermentum viverra mi.
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <div style={{backgroundColor: "#1c4f96", color: "white"}} className="flex  justify-between ">
            <div style={{marginLeft: "135px"}} className="flex flex-col gap-7 my-20 ">
              <p style={{fontFamily: "roboto", fontWeight:"500", fontSize: "14px"}}>MEMBERS</p>
              <h2 style={{maxWidth: "365px", fontFamily: "Bricolage Grotesque", fontWeight: "500", fontSize: "40px", lineHeight: "55px"}}>Our Members have influence</h2>
              <p style={{maxWidth: "377px",fontFamily: "roboto", fontSize: "16px", lineHeight: "24px", color: ""}}>
                Get issues put into policy debates and dialogues, engage with
                key private and public sector stakeholders. Shape the regulatory
                environment to increase the sector's efficiency and
                pperformance.
              </p>
              <div  className="flex gap-7 mt-8">
                <div
                  className="flex justify-center items-center round-arrow"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                >
                  <Icon
                    icon="solar:arrow-right-outline"
                    width="28"
                    height="28"
                    style={{ color: "black" }}
                  />
                </div>
                <div
                  className="flex justify-center items-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "white"
                  }}
                >
                  <Icon
                    icon="solar:arrow-right-outline"
                    width="28"
                    height="28"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
            </div>
            <div style={{width: "720px", height: "565px", padding: "0", margin: "0"}}>
               <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/image_2.png"
                    alt="..."
                  />
            </div>
          </div>
        </div>
      </OtherSection>
    </div>
  );
};

export default Home;
