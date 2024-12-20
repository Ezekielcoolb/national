import React from "react";
import { Outlet } from "react-router-dom";

import { styled } from "styled-components";


import { useSelector } from "react-redux";

import UserSidebar from "../Sidebars/userSidebar";
import UserNav from "../UserPages/UserNavbar";

export default function UserDashboardLayout() {
  const {openSideBar} = useSelector((state)=> state.app)
  return (
    <Wrapper>
       <div className="usernav-appear">
          <UserNav />
          </div>
      <div
        style={{}}
        className="outlet"
      >
         <UserSidebar />
       
        <div style={{width: openSideBar ? "100%" : "80%"}} className="div">
          <div  className="usernav-gone">
          <UserNav />
          </div>
            
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  
  .outlet {
    background: #F7F7F7;

    padding: 10px;
    display: flex;
    flex-direction: row;
  }
  .div{
   padding-left: 10px;
   padding-right: 0px;
   width: 80% !important;
   

  }
  .usernav-appear {
  display: none !important;
 }
  @media screen and (max-width: 1024px) {
    .div{
   width: 100% !important;
  
 }
 .usernav-appear {
  display: block !important;
 }
 .usernav-gone {
  display: none !important;
 }
  }
  @media screen and (max-width: 1100px) {

    .outlet {
      width: 100% !important;
    }
  }
`;
