import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";

const ProjectRap = styled.div`
 .media-dot {
    position: absolute;
    top: 90px;
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
  /* Slider Container */
  .slider-container {
    width: 100%;
    max-width: 1713px; /* Allows three slides (3 * 571px) to be shown at once */
    overflow: hidden;
    margin: auto;
  }

  /* Horizontal Track */
  .slider-track {
    display: flex;
    overflow-x: auto;
    
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }
.slider-track::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}
  /* Individual Slide */
  .slide {
    min-width: 571px;
    height: 495px;
    background-color: #0000001a;
    border-radius: 15px;
    margin-right: 10px;
    scroll-snap-align: start;
  }

  /* Navigation Dots */
  .slider-dots {
    text-align: center;
    margin-top: 15px;
  }

  .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin: 0 5px;
    background-color: #bbb;
    border-radius: 50%;
    cursor: pointer;
  }

  .dot.active {
    background-color: #717171;
  }
`;

const Project = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (index) => {
      setCurrentSlide(index);
      document.getElementById("slider-track").scrollTo({
        left: index * 571,
        behavior: "smooth",
      });
    };

  return (
    <ProjectRap>
      <div>
        <div className="media-dot"></div>
        <div style={{marginTop: "200px"}} className="containers flex flex-col justify-center items-center gap-5">
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: "600",
              color: "#56bf2a",
              textAlign: "center",
            }}
          >
            PROJECTS
          </p>
          <h2
            style={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: "700",
              fontSize: "45px",
              lineHeight: "55px",
              color: "#112240",
              textAlign: "center",
              maxWidth: "693px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Amet vestibulum.
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              colr: "#485776",
              maxWidth: "622px",
              textAlign: "center",
              fontFamily:
                "SF Pro Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Molestie nibh sit pretium
            vitae integer hendrerit. Est auctor tellus eros ornare tristique
            donec. Amet sit risus adipiscing faucibus. Morbi lacus duis nulla
            sit tincidunt sed auctor sit. Lectus viverra tristique eu tempor
            urna arcu sit aliquam. Mauris quis amet ante.
          </p>
        </div>
        <div
          className="containers flex justify-center items-center project-img-div"
          style={{
            paddingTop: "80px",
            width: "1096px",
            height: "495px",
            borderRadius: "15px",
            margin: "auto",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "15px",
            }}
            src="./images/project.png"
            alt="...."
          />
        </div>
        <div
          className="containers flex flex-col py-24 gap-5"
          style={{
            marginTop: "80px",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#485776",
            maxWidth: "739px",
            margin: "auto",
            fontFamily:
              "SF Pro Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          }}
        >
          <h3
            style={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: "500",
              fontSize: "35px",
              lineHeight: "42px",
              color: "#112240",
            }}
          >
            We combine our passion
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cursus lectus consectetur
            bibendum feugiat elit non. Diam pulvinar posuere blandit amet donec.
            Netus interdum posuere tellus mattis lorem. Nunc pellentesque id
            iaculis tempus eget lobortis. Porta eget velit amet ridiculus mi.
            Varius lacinia egestas vivamus pellentesque. Eget congue facilisis
            nullam duis. Urna turpis nunc mollis gravida ipsum aliquam malesuada
            at at. Ultrices at odio tristique quam eleifend.
          </p>
          <p>
            Feugiat eu tempor libero pellentesque leo lacinia. Dui ridiculus
            etiam ultrices quam arcu. Vitae fermentum id duis bibendum gravida
            ac amet auctor cras. Lacinia egestas sollicitudin justo nullam et.
            Porttitor orci consequat natoque egestas enim.
          </p>
        </div>
        <div className="slider-container">
          {/* Scrollable Divs */}
          <div id="slider-track" className="slider-track">
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            {/* Add more divs as needed */}
          </div>

          {/* Navigation Dots */}
          <div className="slider-dots">
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div
          className="containers flex flex-col py-24 gap-5"
          style={{
            marginTop: "80px",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#485776",
            maxWidth: "739px",
            margin: "auto",
            fontFamily:
              "SF Pro Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          }}
        >
          <h3
            style={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: "500",
              fontSize: "35px",
              lineHeight: "42px",
              color: "#112240",
            }}
          >
            We combine our passion
          </h3>
          <p>
          Lorem ipsum dolor sit amet consectetur. Cursus lectus consectetur bibendum feugiat elit non. Diam pulvinar posuere blandit amet donec. Netus interdum posuere tellus mattis lorem. Nunc pellentesque id iaculis tempus eget lobortis. Porta eget velit amet ridiculus mi. Varius lacinia egestas vivamus pellentesque. Eget congue facilisis nullam duis. Urna turpis nunc mollis gravida ipsum aliquam malesuada at at.
           Ultrices at odio tristique quam eleifend.
          </p>
         
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
    </ProjectRap>
  );
};
export default Project;
