import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactRap = styled.div`
  .media-dot {
    position: absolute;
    top: 0;
    width: 100%;
    height: 300px;

    background: url("../images/media_dot.png");
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
`;

const Contact = () => {
  return (
    <ContactRap>
      <div style={{ position: "relative" }}>
        <div className="media-dot"></div>
        <div className=" containers contact-block flex justify-between items-center  py-32 gap-3">
          <div>
            <div className="flex flex-col gap-3">
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#56bf2a",
                }}
              >
                CONTACT US
              </p>
              <h2
                style={{
                  fontFamily: "Bricolage Grotesque",
                  fontSize: "45px",
                  lineHeight: "55px",
                  fontWeight: "700",
                  color: "#112240",
                  maxWidth: "452px",
                }}
              >
                Do you need help? contact with us now!
              </h2>
            </div>
            <div className="flex flex-col gap-5 mt-10">
              <div className="flex items-center gap-3">
                <div style={{ width: "60px", height: "60px" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src="./images/comment.png"
                  />
                </div>
                <p>285 Brandon Avenue, Texas, New York</p>
              </div>
              <div className="flex items-center gap-3">
                <div style={{ width: "60px", height: "60px" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src="./images/phone.png"
                  />
                </div>
                <p>+1 (124) 556 879, +1 (124) 556 879</p>
              </div>
              <div className="flex items-center gap-3">
                <div style={{ width: "60px", height: "60px" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src="./images/message.png"
                  />
                </div>
                <p>info@disciplinedynamics.com</p>
              </div>
            </div>
          </div>
          <div 
            className="py-10 contact-div"
            style={{
              width: "500px",
              height: "588px",
              border: "1px solid #1122401F",
              borderRadius: "12px",
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <h3
                style={{
                  fontFamily: "Bricolage Grotesque",
                  fontSize: "28px",
                  fontWeight: "700",
                  textAlign: "center",
                  color: "#112240",
                }}
              >
                Get in touch with us
              </h3>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  textAlign: "center",
                  color: "#5c6a7f",
                }}
              >
                Enter your message details below
              </p>
            </div>
            <div>
              <form
                style={{ gap: "25px" }}
                className="py-10 flex flex-col justify-center items-center"
              >
                <div
                  className="contact-input flex flex-col"
                  style={{ gap: "20px", width: "398px", height: "65.59px" }}
                >
                  <label
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      lineHeight: "18.75px",
                      color: "#5C6A7F80",
                    }}
                  >
                    Name
                  </label>
                  <input className="contact-input"
                    style={{
                      width: "398px",
                      height: "26.59px",
                      borderBottom: "1px solid #1122401F",
                    }}
                    type="text"
                  />
                </div>
                <div
                  className="contact-input flex flex-col"
                  style={{ gap: "20px", width: "398px", height: "65.59px" }}
                >
                  <label
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      lineHeight: "18.75px",
                      color: "#5C6A7F80",
                    }}
                  >
                    Email Address
                  </label>
                  <input className="contact-input"
                    style={{
                      width: "398px",
                      height: "26.59px",
                      borderBottom: "1px solid #1122401F",
                    }}
                    type="text"
                  />
                </div>
                <div
                  className="contact-input flex flex-col justify-between"
                  style={{ gap: "20px", width: "398px", height: "100.59px" }}
                >
                  <label
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      lineHeight: "18.75px",
                      color: "#5C6A7F80",
                    }}
                  >
                    Messages
                  </label>
                  <input className="contact-input"
                    style={{
                      width: "398px",
                      height: "26.59px",
                      borderBottom: "1px solid #1122401F",
                    }}
                    type="text"
                  />
                </div>
                <button
                  className="flex flex justify-center items-center"
                  style={{
                    marginTop: "20px",
                    width: "397px",
                    height: "55px",
                    borderRadius: "100px",
                    background:
                      "linear-gradient(0deg, #56BF2A, #56BF2A), linear-gradient(0deg, rgba(22, 0, 9, 0), rgba(22, 0, 9, 0))",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      textAlign: "center",
                      fontWeight: "600",
                    }}
                  >
                    Submit
                  </p>
                </button>
              </form>
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
              <p className=""
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
    </ContactRap>
  );
};

export default Contact;
