import React, { act, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepage, fetctEventpage, fetctMediapage, fetctNewspage } from "../../Redux/slices/homeSlice";
import EventList from "./EventList";
import MediaList from "./MediaList";
import Project from "./Project";

const MediaRap = styled.div`
  .media-dot {
    position: absolute;
    top: 0;
    width: 100%;
    height: 200px;

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

const Event = () => {
  const [activeLink, setActiveLink] = useState("news"); // Track the active link
  const [content, setContent] = useState(null); // Display content for "news" or "media"
  const navigate = useNavigate();
const dispatch = useDispatch();
    const {newsObject, homeObject, mediaObject, eventObject, loading, error } = useSelector(
      (state) => state.home || []
      
    );

    console.log(activeLink);
      const callToAction = homeObject?.data?.callToAction;


const blog = newsObject?.data?.blog || [];
    console.log(newsObject);

      useEffect(() => {
           dispatch(fetctNewspage()); // Call API on component mount
         }, [dispatch]);
 useEffect(() => {
           dispatch(fetctMediapage()); // Call API on component mount
         }, [dispatch]);
         useEffect(() => {
           dispatch(fetctEventpage()); // Call API on component mount
         }, [dispatch]);
           useEffect(() => {
             dispatch(fetchHomepage()); // Call API on component mount
           }, [dispatch]);

  useEffect(() => {
    handleClick("news"); // Set "news" as the default content on load
  }, []);

    const formatMonthYear = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    }); // Output like: "May, 2025"
  };


  const handleClick = (type) => {
    setActiveLink(type);

  };
  return (
    <MediaRap>
      <div>
        <div className="py-14" style={{ position: "relative" }}>
          <div className="media-dot"></div>
          <div className="flex flex-col gap-6">
            <p
              style={{
                fontFamily: "Roboto",
                fontWeight: "600",
                fontSize: "14px",
                color: "#56bf2a",
                textAlign: "center",
              }}
            >
             { blog?.blogHeading?.title}
            </p>
            <h1
              style={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: "700",
                fontSize: "45px",
                lineHeight: "52px",
                textAlign: "center",
                color: "#112240",
              }}
            >
            { blog?.blogHeading?.description}
            </h1>
          </div>
          {/* Links with dynamic background change */}
          <div style={{marginTop: "100px"}} className=" flex justify-center gap-8">
            <span
              className="flex justify-center items-center"
              onClick={() => handleClick("news")}
              style={{
                width: "89px",
                height: "39px",
                fontFamily: "Roboto",
                fontSize: "16px",
                backgroundColor: activeLink === "news" ? "#112240" : "#f7f7f7",
                cursor: "pointer",
                color: activeLink === "news" ? "white" : "#5C6A7F",
                borderRadius: "100px",
                border: "1px solid #ccc",
                opacity: "0px",
              }}
            >
              News
            </span>
            <span
              className="flex justify-center items-center"
              onClick={() => handleClick("media")}
              style={{
                width: "89px",
                height: "39px",
                fontFamily: "Roboto",
                fontSize: "16px",
                backgroundColor: activeLink === "media" ? "#112240" : "#f7f7f7",
                cursor: "pointer",
                color: activeLink === "media" ? "white" : "#5C6A7F",
                borderRadius: "100px",
                border: "1px solid #ccc",
                opacity: "0px",
              }}
            >
              Media
            </span>
            {/* <span
              className="flex justify-center items-center"
              onClick={() => handleClick("event")}
              style={{
                width: "89px",
                height: "39px",
                fontFamily: "Roboto",
                fontSize: "16px",
                backgroundColor: activeLink === "event" ? "#112240" : "#f7f7f7",
                cursor: "pointer",
                color: activeLink === "event" ? "white" : "#5C6A7F",
                borderRadius: "100px",
                border: "1px solid #ccc",
                opacity: "0px",
              }}
            >
              Event
            </span> */}
            <span
              className="flex justify-center items-center"
              onClick={() => handleClick("others")}
              style={{
                width: "89px",
                height: "39px",
                fontFamily: "Roboto",
                fontSize: "16px",
                backgroundColor:
                  activeLink === "others" ? "#112240" : "#f7f7f7",
                cursor: "pointer",
                color: activeLink === "others" ? "white" : "#5C6A7F",
                borderRadius: "100px",
                border: "1px solid #ccc",
                opacity: "0px",
              }}
            >
              Projects
            </span>
          </div>
                      <div className="containers" style={{ borderTop: "1px solid #E3E6EF", paddingTop: "50px", marginTop: "30px", fontSize: "18px" }}>


{activeLink === "news" && <EventList /> }
{activeLink === "media" && <MediaList />}
{activeLink ==="others" && <Project />}
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
                   maxWidth: "600px",
                  lineHeight: "54.57px",
                  textAlign: "center",
                }}
              >
               {callToAction?.title}
              </h2>
              <p className=""
                style={{
                   maxWidth: "600px",
                  fontFamily: "Roboto",
                  fontSize: "18px",
                  lineHeight: "26px",
                  textAlign: "center",
                }}
              >
              {callToAction?.content}
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
    </MediaRap>
  );
};

export default Event;
