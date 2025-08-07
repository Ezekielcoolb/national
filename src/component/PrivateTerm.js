import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { TermsAndPrivacy } from "../Redux/slices/homeSlice";

const TermsRap = styled.div`
  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 16px;
  }
  .first {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .second, .third {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-top: 1px solid #e3e6ef;
    padding-top: 20px;
  }
  h2 {
    font-size: 45px;
    font-weight: 600;
    text-align: center;
  }
  h4 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const PrivateTerm = () => {
   const dispatch = useDispatch();
      const { privacyTerms, loading, error } = useSelector(
        (state) => state.home || []
        
      );

      const privacy = privacyTerms?.data?.privacy 

      console.log(privacy);


       useEffect(() => {
             dispatch(TermsAndPrivacy()); // Call API on component mount
           }, [dispatch]);
      
  return (
    <TermsRap>
      <div style={{
        marginTop: "50px",
        marginBottom: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }} className="containers">
      <div
  dangerouslySetInnerHTML={{ __html: privacy?.content }}
/>
      </div>
    </TermsRap>
  );
};

export default PrivateTerm;
