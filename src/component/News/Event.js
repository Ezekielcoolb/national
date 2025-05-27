import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";
import { fetctEventpage, fetctMediapage, fetctNewspage } from "../../Redux/slices/homeSlice";

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
    const {newsObject, mediaObject, eventObject, loading, error } = useSelector(
      (state) => state.home || []
      
    );

    console.log(activeLink);
    

const blog = newsObject?.data?.blog || [];
    console.log(eventObject);

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

    if (type === "news") {
      setContent(
        <div className="media-grid">
          {blog?.blogList?.map((item, index) => (
<div className="news-div"
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
                  {new Date(item?.updated_at).getDate()}
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
                  {formatMonthYear(item?.updated_at)}
                </p>
              </div>
            </div>
            <div className="news-div" style={{ width: "370px", height: "320px" }}>
              <img
                style={{
                  height: "100%",
                  borderRadius: "15px 15px 0px 0px",
                  width: "100%",
                  objectFit: "cover",
                  display: "block",
                  objectPosition: "top",
                }}
                src={`https://backoffice.rua.com.ng/${item?.banner}`}
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
                <p>{item?.author}</p>
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
                className="news-div-btn flex justify-between items-center"
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
          ))}
          
        
        </div>
      );
    } else if (type === "media") {
      setContent(
        <div>
       
        <div className="media-grid">
          {mediaObject?.data?.data?.map((item,index) => (
            <div className="image-item">
              <img key={index} src={`https://backoffice.rua.com.ng/${item?.image}`} alt="Media 1" />
              </div>

          ))}
            
        </div>
    </div>
      );
//     } else if (type === "event") {
//        setContent(
//         <div className="media-grid">
//           {blog?.blogList?.map((item, index) => (
// <div className="news-div"
//             style={{
//               width: "370px",
//               height: "560.88px",
//               border: " 1px solid #E3E6EF",
//               borderRadius: "15px",
//               background: "#FFFFFF01",
//               position: "relative",
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 top: "20px",
//                 left: "20px",
//                 width: "80px",
//                 height: "89px",
//               }}
//             >
//               <div
//                 className=""
//                 style={{
//                   width: "80px",
//                   height: "62px",
//                   background: "#1c4f96",
//                   color: "#FFFFFF",
//                 }}
//               >
//                 <p
//                   style={{
//                     fontFamily: "Manrope",
//                     fontWeight: "800",
//                     fontSize: "30px",
//                     textAlign: "center",
//                   }}
//                 >
//                   {new Date(item?.updated_at).getDate()}
//                 </p>
//               </div>
//               <div
//                 style={{ background: "#FFFFFF" }}
//                 className="flex justify-center items-center"
//               >
//                 <p
//                   style={{
//                     fontFamily: "Manrope",
//                     fontWeight: "600",
//                     fontSize: "11px",
//                   }}
//                 >
//                   {formatMonthYear(item?.updated_at)}
//                 </p>
//               </div>
//             </div>
//             <div className="news-div" style={{ width: "370px", height: "320px" }}>
//               <img
//                 style={{
//                   height: "100%",
//                   borderRadius: "15px 15px 0px 0px",
//                   width: "100%",
//                   objectFit: "cover",
//                   display: "block",
//                   objectPosition: "top",
//                 }}
//                 src={`https://backoffice.rua.com.ng/${item?.banner}`}
//                 alt="..."
//               />
//             </div>
//             <div className="flex flex-col gap-5 m-6">
//               <div
//                 className="flex gap-5"
//                 style={{
//                   fontSize: "14px",
//                   color: "#5c6a7f",
//                   fontFamily: "Roboto",
//                 }}
//               >
//                 <p>{item?.author}</p>
//                 <p className="flex gap-2">
//                   {" "}
//                   <Icon
//                     icon="uil:comments"
//                     width="16.13"
//                     height="14"
//                     style={{ fontWeight: "900", color: "#1c4f96" }}
//                   />{" "}
//                   0 Comments
//                 </p>
//               </div>
//               <p
//                 style={{
//                   fontSize: "24px",
//                   fontWeight: "700",
//                   lineHeight: "30px",
//                   color: "#112240",
//                 }}
//               >
//                 Lorem ipsum dolor sit amet consectetur. Ut fermentum.
//               </p>
//               <button
//                 className="news-div-btn flex justify-between items-center"
//                 style={{
//                   background: "transparent",
//                   width: "300px",
//                   height: "50px",
//                   border: "1px solid #E3E6EF",
//                   borderRadius: "100px",
//                 }}
//               >
//                 <p
//                   style={{
//                     fontFamily: "Roboto",
//                     fontSize: "14px",
//                     lineHeight: "19.6px",
//                     fontWeight: "500",
//                     color: "#56bf2a",
//                   }}
//                 >
//                   View Post
//                 </p>
//                 <Icon
//                   icon="formkit:arrowright"
//                   width="18.97"
//                   height="8.8"
//                   style={{ color: "#56bf2a" }}
//                 />
//               </button>
//             </div>
//           </div>
//           ))}
          
        
//         </div>
//       );
    } else if (type === "others") {
      navigate("/news&others");
    }
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
              Others
            </span>
          </div>

          {/* Render full div content */}
          {content && (
            <div className="containers" style={{ borderTop: "1px solid #E3E6EF", paddingTop: "50px", marginTop: "30px", fontSize: "18px" }}>{content}</div>
          )}
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
    </MediaRap>
  );
};

export default Event;
