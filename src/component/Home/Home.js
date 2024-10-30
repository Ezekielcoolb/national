import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const HomeSection = styled.section`
  position: relative;
  background-image: url("../images/home-img-bg.jpg");
  background-size: 100% 100%;
  background-position: center;
  height: 700px; /* Full height */
  display: flex;
  padding-left: 135px;
  padding-top: 100px;
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
    margin-bottom: 25px;
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
    
    position: relative; /* Make sure influence is positioned relative */
    z-index: 2; /* Make sure it's above the .dots */
  }

  .dots {
    position: absolute;
    bottom: -155px; /* Adjust positioning to be underneath the content */
    left: 0;
    width: 100%;
    height: 200px;
    background: url("../images/dot-img.png");
    background-color: white;
    z-index: 1; /* Ensure it stays below the content */
  }

  .blue-dot {
    position: absolute;
    top: 0;
    width: 100%;
    height: 200px;

    background: url("../images/blue_dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }
  .new-dot {
    position: absolute;
    top: 0;
    width: 100%;
    height: 200px;

    background: url("../images/new-dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }
  .dot-now {
    position: absolute;
    top: -120px;
    width: 100%;
    height: 200px;

    background: url("../images/new-dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }

  .second-blue-dot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 180px;
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
    position: absolute;
    bottom: 60px;
    left: -10px;
    z-index: 1;
    background: white;
  }
  .sideCard-2 {
    box-shadow: 0px 20px 100px 0px #0000001a;
    width: 180px;
    height: 197px;
    gap: 0px;
    border-radius: 5px 0px 0px 0px;
    opacity: 0px;
    position: absolute;
    bottom: 60px;
    right:  -40px;
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
    gap: 20px;
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
.btn-hidden {
display: none;
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
        <div className="content homecontent">
          <p style={{color: "white"}}>WELCOME TO ROAD USERS ASSOCIATION</p>
          <h1 style={{color: "white"}}>The National Road Transport Organization.</h1>
          <div className="buttons btn">
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
              position: "relative",
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
            <div className="dots"></div>
          </div>
          <div className="containers">
            <div
              className="flex gap-14 justify-between items-center voice"
              style={{ marginTop: "152px", marginBottom: "100px" }}
            >
              <div style={{position: "relative"}}>
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
                <div className="voice-img" style={{marginLeft: "90px", height: "558px", width: "464px" }}>
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

              <div className="flex flex-col gap-5 voice-div">
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
                <h2 className=""
                  style={{
                    lineHeight: "55px",
                    color: "#112240",
                    fontWeight: "700",
                    fontFamily: "Bricolage Grotesque",
                    marginTop: "15px",
                    fontSize: "45px",
                    width: "453px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p
                  style={{
                    lineHeight: "24px",
                    color: "#5c6a7f",
                    width: "431px",
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
          <div style={{ backgroundColor: "#1c4f96", position: "relative" }}>
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
                <button className="flex justify-around items-center btn-show">
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
              <button className="flex justify-around items-center btn-hidden">
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
          </div>
          <div>
            <div
              style={{ paddingTop: "100px" }}
              className="stats flex gap-7 justify-between items-center containers"
            >
              <div className="logic-shadow  ">
                <div className="flex">
                  <div
                  
                    style={{
                      width: "290px",
                      height: "214px",
                      borderRight: "1px solid #e3e6ef",
                      borderBottom: "1px solid #e3e6ef",
                    }}
                    className=" logic-box-1 flex flex-col justify-center items-center"
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
                    className=" logic-box-1 flex flex-col justify-center items-center"
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
                <div className="flex ">
                  <div
                    style={{
                      width: "290px",
                      height: "214px",
                      borderRight: "1px solid #e3e6ef",
                    }}
                    className=" logic-box-1 flex flex-col justify-center items-center"
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
                    className=" logic-box-1 flex flex-col justify-center items-center"
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
          <div
            style={{
              marginTop: "100px",
              backgroundColor: "#1c4f96",
              color: "white",
              height: "565px",
              position: "relative",
            }}
            className="flex  justify-between member-div"
          >
            <div className="second-blue-dot"></div>
            <div
              style={{ marginLeft: "135px" }}
              className="member-info flex flex-col gap-7 my-20 "
            >
              <p
                style={{
                  fontFamily: "roboto",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
              >
                MEMBERS
              </p>
              <h2
                style={{
                  maxWidth: "365px",
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: "500",
                  fontSize: "40px",
                  lineHeight: "55px",
                }}
              >
                Our Members have influence
              </h2>
              <p
              className="member-p"
                style={{
                  maxWidth: "377px",
                  fontFamily: "roboto",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "",
                }}
              >
                Get issues put into policy debates and dialogues, engage with
                key private and public sector stakeholders. Shape the regulatory
                environment to increase the sector's efficiency and
                pperformance.
              </p>
              <div className="flex gap-7 mt-12">
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
                    backgroundColor: "white",
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
            <div
            className="member-img"
              style={{
                width: "720px",
                height: "565px",
                padding: "0",
                margin: "0",
              }}
            >
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
          <div
            style={{ marginTop: "100px" }}
            className="containers flex flex-col gap-12"
          >
            <div className="flex flex-col justify-center items-center gap-5">
              <h2
                style={{
                  color: "#112240",
                  fontFamily: "Bricolage Grotesque",
                  fontSize: "24px",
                  fontWeight: "600px",
                  lineHeight: "28.8px",
                }}
              >
                Global Partners
              </h2>
              <p
                style={{
                  color: "#5c6a7f",
                  fontFamily: "roboto",
                  fontSize: "16px",
                  lineHeight: "22.86px",
                  maxWidth: "555px",
                }}
              >
                Weembrace holistic development and support for employees the aim
                of being a first-choice employer with our sectors.
              </p>
            </div>
            <div className="flex justify-between gap-5 global-img-div">
              <div className="flex justify-between gap-5">
                <div
                  className="flex justify-center items-center"
                  style={{
                    backgroundColor: "white",
                    width: "278pxx",
                    height: "144px",
                    borderRadius: "6px",
                    border: "1px solid #e3e6ef",
                  }}
                >
                  <img
                    className="my-10 mx-12 global-img"
                    style={{
                      height: "64px",
                      width: "181px",
                      objectFit: "",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/rfea.png"
                    alt="..."
                  />
                </div>
                <div
                  className="flex justify-center items-center"
                  style={{
                    backgroundColor: "white",
                    width: "278pxx",
                    height: "144px",
                    borderRadius: "6px",
                    border: "1px solid #e3e6ef",
                  }}
                >
                  <img
                    className="my-10 mx-12 global-img"
                    style={{
                      height: "64px",
                      width: "181px",
                      objectFit: "cover",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/dezeen.png"
                    alt="..."
                  />
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div
                  className="flex justify-center items-center"
                  style={{
                    backgroundColor: "white",
                    width: "278pxx",
                    height: "144px",
                    borderRadius: "6px",
                    border: "1px solid #e3e6ef",
                  }}
                >
                  <img
                    className="my-10 mx-12 global-img"
                    style={{
                      height: "64px",
                      width: "181px",
                      objectFit: "cover",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/award.png"
                    alt="..."
                  />
                </div>
                <div
                  className="flex justify-center items-center"
                  style={{
                    backgroundColor: "white",
                    width: "278pxx",
                    height: "144px",
                    borderRadius: "6px",
                    border: "1px solid #e3e6ef",
                  }}
                >
                  <img
                    className="my-10 mx-12 global-img"
                    style={{
                      height: "64px",
                      width: "181px",
                      objectFit: "cover",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/rfea.png"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "100px",
              backgroundColor: "#eef5ff",
              position: "relative",
            }}
          >
            <div className="new-dot"></div>
            <div className="containers flex flex-col gap-12 py-20 pt-32">
              <div className="flex justify-between items-center testimonal-div">
                <div className="flex flex-col gap-3">
                  <p
                    style={{
                      color: "#56bf2a",
                      fontSize: "14px",
                      fontWeight: "800",
                      fontFamily: "roboto",
                    }}
                  >
                    TESTIMONIALS
                  </p>
                  <h2
                    style={{
                      color: "#112240",
                      fontWeight: "700",
                      fontSize: "45px",
                      fontFamily: "Bricolage Grotesque",
                      lineHeight: "55px",
                      maxWidth: "350px",
                    }}
                  >
                    What people say about us?
                  </h2>
                </div>
                <div style={{ fontFamily: "roboto", width: "382px" }} className="testy-p">
                  <p
                    style={{
                      color: "#5c6a7f",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Convallis sed mauris
                    orci velit sed morbi id integer. Massa velit in netus velit.
                    At velit ut posuere aliquam. Nulla.
                  </p>
                </div>
              </div>
              <div
                className="flex gap-5 pr-5 justify-between items-center testimonial-img-div"
                style={{
                  backgroundColor: "white",
                  height: "359px",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    width: "392px",
                    height: "359px",
                    borderRadius: "10px 0 10px 0",
                  }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/image_3.png"
                    alt="..."
                  />
                </div>
                <div className="flex flex-col gap-6 testimonial-img-p">
                  <p
                    style={{
                      color: "#112240",
                      fontSize: "20px",
                      fontFamily: "roboto",
                      lineHeight: "30px",
                      width: "580px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur. At mi accumsan
                    egestas mi odio integer fusce consectetur est. Sed ultrices
                    ultricies nascetur nunc nulla. Proin urna sodales lectus
                    tellus at vitae. Quisque id hendrerit arcu mauris nisi
                    mauris lacus. Eget arcu scelerisque amet in odio turpis.
                    Donec blandit in adipiscing.
                  </p>
                  <div className="flex justify-between items-center">
                    <div
                      className="flex flex-col gap-"
                      style={{ fontFamily: "roboto" }}
                    >
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: "12px",
                          color: "#5c6a7f",
                        }}
                      >
                        MD - STARK LOGIC
                      </p>
                      <p
                        style={{
                          fontWeight: "800",
                          fontSize: "20px",
                          color: "#112240",
                        }}
                      >
                        Donald Salvor
                      </p>
                      <p className="flex gap-3">
                        <Icon
                          icon="material-symbols:star"
                          width="17.27"
                          height="15"
                          style={{ color: "#e0a416", fontWeight: "900" }}
                        />
                        <Icon
                          icon="material-symbols:star"
                          width="17.27"
                          height="15"
                          style={{ color: "#e0a416", fontWeight: "900" }}
                        />
                        <Icon
                          icon="material-symbols:star"
                          width="17.27"
                          height="15"
                          style={{ color: "#e0a416", fontWeight: "900" }}
                        />
                        <Icon
                          icon="material-symbols:star"
                          width="17.27"
                          height="15"
                          style={{ color: "#e0a416", fontWeight: "900" }}
                        />
                        <Icon
                          icon="material-symbols:star"
                          width="17.27"
                          height="15"
                          style={{ color: "#e0a416", fontWeight: "900" }}
                        />
                      </p>
                    </div>
                    <div>
                      <div className="flex gap-7 ">
                        <div
                          className="flex justify-center items-center"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            backgroundColor: "#1c4f964d",
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
                            backgroundColor: "#1c4f96",
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
            </div>
          </div>

          <div className="containers">
            <div
              className="flex flex-row-reverse gap-14 justify-between items-center voice"
              style={{ marginTop: "152px", marginBottom: "100px" }}
            >
              <div style={{position: "relative"}}>
                <div
                  style={{
                    fontFamily: "Bricolage Grotesque",
                    color: "#112240",
                    overflow: "hidden",
                    borderRadius: "5px",
                  }}
                  className="sideCard-2 flex flex-col justify-center items-center"
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
                <div className="voice-img" style={{marginRight: "90px", height: "558px", width: "464px" }}>
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

              <div className="flex flex-col gap-5 voice-div">
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
                <h2 className=""
                  style={{
                    lineHeight: "55px",
                    color: "#112240",
                    fontWeight: "700",
                    fontFamily: "Bricolage Grotesque",
                    marginTop: "15px",
                    fontSize: "45px",
                    width: "453px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p
                  style={{
                    lineHeight: "24px",
                    color: "#5c6a7f",
                    width: "431px",
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
          className="road"
            style={{
              height: "745px",
              backgroundColor: "#1c4f96",
              color: "white",
              position: "relative",
            }}
          >
            <div className="road-div flex justify-between items-center mx-10  my-20">
              <div className="road-div-1 flex flex-col gap-8 ml-20">
                <h2
                  style={{
                    fontFamily: "Bricolage Grotesque",
                    fontSize: "38px",
                    lineHeight: "48px",
                    fontWeight: "800",
                    maxWidth: "480px",
                  }}
                >
                  Road and Commuter Safety Web Application
                </h2>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    lineHeight: "26px",
                    width: "445px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Tristique dapibus erat
                  pulvinar eleifend. Mauris in elementum morbi tempus eu. Id
                  vestibulum id lectus ante ut hac ullamcorper. Nunc erat
                  viverra pharetra donec pretium id. Donec sed commodo sed
                  pretium vel at.
                </p>
                <div className="flex flex-col gap-6">
                  <p
                    className="text-white text-[16px] leading-[26px] font-inter underline"
                    style={{
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Visit Help Center
                  </p>
                  <p
                    className="text-white text-[16px] leading-[26px] font-inter underline"
                    style={{
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Contact Support
                  </p>
                  <p
                    className="text-white text-[16px] leading-[26px] font-inter underline"
                    style={{
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Webinars
                  </p>
                  <p
                    className="text-white text-[16px] leading-[26px] font-inter underline"
                    style={{
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Blog
                  </p>
                </div>

                <div style={{ marginTop: "40px" }} className="flex gap-8">
                  <button
                    style={{ width: "auto", cursor: "pointer" }}
                    className="flex justify-around gap-3  items-center"
                  >
                    <div style={{ fontSize: "15px" }}>Create Account</div>
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
                  <button
                    style={{
                      fontSize: "15px",
                      background: "transparent",
                      border: "1px solid white",
                      cursor: "pointer",
                    }}
                  >
                    Download App
                  </button>
                </div>
              </div>
              <div
              className="road-img"
                style={{
                  width: "558px",
                  height: "683px",
                  marginTop: "40px",
                  marginBottom: "40px",
                  borderRadius: "22px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    borderRadius: "22px",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                    objectPosition: "top",
                  }}
                  src="./images/image_4.png"
                  alt="..."
                />
              </div>
            </div>
            <div className="second-blue-dot"></div>
          </div>
          <div style={{ marginTop: "100px" }}>
            <p
              style={{
                fontWeight: "800",
                fontSize: "14px",
                lineHeight: "16.8px",
                textAlign: "center",
                color: "#56bf2a",
                fontFamily: "Manrope",
                marginBottom: "15px",
              }}
            >
              BLOG & INSIGHTS
            </p>
            <h2
            className="latest"
              style={{
                fontSize: "45px",
                fontWeight: "700",
                textAlign: "center",
                fontFamily: "Bricolage Grotesque",
                lineHeight: "55px",
                color: "#051a53",
                marginBottom: "70px",
              }}
            >
              Latest News & Articles
            </h2>
            <div className="latest-1 containers flex justify-between gap-3">
              <div className="latest-2 flex justify-between gap-3">
                <div
                  style={{
                    width: "370px",
                    height: "560.88px",
                    border: " 1px solid #E3E6EF",
                    borderRadius: "15px",
                    background: "#FFFFFF01",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      width: "80px",
                      height: "89px",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        width: "80px",
                        height: "62px",
                        background: "#1c4f96",
                        color: "#FFFFFF",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Manrope",
                          fontWeight: "800",
                          fontSize: "30px",
                          textAlign: "center",
                        }}
                      >
                        16
                      </p>
                    </div>
                    <div
                      style={{ background: "#FFFFFF" }}
                      className="flex justify-center items-center"
                    >
                      <p
                        style={{
                          fontFamily: "Manrope",
                          fontWeight: "600",
                          fontSize: "11px",
                        }}
                      >
                        June, 2013
                      </p>
                    </div>
                  </div>
                  <div style={{ width: "370px", height: "320px" }}>
                    <img
                      style={{
                        height: "100%",
                        borderRadius: "15px 15px 0px 0px",
                        width: "100%",
                        objectFit: "cover",
                        display: "block",
                        objectPosition: "top",
                      }}
                      src="./images/image_5.png"
                      alt="..."
                    />
                  </div>
                  <div className="flex flex-col gap-5 m-6">
                    <div
                      className="flex gap-5"
                      style={{
                        fontSize: "14px",
                        color: "#5c6a7f",
                        fontFamily: "Roboto",
                      }}
                    >
                      <p>Mr Dunos</p>
                      <p className="flex gap-2">
                        {" "}
                        <Icon
                          icon="uil:comments"
                          width="16.13"
                          height="14"
                          style={{ fontWeight: "900", color: "#1c4f96" }}
                        />{" "}
                        0 Comments
                      </p>
                    </div>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "30px",
                        color: "#112240",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Ut fermentum.
                    </p>
                    <button
                      className="flex justify-between items-center"
                      style={{
                        background: "transparent",
                        width: "300px",
                        height: "50px",
                        border: "1px solid #E3E6EF",
                        borderRadius: "100px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "14px",
                          lineHeight: "19.6px",
                          fontWeight: "500",
                          color: "#56bf2a",
                        }}
                      >
                        View Post
                      </p>
                      <Icon
                        icon="formkit:arrowright"
                        width="18.97"
                        height="8.8"
                        style={{ color: "#56bf2a" }}
                      />
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    width: "370px",
                    height: "560.88px",
                    border: "1px solid #E3E6EF",
                    borderRadius: "15px",
                    background: "#FFFFFF01",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      width: "80px",
                      height: "89px",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        width: "80px",
                        height: "62px",
                        background: "#1c4f96",
                        color: "#FFFFFF",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Manrope",
                          fontWeight: "800",
                          fontSize: "30px",
                          textAlign: "center",
                        }}
                      >
                        16
                      </p>
                    </div>
                    <div
                      style={{ background: "#FFFFFF" }}
                      className="flex justify-center items-center"
                    >
                      <p
                        style={{
                          fontFamily: "Manrope",
                          fontWeight: "600",
                          fontSize: "11px",
                        }}
                      >
                        June, 2013
                      </p>
                    </div>
                  </div>
                  <div style={{ width: "370px", height: "320px" }}>
                    <img
                      style={{
                        height: "100%",
                        borderRadius: "15px 15px 0px 0px",
                        width: "100%",
                        objectFit: "cover",
                        display: "block",
                        objectPosition: "top",
                      }}
                      src="./images/image_6.png"
                      alt="..."
                    />
                  </div>
                  <div className="flex flex-col gap-5 m-6">
                    <div
                      className="flex gap-5"
                      style={{
                        fontSize: "14px",
                        color: "#5c6a7f",
                        fontFamily: "Roboto",
                      }}
                    >
                      <p>Mr Dunos</p>
                      <p className="flex gap-2">
                        {" "}
                        <Icon
                          icon="uil:comments"
                          width="16.13"
                          height="14"
                          style={{ fontWeight: "900", color: "#1c4f96" }}
                        />{" "}
                        0 Comments
                      </p>
                    </div>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "30px",
                        color: "#112240",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Ut fermentum.
                    </p>
                    <button
                      className="flex justify-between items-center"
                      style={{
                        background: "transparent",
                        width: "300px",
                        height: "50px",
                        border: "1px solid #E3E6EF",
                        borderRadius: "100px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "14px",
                          lineHeight: "19.6px",
                          fontWeight: "500",
                          color: "#56bf2a",
                        }}
                      >
                        View Post
                      </p>
                      <Icon
                        icon="formkit:arrowright"
                        width="18.97"
                        height="8.8"
                        style={{ color: "#56bf2a" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "370px",
                  height: "560.88px",
                  border: " 1px solid #E3E6EF",
                  borderRadius: "15px",
                  background: "#FFFFFF01",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    width: "80px",
                    height: "89px",
                  }}
                >
                  <div
                    className=""
                    style={{
                      width: "80px",
                      height: "62px",
                      background: "#1c4f96",
                      color: "#FFFFFF",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Manrope",
                        fontWeight: "800",
                        fontSize: "30px",
                        textAlign: "center",
                      }}
                    >
                      16
                    </p>
                  </div>
                  <div
                    style={{ background: "#FFFFFF" }}
                    className="flex justify-center items-center"
                  >
                    <p
                      style={{
                        fontFamily: "Manrope",
                        fontWeight: "600",
                        fontSize: "11px",
                      }}
                    >
                      June, 2013
                    </p>
                  </div>
                </div>
                <div style={{ width: "370px", height: "320px" }}>
                  <img
                    style={{
                      height: "100%",
                      borderRadius: "15px 15px 0px 0px",
                      width: "100%",
                      objectFit: "cover",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/image_7.png"
                    alt="..."
                  />
                </div>
                <div className="flex flex-col gap-5 m-6">
                  <div
                    className="flex gap-5"
                    style={{
                      fontSize: "14px",
                      color: "#5c6a7f",
                      fontFamily: "Roboto",
                    }}
                  >
                    <p>Mr Dunos</p>
                    <p className="flex gap-2">
                      {" "}
                      <Icon
                        icon="uil:comments"
                        width="16.13"
                        height="14"
                        style={{ fontWeight: "900", color: "#1c4f96" }}
                      />{" "}
                      0 Comments
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      lineHeight: "30px",
                      color: "#112240",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Ut fermentum.
                  </p>
                  <button
                    className="flex justify-between items-center"
                    style={{
                      background: "transparent",
                      width: "300px",
                      height: "50px",
                      border: "1px solid #E3E6EF",
                      borderRadius: "100px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Roboto",
                        fontSize: "14px",
                        lineHeight: "19.6px",
                        fontWeight: "500",
                        color: "#56bf2a",
                      }}
                    >
                      View Post
                    </p>
                    <Icon
                      icon="formkit:arrowright"
                      width="18.97"
                      height="8.8"
                      style={{ color: "#56bf2a" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            style={{
              height: "357px",
              background: "#eef5ff",
              marginTop: "220px",
              position: "relative",
            }}
          >
            <div className="dot-now"></div>
            <div
              className="flex flex-col justify-center items-center gap-6"
              style={{
                color: "white",
                background: "#56bf2a",
                width: "1170px",
                height: "367px",
                borderRadius: "12px",
                position: "absolute",
                top: "-120px",
              }}
            >
              <h2 
              className="join-div-h2"
                style={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: "600",
                  fontSize: "50px",
                  width: "412px",
                  lineHeight: "54.57px",
                  textAlign: "center",
                }}
              >
                Join us, become a member today.
              </h2>
              <p
                style={{
                  width: "412px",
                  fontFamily: "Roboto",
                  fontSize: "18px",
                  lineHeight: "26px",
                  textAlign: "center",
                }}
              >
                Embrace holistic development and support for employee the aim of
                being a first-choice
              </p>
              <div className="flex gap-4 join-btn">
                <button
                  className="flex justify-between items-center gap-2"
                  style={{
                    background: "#1c4f96",
                    width: "200px",
                    height: "55px",
                    borderRadius: "700px",
                  }}
                >
                  <p>Get Started </p>
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
                <button
                  style={{
                    color: "#56bf2a",
                    background: "white",
                    width: "200px",
                    height: "55px",
                    borderRadius: "700px",
                  }}
                >
                  <p>Get Started </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </OtherSection>
    </div>
  );
};

export default Home;
