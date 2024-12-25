import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemLodge from "./HistoryPages/ItemLodge";
import ComplainLodge from "./HistoryPages/ComplainLodge";
import EmergencyReport from "./HistoryPages/EmergencyReport";
import CrimeReport from "./HistoryPages/CrimeReport";

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

const History = () => {
  const [activeLink, setActiveLink] = useState("item")

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }
  return (
    <HistoryRap>
      <div className="history-header">

          <div className="link-container">
            <Link
              className={`link ${activeLink === "item" ? "active" : ""}`}
              onClick={() => handleLinkClick("item")}
            >
              Item Lodge
            </Link>
            <Link
              className={`link ${activeLink === "complain" ? "active" : ""}`}
              onClick={() => handleLinkClick("complain")}
            >
              Complain Lodge
            </Link>
            <Link
              className={`link ${activeLink === "emergency" ? "active" : ""}`}
              onClick={() => handleLinkClick("emergency")}
            >
              Emergency Report
            </Link>
            <Link
              className={`link ${activeLink === "crime" ? "active" : ""}`}
              onClick={() => handleLinkClick("crime")}
            >
              Crime Report
            </Link>
          </div>
         
      </div>
      <div style={{marginTop: "-15px"}}>
            {activeLink==="item" && <ItemLodge />}
            {activeLink==="complain" && <ComplainLodge />}
            {activeLink==="emergency" && <EmergencyReport />}
            {activeLink==="crime" && <CrimeReport />}
          </div>
    </HistoryRap>
  );
};

export default History;
