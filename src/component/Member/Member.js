import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";

const MemberRap = styled.div`
 .new-dot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 160px;

    background: url("../images/new-dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }
    .round-arrow {
    backdrop-filter: blur(5px);
    background: #ffffff33;
  }
`;

const Members = () => {
    const [clicked, setClicked] = useState(true)
    const [isClicked, setIsClicked] = useState(false)
    const [open, setOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
    const handleIsClick = () => {
        setIsClicked(!isClicked)
    }
    const handleOpen = () => {
        setOpen(!open)
    }
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }
  return (
    <MemberRap>
        <div>
            <div style={{height: "578px",background: "#eef5ff", position: "relative"}} className="flex gap-3 justify-between items-center membership">
                <div className="flex flex-col gap-8 ml-32 membership-div">
                <p
                    style={{
                    fontFamily: "Roboto",
                    fontWeight: "800",
                    fontSize: "14px",
                    color: "#56bf2a",
                    }}
                >
                    MEMBERS
                </p>
                <h2
                    style={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: "700",
                    fontSize: "45px",
                    lineHeight: "55px",
                    maxWidth: "469px",
                    color: "#112240",
                    }}
                >
                    Promoting efficient mobility and logistics.
                </h2>
                <p
                    style={{
                    fontSize: "Roboto",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#5c6a7f",
                    maxWidth: "362px"
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur. Aliquam aliquam purus
                    adipiscing a suspendisse malesuada risus non ut. Lobortis eget
                    euismod
                </p>
                <button style={{width: "220px", fontFamily: "Roboto"}} className="flex justify-around items-center">
                    <div>Become a Member</div>
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
                <div className="membership-img" style={{
                    width: "722px",
                    height: "578px",
                }}>
                    <img style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top"
                    }}
                    src="./images/image_1.png"
                    alt="..."
                    />
                </div>
                <div className="new-dot"></div>
            </div>
            <div style={{marginTop: "100px"}} className="containers  flex justify-between gap-10 items-center membership-div-2">
                <div className="flex flex-col gap-7 ml-8 who-become">
                    <p style={{
                        fontFamily: "Roboto",
                        fontWeight: "700",
                        fontSize: "14px",
                        color: "#56bf2a"
                    }}>WHO IS IT FOR</p>
                    <h2 style={{
                        fontFamily: "Bricolage Grotesque",
                        fontSize: "45px",
                        fontWeight: "700",
                        lineHeight: "55px",
                        color: "112240",
                        maxWidth: "385px"
                    }}>Why become an RUA partner?</h2>
                    <p style={{
                        fontFamily: "Helvetica",
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#5c6a7f",
                        maxWidth: "400px"
                    }}>Lorem ipsum dolor sit amet consectetur. Elementum 
                        diam bibendum vitae nulla faucibus est faucibus. Et.</p>
                </div>
                <div className="mr-8" style={{maxWidth: "560px"}}>
                    <div  onClick={handleClick} style={{
                        cursor: "pointer", 
                        borderBottom: "1px solid #E3E6EF",
                        paddingBottom: "15px"
                        }}>
                        <div className="flex items-center gap-2">
                            <div>{clicked ? 
                            <Icon icon="ic:baseline-minus" width="25" height="23.29"  style={{color: "#112240"}} />
                            : <Icon icon="ic:baseline-plus" width="25" height="23.29"  style={{color: "#112240"}} />}</div>
                            <p style={{
                                fontFamily: "Roboto",
                                fontSize: "18px",
                                fontWeight: "500",
                                color: "#112240",
                            }}>Looking for Direction</p>
                        </div>
                        {clicked ? 
                        <p style={{
                            fontFamily: "Roboto",
                            fontSize: "16px",
                            maxWidth: "531px",
                            lineHeight: "24px",
                            color: "#5c6a7f"
                        }}>Transitioning into leadership requires a new mindset. We guide new leaders to step 
                            into their roles with confidence, clarity, and direction.</p>
                        : ""}
                   </div>
                   <div  onClick={handleIsClick} style={{
                        cursor: "pointer", 
                        borderBottom: "1px solid #E3E6EF",
                        paddingBottom: "15px",
                        paddingTop: "15px"
                        }}>
                        <div className="flex items-center gap-2">
                            <div>{isClicked ? 
                            <Icon icon="ic:baseline-minus" width="25" height="23.29"  style={{color: "#112240"}} />
                            : <Icon icon="ic:baseline-plus" width="25" height="23.29"  style={{color: "#112240"}} />}</div>
                            <p style={{
                                fontFamily: "Roboto",
                                fontSize: "18px",
                                fontWeight: "500",
                                color: "#112240",
                            }}>Seeking Personal Growth</p>
                        </div>
                        {isClicked? 
                        <p style={{
                            fontFamily: "Roboto",
                            fontSize: "16px",
                            maxWidth: "531px",
                            lineHeight: "24px",
                            color: "#5c6a7f"
                        }}>Lorem ipsum dolor sit amet consectetur. Elementum 
                        diam bibendum vitae nulla faucibus est faucibus. Et.</p>
                        : ""}
                   </div>
                   <div  onClick={handleOpen} style={{
                        cursor: "pointer", 
                        borderBottom: "1px solid #E3E6EF",
                        paddingBottom: "15px",
                        paddingTop: "15px"
                        }}>
                        <div className="flex items-center gap-2">
                            <div>{open ? 
                            <Icon icon="ic:baseline-minus" width="25" height="23.29"  style={{color: "#112240"}} />
                            : <Icon icon="ic:baseline-plus" width="25" height="23.29"  style={{color: "#112240"}} />}</div>
                            <p style={{
                                fontFamily: "Roboto",
                                fontSize: "18px",
                                fontWeight: "500",
                                color: "#112240",
                            }}>Navigating Life Transitions</p>
                        </div>
                        {open ? 
                        <p style={{
                            fontFamily: "Roboto",
                            fontSize: "16px",
                            maxWidth: "531px",
                            lineHeight: "24px",
                            color: "#5c6a7f"
                        }}>Lorem ipsum dolor sit amet consectetur. Elementum
                         diam bibendum vitae nulla faucibus est faucibus. Et.</p>
                        : ""}
                   </div>
                   <div  onClick={handleIsOpen} style={{
                        cursor: "pointer", 
                        borderBottom: "1px solid #E3E6EF",
                        paddingBottom: "15px",
                        paddingTop: "15px"
                        }}>
                        <div className="flex items-center gap-2">
                            <div>{isOpen ? 
                            <Icon icon="ic:baseline-minus" width="25" height="23.29"  style={{color: "#112240"}} />
                            : <Icon icon="ic:baseline-plus" width="25" height="23.29"  style={{color: "#112240"}} />}</div>
                            <p style={{
                                fontFamily: "Roboto",
                                fontSize: "18px",
                                fontWeight: "500",
                                color: "#112240",
                            }}>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        {isOpen ? 
                        <p style={{
                            fontFamily: "Roboto",
                            fontSize: "16px",
                            maxWidth: "531px",
                            lineHeight: "24px",
                            color: "#5c6a7f"
                        }}>Lorem ipsum dolor sit amet consectetur. Elementum
                         diam bibendum vitae nulla faucibus est faucibus. Et.</p>
                        : ""}
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
            className="flex flex-row-reverse justify-between member-div-2"
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
                  className="flex  justify-center items-center round-arrow"
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
            <div style={{textAlign: "center"}} className="flex flex-col justify-center items-center gap-5">
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
                    width: "237px",
                    height: "55px",
                    borderRadius: "700px",
                  }}
                >
                  <p style={{
                    fontFamily: "Roboto",
                    fontSize: "16px",
                    fontWeight: "500"
                  }}>Become a Member </p>
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
                  <p style={{
                    fontFamily: "Roboto",
                    fontSize: "16px",
                    fontWeight: "500"
                  }}>Get in Touch </p>
                </button>
              </div>
            </div>
          </div>
        </div>
    </MemberRap>
  );
};
export default Members;
