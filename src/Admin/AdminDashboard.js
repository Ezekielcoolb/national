import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";


import { Link } from "react-router-dom";
import MapRoad from "../UserPages/Map";


const DashboardRap = styled.div`
  width: 100%;
  padding: 30px;
  font-family: "Inter";
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #112240;
    margin-bottom: 20px;
  }
  h5 {
    font-size: 15px;
    font-weight: 500;
    color: #112240;
  }
  h4 {
    font-size: 16px;
    font-weight: 600;
    color: #112240;
  }

  .map-div {
    border: 1px solid #1122401f;
    background: #ffffff;
    border-radius: 16px;
    height: 283px;
    padding: 10px;
    width: 100%;
  }
  .car {
    width: 75.8px;
    height: 40.78px;
  }
  
  .flag {
    width: 42px;
    height: 34px;
    position: absolute;
    top: -20px;
    right: 0px;
  }
  .lodge {
    width: 43px;
    height: 43px;
  }
  .car img,
  .flag img,
  .lodge img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .lodge-div {
    border: 1px solid #1122401f;
    background: #ffffff;
    border-radius: 10px;
    flex: 0 0 clamp(187px, 20%, 250px);
    width: 187px !important;
    height: 129px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .allRides {
    display: flex;
    gap: 20px;
min-width: 700px;
flex-wrap: nowrap;
    white-space: "nowrap",
  }
  .allRideContainer {
    width: 100%;
    overflow-x: auto;
  }
  .allRideContainer::-webkit-scrollbar {
    height: 3px; /* Set scrollbar width */
  }

  .allRideContainer::-webkit-scrollbar-thumb {
    background: #888; /* Scrollbar thumb color */
    border-radius: 4px; /* Optional for rounded scrollbar */
  }

  .allRideContainer::-webkit-scrollbar-thumb:hover {
    background: #555; /* Thumb hover color */
  }

  .allRideContainer::-webkit-scrollbar-track {
    background: #f1f1f1; /* Scrollbar track color */
  }

  /* Hide Up and Down Arrows in Scrollbar */
  .allRideContainer::-webkit-scrollbar-button {
    display: none; /* Hides the arrows */
  }
  th {
    font-size: 14px;
    font-weight: 500;
    color: #727789;
  }
  td {
    font-size: 13px;
    font-weight: 400;
    color: #727789;
  }
  .table-container {
    margin: 0px auto;
    width: 100%;
  }
  .new-table-scroll {
    width: 100% !important;
    overflow-x: auto;
    border-radius: 12px;
  }

  .see-all {
    color: #12d27d;
    font-weight: 500;
    font-size: 14px;
  }
  .recent-trans {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
  }
  .custom-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    border-radius: 10px;
    background: #ffffff;

    border: 1px solid #1122401f;
  }
  table {
  }
  .custom-table thead th {
    padding: 10px;

    font-weight: bold;
    font-size: 14px;
    border-bottom: 1px solid #1122401f;
  }

  .custom-table tbody tr {
    padding: 10px;
    border-bottom: 1px solid #1122401f;
  }
  .custom-table tbody td {
    padding: 10px;
    border: none;
    white-space: nowrap;
  }
  .new-table-scroll::-webkit-scrollbar {
    height: 3px; /* Set scrollbar width */
  }

  .new-table-scroll::-webkit-scrollbar-thumb {
    background: #888; /* Scrollbar thumb color */
    border-radius: 4px; /* Optional for rounded scrollbar */
  }

  .new-table-scroll::-webkit-scrollbar-thumb:hover {
    background: #555; /* Thumb hover color */
  }

  .new-table-scroll::-webkit-scrollbar-track {
    background: #f1f1f1; /* Scrollbar track color */
  }

  /* Hide Up and Down Arrows in Scrollbar */
  .new-table-scroll::-webkit-scrollbar-button {
    display: none; /* Hides the arrows */
  }
  .space {
    background: #4ce5b140;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .space img {
    width: 20px;
    height: 20px;
  }
  .parkingAddress {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    font-weight: 400;
    color: #667085;
  }
  .parrkingName {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #112240;
  }
  .allPark {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .price-td {
    color: #112240;
    font-weight: 600;
    font-size: 14px;
  }
  .commuter-img {
    width: 168px;
    height: 98px;
  }
  .commuter-move {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .commuter-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .commuter-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .commuter-text h3 {
    color: #ffffff;
    line-height: 20px;
    font-size: 16px;
    font-weight: 600;
  }
  .commuter-link {
    text-decoration: none;
    color: #56bf2a;
    font-size: 12px;
    font-weight: 500;
  }
  
  .down-left-div {
    display: flex;
   justify-content: space-between;
   padding: 20px;
   border: 1px solid #1122401F;
   background: #ffffff;
   border-radius: 10px;

  }
  .follow_img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .folow-btn {
    border: 1px solid #1122401f;
    width: 85px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: #ffffff;
    color: #667085;
    font-size: 12px;
    font-weight: 500;
  }
  .no-border-tr {
    border: none !important;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .pagination-circle {
    width: 9px;
    height: 5px;
    border-radius: 5px;
    background: #11224026;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 5px;
  }

  .pagination-circle.active {
    background: #112240;

    color: white;
  }

  .pagination-circle:hover {
    background-color: #d4d4d4;
  }
  .latestNews {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .allLatestNews {
    display: flex;
    flex-direction: column;
    gap: 7px;
    word-wrap: break-word; /* Ensure text breaks when it's too long */
    white-space: normal; /* Allow the text to wrap to the next line */
    max-width: 200px;
  }

  .dashboard {
    display: flex;
    gap: 20px;
    width: 100%;
    
  }
  .left-dashboard {
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .right-dashboard {
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .table-container {
    background: #ffffff;
    padding-bottom: 20px;
    border-radius: 10px;
  }
  .pop{
    
  }
  .parking-table {
    width: 50%;
  }
  .complain-amn h3 {
    color: #112240;
    font-size: 24px;
    font-weight: 700;
  }
  .complain-amn p {
    color: #667085;

    font-size: 13px;
    font-weight: 400;
  }
  .complain-amn  {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .complain-div {
    border: 1px solid #1122401F;
    height: 102px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: #ffffff;
    border-radius: 10px;
    width: 33%;
    padding: 20px;
  }
  .all-complain-div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .traffic-map {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .update-btn {
    background: #112240;
    text-decoration: none;
    width: 55px;
    height: 22px;
    display: flex;
    color: #ffffff;
    font-size: 12px;
    border-radius: 16px;
    font-weight: 400;
    align-items: center;
    padding: 10px;
    justify-content: center;
  }
  .update-div {
    background: #f2f4f7;
    display: flex;
    align-items: center;
   
    border-radius: 16px;
  }
  .update-div  p {
    font-size: 10px;
    font-weight: 400;
    color: #344054;
margin: 0px;
  }
  .all-update-div {
    background: #ffffff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;
  }
  .learn-more-btn {
    background: #56BF2A;
    width: 113px;
    height: 31px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
  }
  .security-div-info h3 {
    color: #112240;
    font-size: 22px;
    font-weight: 700;
    max-width: 184px;
  }
  .security-div-info p {
    color: #667085;
    font-size: 13px;
    font-weight: 400;
    max-width: 207px;
  }
  .security-div-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .custom-table th {
    background: #ffffff;
  }
  @media (max-width: 992px) {
    .dashboard {
      flex-direction: column;
    }
    .left-dashboard, .right-dashboard {
      width: 100%;
    }
  }
  @media (max-width: 678px) {
.down-left-div {
  flex-direction: column;
}
.parking-table, .all-commuter-div {
  width: 100%;
}
  }
`;

