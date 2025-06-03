import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectDetails, fetctProjectpage } from "../../Redux/slices/homeSlice";

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
  position: relative;
  width: 100%;
  max-width: 1713px; /* 3 slides of 571px width */
  overflow: hidden;
  margin: auto;
}

.slider-track {
  display: flex;
  transition: transform 0.3s ease;
}

.slide {
  min-width: 571px;
  height: 495px;
  background-color: #0000001a;
  border-radius: 15px;
  margin-right: 10px;
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white ;
  color: white;
  border: none;
  font-size: 30px;
  padding: 10px;

  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.slider-arrow.left {
  left: 10px;
}

.slider-arrow.right {
  right: 10px;
}

.slider-arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
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
  .speaker-image-div {
    display: flex;
    align-items: center;
    gap: 10px;

  }
  .speakers h2 {
     font-size: 20px;
    font-weight: 600;
    color: #112240;
  }
  .speaker-image-div img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .speaker-name {
    display: flex;
    flex-direction: column;
  }
   .speaker-name h4 {
    font-size: 16px;
    font-weight: 600;
    color: #112240;
   }
   .speaker-name p {
    font-size: 12px;
    font-weight: 400;
    color: #485776;
   }
   .gallery-slider {
    overflow: hidden;
    width: 100%;
  }

  .gallery-inner {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }

  .gallery-img {
    width: 430px;
    height: 437px;
    object-fit: cover;
    margin-right: 5px;
    cursor: pointer;
    flex-shrink: 0;
    border-radius: 8px;
  }
  .home-9 {
    position: relative;
  }
  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    color: black;
    border: none;
    font-size: 30px;
    padding: 10px;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    cursor: pointer;
    z-index: 10;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }
  .nav-btn.left-btn {
    left: 20px;
  }
  .nav-btn.right-btn {
    right: 20px;
  }
  video {
  border: 2px solid red;
  z-index: 1000;
  pointer-events: auto;
}

`;

const MoreProject = () => {

const {id} = useParams()



    const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
const dispatch = useDispatch();
    const {projectDetail, loading, error } = useSelector(
      (state) => state.home || []
      
    );

console.log(projectDetail);

const latest = projectDetail?.latest || {}
const otherEvent = projectDetail?.otherProject
let speakers = [];
try {
  if (latest?.speakers) {
    speakers = JSON.parse(latest.speakers);
  }
} catch (e) {
  console.error("Invalid JSON in latest.speakers:", e);
  speakers = [];
}

const slideWidth = 581; // Slide width + margin (571px + 10px margin)
  const visibleSlides = 2;

  const totalSlides = otherEvent?.data?.length || 0;
  const maxIndex = Math.ceil(totalSlides / visibleSlides) - 1;

  const [currentIndex, setCurrentIndex] = useState(0);
 const visibleImages = 2;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < otherEvent?.data?.length - visibleImages) {
      setCurrentIndex((prev) => prev + 1);
    }
  };



useEffect(() => {
      if (id) {
        dispatch(fetchProjectDetails(id));
      }
    }, [dispatch, id]);


    const goToSlide = (index) => {
      setCurrentSlide(index);
      document.getElementById("slider-track").scrollTo({
        left: index * 571,
        behavior: "smooth",
      });
    };

    const videoLink = latest?.video_link;

// Check if it's a YouTube or embeddable link
const isYouTube = videoLink?.includes("youtube.com") || videoLink?.includes("youtu.be");

// Check if it's a direct video file (like .mp4)
const isDirectVideo = videoLink?.match(/\.(mp4|webm|ogg)$/);
  const handleGoToDetails = (id) => {
    navigate(`/project/${id}`);
    }


  return (
    <ProjectRap>
      <div>
        <div className="media-dot"></div>
        <div style={{marginTop: "40px"}} className="containers flex flex-col justify-center items-center gap-5">
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
            {latest?.title}
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
           {latest?.overview}
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
            src={`https://backoffice.rua.com.ng/${latest?.banner}`}
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
                 <div dangerouslySetInnerHTML={{ __html: latest?.description }} />

        </div>
 <div className="home-9">
         <button onClick={handlePrev} className="nav-btn left-btn">
              <Icon
                width="30px"
                height="30px"
                icon="solar:arrow-left-outline"
                style={{ color: "black" }}
              />
            </button>
          
        <div className="gallery-slider">
          <div
            className="gallery-inner"
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
          >
            {otherEvent?.data?.map((images, index) => (
              <img onClick={() => handleGoToDetails(images?.id)}
                key={index}
                src={`https://backoffice.rua.com.ng/${images?.banner}`}
                alt={`pic-${index}`}
                className="gallery-img"
              />
            ))}
          </div>
        </div>

          <button onClick={handleNext} className="nav-btn right-btn">
              <Icon
                width="30px"
                height="30px"
                icon="solar:arrow-right-outline"
                style={{ color: "black" }}
              />
            </button>
        
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
           More Information
          </h3>
<div>
    {isYouTube ? (
      // YouTube or embeddable iframe
      <iframe
        width="100%"
        height="400"
        src={videoLink}
        title="Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ) : isDirectVideo ? (
      // Direct uploaded video
      <video width="100%" height="400" controls autoPlay>
  <source src={videoLink} type="video/mp4" />
</video>

    ) : (
      <p>No valid video found</p>
    )}
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
    </ProjectRap>
  );
};
export default MoreProject;
