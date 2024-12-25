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

 
`;

const ItemLodge = () => {
    const navigate = useNavigate();
  const items = [
    {
      id: 1,
      item: "2 Laptop Bag",
      bikeNo: "LASG-4785",
      riderNo: "07066091112",
      riderCompany: "GLOVO",
      destination: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Ongoing",
    },
    {
      id: 2,
      item: "Wall Clock GIG",
      bikeNo: "LASG-4785",
      riderNo: "07066091112",
      riderCompany: "GLOVO",
      destination: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 3,
      item: "2 Laptop Bag",
      bikeNo: "LASG-4785",
      riderNo: "07066091112",
      riderCompany: "GLOVO",
      destination: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 4,
      item: "2 Laptop Bag",
      bikeNo: "LASG-4785",
      riderNo: "07066091112",
      riderCompany: "GLOVO",
      destination: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Ongoing",
    },
    {
      id: 5,
      item: "2 Laptop Bag",
      bikeNo: "LASG-4785",
      riderNo: "07066091112",
      riderCompany: "GLOVO",
      destination: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 6,
      item: "2 Laptop Bag",
      bikeNo: "LASG-4785",
      riderNo: "07066091112",
      riderCompany: "GLOVO",
      destination: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 7,
      item: "2 Laptop Bag",
      bikeNo: "LASG-4785",
      riderNo: "07066091112",
      riderCompany: "GLOVO",
      destination: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 8,
      item: "2 Laptop Bag",
      bikeNo: "LASG-4785",
      riderNo: "07066091112",
      riderCompany: "GLOVO",
      destination: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 9,
      item: "2 Laptop Bag",
      bikeNo: "LASG-4785",
      riderNo: "07066091112",
      riderCompany: "GLOVO",
      destination: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 10,
      item: "2 Laptop Bag",
      bikeNo: "LASG-4785",
      riderNo: "07066091112",
      riderCompany: "GLOVO",
      destination: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
        id: 11,
        item: "2 Laptop Bag",
        bikeNo: "LASG-4785",
        riderNo: "07066091112",
        riderCompany: "GLOVO",
        destination: "185 Allen Avenue Round About Ikeja Lagos.",
        status: "Completed",
      },
  ];
  const handleRowClick = () => {
    
    navigate("/users/itemDetails");
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
    if (status === "Ongoing") return "#E8A526";
    if (status === "Completed") return "#379C0C";
    return "#112240"; // Default color if priority is missing or unrecognized
  };
  const getStatusBackground = (status) => {
    if (status === "Ongoing") return "#FDF4E4";
    if (status === "Completed") return "#E8FDE0";
    return "#112240"; // Default color if priority is missing or unrecognized
  };

  return (
    <TaskRap>
      <div>
        <div className="table-container ">
          <div className="logger-header">
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

                    <th>ITEM</th>
                    <th>BIKE NUMBER</th>
                    <th>RIDER NUMBER</th>
                    <th>RIDER COMPANY</th>
                    <th>DESTINATION</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {CurrentItems ? (
                    CurrentItems.map((caseItem, index) => {
                      return (
                        <tr className="table-row"
                          key={caseItem.id}
                          onClick={() => handleRowClick(caseItem)}
                          style={{ cursor: "pointer" }}
                        >
                          <td>
                          {index + 1}
                          </td>

                          <td >{caseItem.item}</td>
                          <td>{caseItem.bikeNo}</td>
                          <td>{caseItem.riderNo}</td>
                          <td>{caseItem.riderCompany}</td>
                          <td className="destination-wide">{caseItem.destination}</td>
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
                                color: getStatusColor(caseItem.status),
                                backgroundColor: getStatusBackground(
                                  caseItem.status
                                ),
                              }}
                            >
                              {caseItem.status}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="10" className="no-case">
                        <img src="/images/mask_img.png" alt="" />
                        <h3>No Item lodged.</h3>
                       
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
export default ItemLodge;
