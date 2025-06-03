import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { fetctEventpage, fetctMediapage, fetctNewspage } from "../../Redux/slices/homeSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const EventListContainer = styled.div``


const EventList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
        const {newsObject, mediaObject, eventObject, loading, error } = useSelector(
          (state) => state.home || []
          
        );
    
        
    
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
             
    const formatMonthYear = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    }); // Output like: "May, 2025"
  };

  const handleGoToDetails = (id) => {
    navigate(`/event/details/${id}`)
  }
    return (
        <EventListContainer>
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
                           {item?.title}
                         </p>
                         <button onClick={() => handleGoToDetails(item.id)}
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
        </EventListContainer>
    );
}
export default EventList;