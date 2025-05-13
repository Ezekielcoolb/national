import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import MapRoad from "./Map";
import { Link } from "react-router-dom";
import LodgeRidePopup from "./AllPopup/LodgeRidePopup";
import LodgeItemPopup from "./AllPopup/LodgeItemPopup"
import { useDispatch, useSelector } from "react-redux";
import { setComplainVisible, setCreatedComplain, setCreatedCrime, setCreatedEmergency, setCreatedItem, setCreatedRide, setCrimeVisible, setDropdownVisible, setEmergencyVisible, setItemVisible } from "../Redux/appSlice";
import LodgeComplain from "./AllPopup/LodgeComplain";
import EmergencyReport from "./AllPopup/EmergencyReportPop";
import ReportCrimePop from "./AllPopup/ReportCrimePop";

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
  .parking-table,
  .all-commuter-div {
    width: 50%;
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
  .all-commuter-div {
    background: #112240;
    border-radius: 10px;
    padding: 20px;
  }
  .down-left-div {
    display: flex;
    gap: 20px;
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
  .parking-table,
  .all-commuter-div {
    width: 50%;
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

const Dashboard = () => {
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
  const dropdownRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const [allLatest, setAllLatest] = useState(false);

  const { dropdowVisible, itemDropdown,createdRide, 
    complainDropdown, emergencyDropdown, createdItem,
     reportCrimeDropdown, createdComplain, createdCrime, createdEmergency} = useSelector((state) => state.app);
  const dispatch = useDispatch();
 

  const handleVisisble = () => {
    dispatch(setDropdownVisible());
  };
 
    const handleItemVisible = () => {
      dispatch(setItemVisible());
    };
  const handleComplainLodge = () => {
    dispatch(setComplainVisible());
  };
 const handleEmergencyLodge = () => {
    dispatch(setEmergencyVisible());
  };
    const handleCrimeLodge = () => {
      dispatch(setCrimeVisible());
    };
  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };
  const handleAllLatest = () => {
    setAllLatest((prev) => !prev);
  };

  const handleCloseItem = () => {
   
    dispatch(setCreatedItem());
  };
 const handleCloseRide = () => {
   
    dispatch(setCreatedRide());
  };
  const handleCloseComplain = () => {
   
    dispatch(setCreatedComplain());
  };
  const handleCloseEmergency = () => {
   
    dispatch(setCreatedEmergency());
  };
  const handleCloseCrime = () => {
   
    dispatch(setCreatedCrime());
  };


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {  
        handleCloseCrime() 
      }
    };
    if (createdCrime ) {
     
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
    
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ createdCrime]);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {  
        handleCloseEmergency() 
      }
    };
    if (createdEmergency ) {
     
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
    
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ createdEmergency]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {  
        handleCloseComplain() 
      }
    };
    if (createdComplain ) {
     
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
    
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ createdComplain]);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {  
        handleCloseItem() 
      }
    };
    if (createdItem ) {
     
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
    
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ createdItem]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {  
        handleCloseRide() 
      }
    };
    if (createdRide ) {
     
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
    
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ createdRide]);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {  
        handleCrimeLodge() 
      }
    };
    if (reportCrimeDropdown ) {
     
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
    
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ reportCrimeDropdown]);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {  
        handleEmergencyLodge() 
      }
    };
    if (emergencyDropdown ) {
     
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
    
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ emergencyDropdown]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {  
        handleComplainLodge() 
      }
    };
    if (complainDropdown ) {
     
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
    
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ complainDropdown]);
 
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {  
        handleItemVisible() 
      }
    };
    if (itemDropdown ) {
     
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
    
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ itemDropdown]);
 
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {  
        handleVisisble() 
      }
    };
    if (dropdowVisible ) {
     
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
    
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ dropdowVisible]);

  const displayedParking = showAll ? parking : parking.slice(0, 2);
  const displayedLatest = allLatest ? latest : latest.slice(0, 1);

  const latestPage = 1;
  const latestPages = Math.ceil(displayedLatest.length / latestPage);

  const rowsPerPage = 5;
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
        <h2>Welcome Back, Taiwo</h2>
      <div className="dashboard">
        <div className="left-dashboard">
          <div className="map-div">
            <MapRoad />
          </div>
          <div style={{width: "100%", overflowX: "hidden" }}>
            <div className="allRideContainer">
              <div className="allRides">
                <div onClick={handleVisisble} className="lodge-div">
                  <div className="car">
                    <img src="/images/car.png" alt="" />
                  </div>
                  <h4>Lodge Ride</h4>
                </div>

                {/* <div className="lodge-div">
                  <div style={{ position: "relative" }} className="car">
                    <img src="/images/car.png" alt="" />
                    <div className="flag">
                      <img src="/images/flag.png" alt=".." />
                    </div>
                  </div>
                  <h4>Flag Ride</h4>
                </div> */}
                <div onClick={handleItemVisible}  className="lodge-div">
                  <div className="lodge">
                    <img src="/images/lodge.png" alt="" />
                  </div>
                  <h4>Lodge Item</h4>
                </div>

                <div onClick={handleComplainLodge} className="lodge-div">
                  <div className="lodge" style={{ position: "relative" }}>
                    <img src="/images/crime.png" alt="" />
                    <div className="flag">
                      <img src="/images/flag.png" alt=".." />
                    </div>
                  </div>
                  <h4>Lodge Complain</h4>
                  
                </div>

                <div onClick={handleEmergencyLodge} className="lodge-div">
                  <div className="lodge">
                    <img src="/images/crime.png" alt="" />
                  </div>
                  <h4>Emergency Report</h4>
                </div>

                <div onClick={handleCrimeLodge} className="lodge-div">
                  <div className="lodge">
                    <img src="/images/crime.png" alt="" />
                  </div>
                  <h4>Report Crime</h4>
                </div>
              </div>
            </div>
          </div>


          <div className="down-left-div">
            <div className="table-container parking-table">
              <div className="new-table-scroll">
                <div className="">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Parking space</th>
                        <th>
                          <Link onClick={handleShowAll} className="see-all">
                            {showAll ? "See less" : "See all"}
                          </Link>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedParking.length > 0 ? (
                        displayedParking.map((caseItem) => (
                          <tr key={caseItem.id}>
                            <td>
                              <div className="allPark">
                                <div className="space">
                                  <img src="/images/space.png" alt="" />
                                </div>
                                <div className="parrkingName">
                                  {caseItem.parkingName}
                                  <span className="parkingAddress">
                                    {caseItem.status}
                                    <img
                                      src="/images/location_icon.png"
                                      alt=""
                                    />
                                    {caseItem.address}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="price-td">{caseItem.price}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="no-case">
                            <img src="/images/mask_img.png" alt="" />
                            <p>You have parking space</p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="all-commuter-div">
              <div className="commuter-text">
                <h3>
                  New RUA Commuter <br />
                  Safety Pass ID
                </h3>
                <Link className="commuter-link">Get Started</Link>
              </div>
              <div className="commuter-move">
                <div className="commuter-img">
                  <img src="/images/commuter.png" alt="" />
                </div>
              </div>
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
                      <th>Who to follow</th>
                      <th></th>
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
                            <Link className="folow-btn">follow</Link>
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

          <div className="table-container">
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
            {/* Pagination controls */}
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
          </div>
        </div>
        {dropdowVisible? <div  ref={dropdownRef}>< LodgeRidePopup /> </div> : ""}
      {itemDropdown? <div  ref={dropdownRef}>< LodgeItemPopup /> </div> : ""}
      {complainDropdown? <div> <LodgeComplain /></div> : ""}
      {emergencyDropdown? <div> <EmergencyReport /> </div> : ""}
      {reportCrimeDropdown ? <div> <ReportCrimePop /> </div> : ""}
      {createdRide ? (
        <div className="dropdown-container">
          <div className="successCreation">
            <h2>Ride created</h2>
            <div>
            <p>
              Your ride has been created successfully, you can share ride with
              family and friends.
            </p>
            <Link onClick={handleCloseRide} className="successContinue">Continue</Link>
            <input type="text" />
            <Link className="whatssap">
            <img src="/images/what_icon.png" alt="" />
            <p>Share on WhatsApp</p></Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {createdItem ? (
        <div className="dropdown-container">
          <div className="successCreation">
            <h2>Item Lodged</h2>
            <div>
            <p>
            Your item has been lodge successfully, 
            you can share link with family and friends.
            </p>
            <Link onClick={handleCloseItem} className="successContinue">Continue</Link>
            <input type="text" />
            <Link className="whatssap">
            <img src="/images/what_icon.png" alt="" />
            <p>Share on WhatsApp</p></Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
       {createdComplain ? (
        <div className="dropdown-container">
          <div className="successCreation">
            <h2>Complain Lodged</h2>
            <div>
            <p>
            Your complain has been lodge successfully, 
            you can share link with family and friends.
            </p>
            <Link onClick={handleCloseItem} className="successContinue">View Details</Link>
            <input type="text" />
            <Link className="whatssap">
            <img src="/images/what_icon.png" alt="" />
            <p>Share on WhatsApp</p></Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
        {createdEmergency ? (
        <div className="dropdown-container">
          <div className="successCreation">
            <h2>Request Sent</h2>
            <div>
            <p>
            Your emergency request have been sent successfully,
             you can share link with family and friends.
            </p>
            <Link onClick={handleCloseEmergency} className="successContinue">View Details</Link>
            <input type="text" />
            <Link className="whatssap">
            <img src="/images/what_icon.png" alt="" />
            <p>Share on WhatsApp</p></Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
          {createdCrime ? (
        <div className="dropdown-container">
          <div className="successCreation">
            <h2>Request Sent</h2>
            <div>
            <p>
            Your emergency request have been sent successfully, 
            you can share link with family and friends.
            </p>
            <Link onClick={handleCloseCrime} className="successContinue">View Details</Link>
            <input type="text" />
            <Link className="whatssap">
            <img src="/images/what_icon.png" alt="" />
            <p>Share on WhatsApp</p></Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      </div>
    </DashboardRap>
  );
};

export default Dashboard;
