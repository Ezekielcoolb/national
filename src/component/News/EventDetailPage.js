import React, { useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { fetchEventDetails } from "../../Redux/slices/homeSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const EventRap = styled.div`
  button:hover {
    opacity: 0.8;
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

const EventsDetails = () => {
  const {id} = useParams()
    const dispatch = useDispatch();


    const { eventDetail, loading, error } = useSelector(
        (state) => state.home || []
        
      );
      console.log(eventDetail);
      

      const blog = eventDetail?.blog || [];
      
      const callToAction = eventDetail?.callToAction || [];

const date = new Date(blog?.created_at);

const formatted = date.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short", // "Apr"
  day: "2-digit",
}).toUpperCase();

   useEffect(() => {
      if (id) {
        dispatch(fetchEventDetails(id));
      }
    }, [dispatch, id]);


  return (
    <EventRap>
      <div>
        <div
          style={{
            height: "auto",
            background: "#1c4f96",
            color: "white",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div className="flex flex-col justify-center items-center containers">
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              {blog?.author} - BLOG - {formatted}
            </p>
            <h2
              style={{
                fontFamily: "Bricolage Grotesque",
                fontSize: "45px",
                lineHeight: "55px",
                fontWeight: "700",
                maxWidth: "686px",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
           {blog?.title }
            </h2>
          </div>
        </div>
        <div
          style={{ marginTop: "100px" }}
          className="event-block flex justify-between gap-10 containers "
        >
          <div
            className="flex flex-col gap-6 event-div"
            style={{
              maxWidth: "680px",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              color: "#5c6a7f",
            }}
          >
            <div className="event-image"
              style={{ width: "680px", height: "400px", borderRadius: "12px" }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
                src={`https://backoffice.rua.com.ng/${blog?.banner}`}
                alt="..."
              />
            </div>
          <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
            
          </div>
          <div className="event-block-2 flex flex-col gap-2" style={{ fontFamily: "Roboto" }}>
            <div className="flex flex-col gap-2">
              <p
                style={{
                  fontSize: "14px",
                  color: "#5c6a7f",
                }}
              >
                AUTHOR
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#112240",
                }}
              >
                {blog?.author}
              </p>
              <p className="publish"
                style={{
                  marginTop: "20px",
                  fontSize: "14px",
                  color: "#5c6a7f",
                }}
              >
                PUBLISHED
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#112240",
                }}
              >
               {formatted}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="share-post"
                style={{
                  marginTop: "20px",
                  fontSize: "14px",
                  color: "#5c6a7f",
                }}
              >
                SHARE POST
              </p>
              <div className="flex gap-4">
                <Icon
                  icon="ic:baseline-facebook"
                  width="24"
                  height="24"
                  style={{ color: "black" }}
                />
                <Icon
                  icon="proicons:x-twitter"
                  width="24"
                  height="24"
                  style={{ color: "black" }}
                />
                <Icon
                  icon="mdi:linkedin"
                  width="24"
                  height="24"
                  style={{ color: "black" }}
                />
              </div>
              <div
                className="flex flex-col gap-4"
                style={{
                  width: "316px",
                  height: "176px",
                  background: "#f7f7f7",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  marginTop: "30px",
                  borderRadius: "10px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: "500px",
                    lineHeight: "22px",
                    maxWidth: "265px",
                    color: "#112240",
                  }}
                >
                  Get the latest marine news and insights from HIOS
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#5c6a7f",
                  }}
                >
                  Receive latest insights
                </p>
                <button
                  className="flex justify-center items-center"
                  style={{
                    background: "#56bf2a",
                    color: "white",
                    width: "110px",
                    height: "36px",
                    borderRadius: "100px",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "14px",
                    }}
                  >
                    Subscribe
                  </p>
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
            {callToAction?.title }
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
                      {callToAction?.sub_title }
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
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  Become a Member{" "}
                </p>
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
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  Get in Touch{" "}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </EventRap>
  );
};

export default EventsDetails;
