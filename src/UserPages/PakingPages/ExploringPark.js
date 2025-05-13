import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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

  label {
    font-size: 14;
    color: #60667a;
    font-weight: 600;
  }
  .star {
    font-weight: 700;
    color: red;
  }
  .book-now {
    width: 94px;
    height: 30px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #56BF2A;
    text-decoration: none;
    color: #56BF2A;
    font-size: 12px;
    font-weight: 500;

  }
  .second-park-td  {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .second-park-td h4 {
    color: #112240;
    font-size: 14px;
    font-weight: 600;
  }
.phantom h4 {
    color: #112240;
    font-size: 14px;
    font-weight: 500;

}
 .phantom p {
    color: #667085;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 5px;
 }
 .phantom {
    display: flex;
    flex-direction: column;
    gap: 5px;
 }
 .parking-div {
    display: flex;
    align-items: center;
    gap: 10px;
 }
`;

const ExploringPark = () => {
    const navigate = useNavigate();
  const items = [
    {
      id: 1,
    pakingname: "Phantom Space",
    status: "Available",
    address: "28 Allen Avenue, Ikeja Lagos"
    },
    {
      id: 2,
      pakingname: "GIG Parking Lot",
      status: "Closed",
      address: "60 ST Mary close, Chevy view Lekki Lagos"
    },
    {
      id: 3,
      pakingname: "Trust Central Park",
      status: "Available",
      address: "15 Jurasic park, Gibowo Lagos Island"
    },
    {
      id: 4,
      pakingname: "Phantom Space",
      status: "Available",
      address: "28 Allen Avenue, Ikeja Lagos"
    },
    {
      id: 5,
      pakingname: "GIG Parking Lot",
      status: "Closed",
      address: "60 ST Mary close, Chevy view Lekki Lagos"
    },
    {
      id: 6,
      pakingname: "GIG Parking Lot",
      status: "Closed",
      address: "60 ST Mary close, Chevy view Lekki Lagos"
    },
    {
      id: 7,
      pakingname: "Phantom Space",
      status: "Available",
      address: "28 Allen Avenue, Ikeja Lagos"
    },
    {
      id: 8,
      pakingname: "Phantom Space",
      status: "Available",
      address: "28 Allen Avenue, Ikeja Lagos"
    },
    {
      id: 9,
      pakingname: "Phantom Space",
      status: "Available",
      address: "28 Allen Avenue, Ikeja Lagos"
    },
    {
      id: 10,
      pakingname: "Phantom Space",
      status: "Available",
      address: "28 Allen Avenue, Ikeja Lagos"
    },
   
  ];
  const handleRowClick = () => {
    
    navigate("/users/explore-parking/details");
  };
  //   pagination

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Pagination Logic
  const totalPages = Math.ceil(items.length / rowsPerPage);
  const indexOfLastCase = currentPage * rowsPerPage;
  const indexOfFirstCase = indexOfLastCase - rowsPerPage;
  const CurrentItems = items.slice(indexOfFirstCase, indexOfLastCase);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const getStatusColor = (status) => {
    if (status === "Available") return "#359742";
    if (status === "Closed") return "#F8253A";
    return "#112240"; // Default color if priority is missing or unrecognized
  };
 

  return (
    <TaskRap>
      <div>
        <div className="table-container ">
          <div className="logger-header">
            <div className="search-divs">
              <input type="text" placeholder="search coupon..." />
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
              
                <tbody>
                  {CurrentItems ? (
                    CurrentItems.map((caseItem, index) => {
                      return (
                        <tr className="table-row"
                          key={caseItem.id}
                          onClick={() => handleRowClick(caseItem)}
                          style={{ cursor: "pointer", display:"flex", alignItems: "center", justifyContent: "space-between" }}
                        >
                        

                          <td >
                            <div className="parking-div">
                                <img src="/images/park.png" alt="" />
                                <div className="phantom">
                                    <h4>{caseItem.pakingname}</h4>
                                    <p>
                                        <span
                                            style={{color: getStatusColor(caseItem.status)}}
                                        >{caseItem.status}</span>
                                        {caseItem.address}
                                    </p>
                                </div>
                            </div>
                          </td>
                          <td>{caseItem.bikeNo}</td>
                          <div className="second-park-td">
                            <h4>₦600</h4>
                            <Link className="book-now">Book Now</Link>
                          </div>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="10" className="no-case">
                        <img src="/images/mask_img.png" alt="" />
                        <h3>No Parking Space.</h3>
                       
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
export default ExploringPark;
