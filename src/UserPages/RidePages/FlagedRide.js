import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchFlagedRideByUser } from "../../Redux/slices/secondUserSlice";

const TaskRap = styled.div`
  
  width: 100%;
  font-family: "Roboto";
  h4 {
    font-size: 16px;
    font-weight: 600;
  }
  h5 {
    font-size: 14px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    color: #667085;

  }
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
  label {
    font-size: 14;
    color: #60667a;
    font-weight: 600;
  }
  .star {
    font-weight: 700;
    color: red;
  }

 
`;

const FlagedRide = () => {
    const [activeLink, setActiveLink] = useState("item")
  
    const handleLinkClick = (link) => {
      setActiveLink(link)
    }
    
    const navigate = useNavigate();
 
  const dispatch = useDispatch();

    const { listOfUserFlagedRide, loading, error } = useSelector((state) => state.otherUser);
    console.log(listOfUserFlagedRide);

    const rides = listOfUserFlagedRide?.data?.data

      useEffect(() => {
        dispatch(fetchFlagedRideByUser());
      }, [dispatch]);

  const handleRowClick = (id) => {
    
    navigate(`/users/ridesDetails/${id}`);
  };
  //   pagination

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Pagination Logic
  const totalPages = Math.ceil(rides?.length / rowsPerPage);
  const indexOfLastCase = currentPage * rowsPerPage;
  const indexOfFirstCase = indexOfLastCase - rowsPerPage;
  const CurrentRides = rides?.slice(indexOfFirstCase, indexOfLastCase);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const getStatusColor = (status) => {
    if (status === "active") return "#E8A526";
    if (status === "Completed") return "#379C0C";
    return "#112240"; // Default color if priority is missing or unrecognized
  };
  const getStatusBackground = (status) => {
    if (status === "active") return "#FDF4E4";
    if (status === "completed") return "#E8FDE0";
    return "#112240"; // Default color if priority is missing or unrecognized
  };

  return (
    <TaskRap>
      <div>
          

        <div className="table-container ">
          <div className="find-lawyer-header">
           
            <div className="search-divs">
              <input type="text" placeholder="search" />
              <Icon
                className="search-position"
                icon="material-symbols-light:search"
                width="18"
                height="18"
                style={{ color: "#9499AC" }}
              />
            </div>
            <div className="status-pick-div">
                <p>Status: </p>
                <span>All</span>
                <Icon
                  icon="ep:arrow-down"
                  width="16"
                  height="16"
                  style={{ color: "#667085" }}
                />
            </div>
         
          </div>
          <div className="new-table-scroll">
            <div className="table-div-con">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th style={{ width: "30px" }}>
                     S/N
                    </th>

                    
                    <th>RIDE ID</th>
                    <th>VEHICLE NUMBER</th>
                    <th>VEHICLE NAME</th>
                    <th>VEHICLE MODEL</th>
                    <th>DRIVER NAME</th>
                    <th>DEPARTURE STATE</th>
                    <th>DESTINATION ADDRESS</th>
                   
                    <th>PARK NAME</th>
                    <th>DATE CREATED</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {CurrentRides ? (
                    CurrentRides.map((caseItem, index) => {
                      return (
                        <tr className="table-row"
                          key={caseItem.id}
                          onClick={() => handleRowClick(caseItem?.lodge_ride_id)}
                          style={{ cursor: "pointer" }}
                        >
                          <td>
                          {index + 1}
                          </td>

                           <td>{caseItem.lodge_ride.manifest_num}</td>
                          <td>{caseItem.lodge_ride.vehicle_number}</td>
                          <td>{caseItem.lodge_ride.vehicle_name}</td>
                          <td>{caseItem.lodge_ride.vehicle_model}</td>
                          <td>{caseItem.lodge_ride.driver_name}</td>
                          <td>{caseItem.lodge_ride.departure_state}</td>
                          <td>{caseItem.lodge_ride.destination_address}</td>
                          
                          <td>{caseItem.lodge_ride.park_name}</td>
                          <td className="destination-wide">{caseItem.lodge_ride.destination}</td>
                          <td>
                            <div
                              style={{
                                width: "110px",
                                padding: "5px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "16px",
                                gap: "8px",
                                color: getStatusColor(caseItem.lodge_ride.status),
                                backgroundColor: getStatusBackground(
                                  caseItem.lodge_ride.status
                                ),
                              }}
                            >
                              {caseItem.lodge_ride.status}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="10" className="no-case">
                        <img src="/images/mask_img.png" alt="" />
                        <h3>No Ride Lodged.</h3>
                        
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {/* Pagination Controls */}
          <div className="pagination-div">
            <Link
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="next-page-link"
            >
              <Icon className="pages-icon"
                icon="solar:alt-arrow-left-linear"
                width="16"
                height="16"
                style={{ color: "#667085" }}
              />
              
            </Link>
            <div>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <Link
                    className="paginations"
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    style={{
                      color: pageNumber === currentPage ? "#ffffff" : "#667085",
                      background: pageNumber === currentPage ? "#112240" : "#1122400D",
                    }}
                  >
                    {pageNumber}
                  </Link>
                )
              )}
            </div>
            <Link
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="next-page-link"
            >
            
              <Icon className="pages-icon"
                icon="iconamoon:arrow-right-2-light"
                width="16"
                height="16"
                style={{ color: "#667085" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </TaskRap>
  );
};
export default FlagedRide;
