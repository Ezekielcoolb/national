import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemLodge from "./HistoryPages/ItemLodge";
import ComplainLodge from "./HistoryPages/ComplainLodge";
import EmergencyReport from "./HistoryPages/EmergencyReport";
import CrimeReport from "./HistoryPages/CrimeReport";
import MyParking from "./PakingPages/MyParking";
import ExploringPark from "./PakingPages/ExploringPark";

const HistoryRap = styled.div`
 padding: 15px;
  width: 100%;
 
  font-family: "Roboto";
.link-container {
    display: flex;
    justify-content: flex-start;
    overflow-x: auto;
  }

  .link {
    padding: 20px 20px;
    text-decoration: none;
    color: #667085;
white-space: nowrap;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    border-bottom: 2px solid transparent; /* Default underline */
    transition: all 0.3s ease;
  }

  .link.active {
    font-weight: 600;
    font-size: 14px;
    border-bottom: 2px solid black; /* Black underline for the active link */
    color: #112240;

  }

  .link:hover {
    color: #555; /* Optional hover effect */
  }
`;

const Parking = () => {
  const [activeLink, setActiveLink] = useState("mypark")

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }
  return (
    <HistoryRap>
      <div className="history-header">

          <div className="link-container">
            <Link
              className={`link ${activeLink === "mypark" ? "active" : ""}`}
              onClick={() => handleLinkClick("mypark")}
            >
             My Parking Space
            </Link>
            <Link
              className={`link ${activeLink === "explore" ? "active" : ""}`}
              onClick={() => handleLinkClick("explore")}
            >
              Exploring Parking Space
            </Link>
          
          </div>
         
      </div>
      <div style={{marginTop: "-15px"}}>
           {activeLink==="mypark" && <MyParking />}
           {activeLink==="explore" && <ExploringPark />}
          </div>
    </HistoryRap>
  );
};

export default Parking;
