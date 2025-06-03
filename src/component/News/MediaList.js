import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetctEventpage, fetctMediapage, fetctNewspage } from "../../Redux/slices/homeSlice";

const MediaListContainer = styled.div`

`;  


const MediaList = () => {

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
    return (
        <MediaListContainer>
   <div>
       
        <div className="media-grid">
          {mediaObject?.data?.data?.map((item,index) => (
            <div className="image-item">
              <img key={index} src={`https://backoffice.rua.com.ng/${item?.image}`} alt="Media 1" />
              </div>

          ))}
            
        </div>
    </div>
        </MediaListContainer>
    )
}

export default MediaList;