const AdminDashboard = () => {
  const parking = [
    {
      id: 1,
      parkingName: "Phantom Space",
      status: "Available",
      address: "Ikeja, lagos",
      price: "₦599",
    },
    {
      id: 2,
      parkingName: "Phantom Space",
      status: "Available",
      address: "Ikeja, lagos",
      price: "₦599",
    },
    {
      id: 3,
      parkingName: "Phantom Space",
      status: "Available",
      address: "Ikeja, lagos",
      price: "₦599",
    },
  ];

  const followers = [
    {
      id: 1,
      name: "Lagos PRO",
      web: "press@police.gov.ng",
    },
    {
      id: 2,
      name: "FIRS",
      web: "press@police.gov.ng",
    },
    {
      id: 3,
      name: "LASTMA",
      web: "press@police.gov.ng",
    },
    {
      id: 4,
      name: "LASEMA (URU",
      web: "press@police.gov.ng",
    },
    {
      id: 5,
      name: "LAWMA PRO",
      web: "press@police.gov.ng",
    },
    {
      id: 6,
      name: "Lagos Road",
      web: "press@police.gov.ng",
    },
    {
      id: 7,
      name: "Riders",
      web: "press@police.gov.ng",
    },
    {
      id: 8,
      name: "LASTMA ROAD",
      web: "press@police.gov.ng",
    },
    {
      id: 9,
      name: "LASEMA (URU)",
      web: "press@police.gov.ng",
    },
    {
      id: 10,
      name: "LAWMA PRO",
      web: "press@police.gov.ng",
    },
    {
      id: 11,
      name: "LASTMA ROAD",
      web: "press@police.gov.ng",
    },
    {
      id: 12,
      name: "LASEMA (URU)",
      web: "press@police.gov.ng",
    },
    {
      id: 13,
      name: "LAWMA PRO",
      web: "press@police.gov.ng",
    },
  ];

  const latest = [
    {
      id: 1,
      name: "Decrypt",
      time: "19 hours ago",
      category: "Health",
      description:
        "Bitcoin Mini Showdown Puts New York on Front Lines of a Green Fight",
    },
    {
      id: 2,
      name: "Decrypt",
      time: "19 hours ago",
      category: "Public",
      description:
        "Bitcoin Mini Showdown Puts New York on Front Lines of a Green Fight",
    },
  ];
 
  const [showAll, setShowAll] = useState(false);
  const [allLatest, setAllLatest] = useState(false);


 

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };
 
  const handleAllLatest = () => {
    setAllLatest((prev) => !prev);
  };



  const displayedParking = showAll ? parking : parking.slice(0, 2);
  const displayedLatest = allLatest ? latest : latest.slice(0, 1);

  const latestPage = 1;
  const latestPages = Math.ceil(displayedLatest.length / latestPage);

  const rowsPerPage = 8;
  const totalPages = Math.ceil(followers.length / rowsPerPage);

  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLatestPage, setCurrentLatestPage] = useState(1);
  // Function to handle page change
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handlePageLatestClick = (pageNumber) => {
    setCurrentLatestPage(pageNumber);
  };
  const indexOfLastLatest = currentLatestPage * latestPage;
  const indexOfFirstLatest = indexOfLastLatest - latestPage;
  const currentLatest = displayedLatest.slice(
    indexOfFirstLatest,
    indexOfLastLatest
  );
  // Get the rows for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = followers.slice(indexOfFirstRow, indexOfLastRow);
  return (
    <DashboardRap>
        
      <div className="dashboard">
        <div className="left-dashboard">
        <div className="all-complain-div">
            <div className="complain-div">
                <img src="/images/complain_icon.png" alt="" />
                <div className="complain-amn">
                    <p>Complains</p>
                    <h3>250</h3>
                </div>
            </div>
            <div className="complain-div">
                <img src="/images/complain_icon.png" alt="" />
                <div className="complain-amn">
                    <p>Pending</p>
                    <h3>25</h3>
                </div>
            </div>
            <div className="complain-div">
                <img src="/images/complain_icon.png" alt="" />
                <div className="complain-amn">
                    <p>Completed</p>
                    <h3>196</h3>
                </div>
            </div>
        </div>

        <div className="map-plus-info">
          <div className="traffic-map">
            <MapRoad />
          </div>
          <div className="all-update-div">
            <div className="update-div">
              <Link className="update-btn">Update</Link>
              <p> alimosho around egebeda round-about... </p>
              <p>Small traffic in Ikeja Round-About...</p>
              <p>Road is free around 3rd mainland bridge... </p>
            </div>
          </div>
        </div>
       


          <div className="down-left-div">
           <div className="security-div-info">
            <h3>Security at your fingertips!</h3>
            <p>Use your RUA card around the country for free money.</p>
            <Link className="learn-more-btn">  Learn more</Link>
           </div>
            <div className="all-commuter-div">
             <img src="/images/secure_rua.png" alt="" />
            </div>
          </div>
        </div>


        <div className="right-dashboard">
          <div className="table-container">
            <div className="new-table-scroll">
              <div className="">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Messages</th>
                      <th style={{color: " #56BF2A"}}>See all</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRows.length > 0 ? (
                      currentRows.map((caseItem) => (
                        <tr key={caseItem.id} className="no-border-tr">
                          <td>
                            <div className="allPark">
                              <div className="follow_img">
                                <img src="/images/folow_img.png" alt="" />
                              </div>
                              <div className="parrkingName">
                                {caseItem.name}
                                <span className="parkingAddress">
                                  {caseItem.web}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="no-case">
                          <img src="/images/mask_img.png" alt="" />
                          <p>You have no case yet</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Pagination controls */}
            <div className="pagination">
              {Array.from({ length: totalPages }).map((_, index) => (
                <div
                  key={index}
                  className={`pagination-circle ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageClick(index + 1)}
                ></div>
              ))}
            </div>
          </div>

          {/* <div className="table-container">
            <div className="new-table-scroll">
              <div className="">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Latest News</th>
                      <th>
                        <Link onClick={handleAllLatest} className="see-all">
                          {allLatest ? "See less" : "See all"}
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentLatest.length > 0 ? (
                      currentLatest.map((caseItem) => (
                        <tr key={caseItem.id} className="no-border-tr">
                          <td>
                            <div className="allLatestNews">
                              <div className="latestNews">
                               <p> {caseItem.name}</p>
                              <p>  {caseItem.time}</p>
                              <p>  {caseItem.category}</p>
                              </div>
                              <p>{caseItem.description}</p>
                            </div>
                          </td>
                          <td>
                            <img src="/images/latest_news.png" alt="" />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="no-case">
                          <img src="/images/mask_img.png" alt="" />
                          <p>You have no latest news</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pagination">
              {Array.from({ length: latestPages }).map((_, index) => (
                <div
                  key={index}
                  className={`pagination-circle ${
                    currentLatestPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageLatestClick(index + 1)}
                ></div>
              ))}
            </div>
          </div> */}
        </div>
       
      
      </div>
    </DashboardRap>
  );
};

export default AdminDashboard;
