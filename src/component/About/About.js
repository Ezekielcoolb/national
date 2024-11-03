import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";

const AboutRap = styled.div`
 .dots {
    position: absolute;
    top: 0px; /* Adjust positioning to be underneath the content */
    left: 0;
    width: 100%;
    height: 200px;
    background: url("../images/media_dot.png");
   
    z-index: 1; /* Ensure it stays below the content */
  }
    .blue-dot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;

    background: url("../images/blue_dot.png");
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
    .new-dot {
    position: absolute;
    top: 0;
    width: 100%;
    height: 200px;

    background: url("../images/new-dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }
`;

const About = () => {
    const color = {
         green : "#56BF2A",
         deepBlue : "#112240",
         deepGrey : "#485776",
         offWhite : " #FFFFFFB2"
    }
   
  return (
    <AboutRap>
      <div>
        <div style={{position: "relative"}} className="containers py-14  flex flex-col gap-20">
            <div className="dots"></div>
            <div className="flex flex-col gap-8 justify-center items-center">
                <p style={{
                    fontFamily: "Roboto",
                    fontWeight: "600",
                    fontSize: "14px",
                    textAlign: "center",
                    color: color.green
                }}>ABOUT US</p>
                <h2 style={{
                    fontFamily: "Bricolage Grotesque",
                    fontSize: "45px",
                    lineHeight: "52px", 
                    fontWeight: "700",
                    textAlign: "center",
                    color: color.deepBlue,
                    maxWidth: "673px"
                }}>We’re on a mission to
                empower investors worldwide</h2>
                <p style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily:
                    "SF Pro Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                    lineHeight: "24px",
                    textAlign: "center",
                    maxWidth: "610px",
                    color: color.deepGrey
                }}>Lorem ipsum dolor sit amet consectetur. Molestie nibh sit pretium vitae integer hendrerit. Est auctor tellus eros ornare tristique donec. Amet sit risus adipiscing faucibus. Morbi lacus duis nulla sit tincidunt sed auctor sit. Lectus viverra tristique eu 
                    tempor urna arcu sit aliquam. Mauris quis amet ante.</p>
            </div>
            <div className=" about-img flex justify-center gap-6">
                <div className="about-img-3" style={{
                    height: "482px",
                    width: '518px',
                    borderRadius: "15px"
                }}>
                    <img style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", 
                        objectPosition: "top", borderRadius: "15px"
                    }}
                        src="./images/image_2.png"
                        alt="..."
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="about-img-1" style={{
                        width: "518px",
                        height: "231px",
                        borderRadius: "12px"
                    }}>
                         <img style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", 
                        objectPosition: "top",
                         borderRadius: "12px"
                    }}
                        src="./images/image_8.png"
                        alt="..."
                    />
                    </div>
                    <div className="flex justify-between">
                        <div className="about-img-2" style={{
                             width: "250px",
                             height: "231px",
                             borderRadius: "12px"
                        }}>
                             <img style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", 
                        objectPosition: "top",
                         borderRadius: "12px"
                    }}
                        src="./images/image_2.png"
                        alt="..."
                            />
                        </div>
                        <div className="about-img-2 flex flex-col justify-center items-center"
                        style={{
                            backgroundColor: color.green,
                             width: "250px",
                             height: "231px",
                             borderRadius: "12px"
                        }}>
                            <h3 style={{
                                fontFamily: "Bricolage Grotesque",
                                fontWeight: "800",
                                fontSize: "75px",
                                textAlign: "center"
                            }}>25k+</h3>
                            <p style={{
                                fontFamily: "Bricolage Grotesque",
                                fontWeight: "700",
                                fontSize: "24px",
                                textAlign: "center"
                            }}>Registered Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-14" style={{position: "relative", backgroundColor: "#1c4f96", color: "white"}}>
            <div className="containers">
                <p style={{
                    fontFamily: "roboto",
                    fontWeight: "500",
                    fontSize: "14px",
                    marginBottom: "20px",
                    color: color.green
                }}>WHO WE ARE</p>
                <h2 className="vission-h2" style={{
                    fontFamily: "Bricolage Grotesque",
                    fontSize: "45px",
                    fontWeight: "700",
                    lineHeight: "55px",
                    maxWidth: "944px"
                }}>The Pan-African leader connecting societies with safe, efficient,
                mobility and logistics</h2>
                <div className="my-24 gap-8 flex justify-between  items-end flex-wrap">
                    <div style={{
                        borderLeft: "1px solid #DCDCE3",
                    }}
                    className="pl-10 flex flex-col gap-10"
                    >
                        <h2 style={{
                            fontFamily: "Roboto",
                            fontSize: "14px",
                            fontWeight: "700"
                        }}>OUR VISSION</h2>
                        <p className="vission-p" style={{
                            fontFamily: "Roboto",
                            fontSize: "16px",
                            color: color.offWhite,
                            lineHeight: "22px",
                            maxWidth: "299px"
                        }}>Lorem ipsum dolor sit amet consectetur. Arcu purus mi dui eget viverra. Nam ultrices mauris id id adipiscing id vel id. 
                            Ut non volutpat habitant ut amet. Ornare.</p>
                    </div>
                    <div style={{
                        borderLeft: "1px solid #DCDCE3",
                    }}
                    className="mission pl-10 flex flex-col gap-10"
                    >
                        <h2 style={{
                            fontFamily: "Roboto",
                            fontSize: "14px",
                            fontWeight: "700"
                        }}>OUR  MISSION</h2>
                        <p className="vission-p" style={{
                            fontFamily: "Roboto",
                            fontSize: "16px",
                            color: color.offWhite,
                            lineHeight: "22px",
                            maxWidth: "299px"
                        }}>Lorem ipsum dolor sit amet consectetur. Et turpis proin arcu semper sed sem vestibulum tellus est. Et volutpat 
                        odio vitae fermentum aliquet malesuada mi. Neque sed commodo maecenas.</p>
                    </div>
                    <button 
                    className="about-btn flex justify-center items-center"
                    style={{
                        width: "200px",
                        height: "40px",
                        backdropFilter:" blur(6.199999809265137px)",
                        borderRadius: "59px",
                        backgroundColor: color.green                    }}>
                        <p style={{
                            fontFamily: "Manrope",
                            fontWeight: "600",
                            fontSize: "16px",
                        }}>Unlock capital</p>
                    </button>
                </div>
            </div>
            <div className="blue-dot"></div>
        </div>
        <div 
            style={{ marginTop: "100px" }}
            className="containers flex flex-col gap-12"
          >
            <div className="flex justify-between gap-5">
                <div style={{
                    width: "575px",
                    height: "395px",
                    borderRadius: "12px"
                }}>
                    <img 
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                            borderRadius: "12px"
                        }}
                        src="./images/image_10.png"
                    />

                </div>
                <div style={{
                    width: "576px",
                    height: "395px",
                    borderRadius: "12px"
                }}>
                    <img 
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                            borderRadius: "12px"
                        }}
                        src="./images/image_11.png"
                    />

                </div>
            </div>
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
            <div className="flex justify-between flex-wrap gap-5">
              
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
        <div
            style={{
              marginTop: "100px",
              backgroundColor: "#eef5ff",
              position: "relative",
            }}
          >
            <div className="new-dot"></div>
            <div className="containers flex flex-col gap-12 py-20 pt-32">
              <div className="flex justify-between gap-5 items-center flex-wrap">
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
                <div className="testi-img"
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
                  <p style={{
                    fontFamily: "Roboto",
                    fontSize: "16px",
                    fontWeight: "500"
                  }}>Get Started </p>
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
    </AboutRap>
  );
};

export default About;
