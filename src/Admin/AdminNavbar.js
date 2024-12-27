import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setOpenSideBar } from "../Redux/appSlice";
import styled from "styled-components";

const UserNavRap = styled.div`
color:  #112240;
;
  width: 100%;
  .userNavbar {
    width: 100%;
   gap: 10px;
    border-radius: 8px;
    border: 1px solid #1122401a;
    padding: 10px 20px;
    background: #ffffff;
    display: flex;
    position: relative;
    justify-content: space-between;
  }
  .search-bar-div {
    position: relative;
  }
  .search-bar-div input {
    width: 341px;
    height: 38px;
    border-radius: 100px;
    padding: 10px 30px;
    color: #66708580;

    background: #f7f7f7;
    border-style: none;
  }
  .user-search-icon {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .notification-icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .notification-icon img {
    width: 18px;
    height: 18px;
  }
  .nav-select {
    width: 78px;
    height: 38px;
    border-radius: 100px;
    border: 0.5px solid #d0d5dd;
  }
  .usernav-2 {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .user-mobile {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .notification-dropdown {
    border: 1px solid #1122401F;
    box-shadow: 0px 8px 22px 0px #22304929;
    background: #ffffff;
    width: 262px;
    border-radius: 10px;
    position: absolute;

    top: 55px;
    right: 0px;
  }
  .notification-dropdown h4 {
    color: #112240;
    font-size: 600;
    font-size: 14px;
    padding: 15px;
    border-bottom: 1px solid #1122401F
  }
  .notify-bell {
    background: #56BF2A26;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .notify-bell img {
    width: 16px;
    height: 16px;
  }
  .notify-all-divs {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }
  .notify-drop-body {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .notify-drop-body p {
    color: #112240;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  @media (max-width: 768px) {
    .userNavbar {
      flex-wrap: wrap;
    }
    .usernav-2 {
      margin-left: 60px;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 450px)  {
    .search-bar-div input {
      width: 200px;
    }
  }
`;

const AdminNav = () => {
  const dropdownRef = useRef(null);
  const { openSideBar } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  console.log(openSideBar);

  const ShowBar = () => {
    dispatch(setOpenSideBar());
  };
const [dropdownVisibility, setDropdownVisibility] = useState(false)
  const [selected, setSelected] = useState("light");

  const handleToogleDrop = () => {
    setDropdownVisibility(!dropdownVisibility)
    
  }

 

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
       
        setDropdownVisibility(false)
      }
    };
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisibility(false)
      }
    };

    if ( dropdownVisibility) {
      document.addEventListener("mousedown", handleOutsideClick);
       // Attach the event listener when the component mounts
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownVisibility]);
  return (
    <UserNavRap>
      <div className="userNavbar">
        <div className="user-mobile">
          <Icon
            className="icon-admin-menu"
            width="50px"
            height="50px"
            icon={openSideBar ? "mdi-light:menu" : "prime:times"}
            color="black"
            onClick={() => ShowBar()}
          />
          <Link to="/"></Link>
          <div className="search-bar-div">
            <input type="text" placeholder="Search anything..." />
            <Icon
              className="user-search-icon"
              icon="material-symbols-light:search"
              width="20"
              height="20"
              style={{ color: "#66708580" }}
            />
          </div>
        </div>

        <div className="usernav-2">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              border: "bone",
              borderRadius: "100px",
              background: "#F7F7F7",
            padding: "5px",
            height: "38px",
              width: "151px",
            }}
          >
            <button
              onClick={() => setSelected("light")}
              style={{
                borderStyle: "none",
                width:  selected === "light" ? "66px" : "50%",
                color: "#112240",
                height: "26px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: "500",
                background: selected === "light" ? "#ffffff" : "transparent",
                borderRadius: selected === "light" ? "100px" : "0px",
                cursor: "pointer",
              }}
            >
              Light
            </button>
            <button
              onClick={() => setSelected("dark")}
              style={{
                padding: "10px 20px",
                borderStyle: "none",
                width: "70px",
                color: "#112240",
                width:  selected === "light" ? "66px" : "50%",
                fontSize: "12px",
                fontWeight: "500",
                height: "26px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: selected === "dark" ? "#ffffff" : "transparent",
                borderRadius: selected === "dark" ? "100px" : "0px",
                cursor: "pointer",
              }}
            >
              Dark
            </button>
          </div>
          <div onClick={handleToogleDrop} className="notification-icon">
            <img src="/images/cation.png" />
          </div>
            {dropdownVisibility?
            <div  ref={dropdownRef} className="notification-dropdown">
              <h4>Notification</h4>
              <div className="notify-all-divs">
                <div className="notify-drop-body">
                  <div className="notify-bell">
                    <img src="/images/green_bell.png" alt="" />
                  </div>
                  <p>New message from Police...

                    <span>10 minutes ago</span>
                  </p>
                </div>
                <div className="notify-drop-body">
                  <div className="notify-bell">
                    <img src="/images/green_bell.png" alt="" />
                  </div>
                  <p>New traffic update for you

                    <span>18th Sep, 2024</span>
                  </p>
                </div>
                <div className="notify-drop-body">
                  <div className="notify-bell">
                    <img src="/images/green_bell.png" alt="" />
                  </div>
                  <p>Your ride have arrived safely

                    <span>16th Sep, 2024</span>
                  </p>
                </div>
              </div>
            </div>
              : ""}
          <select className="nav-select"></select>
        </div>
      </div>
    </UserNavRap>
  );
};
export default AdminNav;
