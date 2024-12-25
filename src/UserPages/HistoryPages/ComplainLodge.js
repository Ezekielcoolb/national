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

const ComplainLodge = () => {
  const navigate = useNavigate();
  const complains = [
    {
      id: 1,
      lodgeNo: "45999077",
      complain: "Environmental Po...",
      complainer: "Michael Solomon",
      phone: "0810000000",
      address: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Ongoing",
    },
    {
      id: 2,
      lodgeNo: "100235448",
      complain: "Refuse Dump on t...",
      complainer: "Jude Bellingham",
      phone: "09087245627",
      address: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 3,
      lodgeNo: "45999077",
      complain: "Environmental Po...",
      complainer: "Michael Solomon",
      phone: "0810000000",
      address: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 4,
      lodgeNo: "100235448",
      complain: "Refuse Dump on t...",
      complainer: "Jude Bellingham",
      phone: "09087245627",
      address: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 5,
      lodgeNo: "45999077",
      complain: "Environmental Po...",
      complainer: "Michael Solomon",
      phone: "0810000000",
      address: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 6,
      lodgeNo: "100235448",
      complain: "Refuse Dump on t...",
      complainer: "Jude Bellingham",
      phone: "09087245627",
      address: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 7,
      lodgeNo: "45999077",
      complain: "Environmental Po...",
      complainer: "Michael Solomon",
      phone: "0810000000",
      address: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 8,
      lodgeNo: "100235448",
      complain: "Refuse Dump on t...",
      complainer: "Jude Bellingham",
      phone: "09087245627",
      address: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 9,
      lodgeNo: "45999077",
      complain: "Environmental Po...",
      complainer: "Michael Solomon",
      phone: "0810000000",
      address: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 10,
      lodgeNo: "100235448",
      complain: "Refuse Dump on t...",
      complainer: "Jude Bellingham",
      phone: "09087245627",
      address: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
    {
      id: 11,
      lodgeNo: "100235448",
      complain: "Refuse Dump on t...",
      complainer: "Jude Bellingham",
      phone: "09087245627",
      address: "185 Allen Avenue Round About Ikeja Lagos.",
      status: "Completed",
    },
  ];
  const handleRowClick = () => {
    navigate("/users/complainDetails");
  };
  //   pagination

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Pagination Logic
  const totalPages = Math.ceil(complains.length / rowsPerPage);
  const indexOfLastCase = currentPage * rowsPerPage;
  const indexOfFirstCase = indexOfLastCase - rowsPerPage;
  const CurrentComplains = complains.slice(indexOfFirstCase, indexOfLastCase);

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
                    <th style={{ width: "30px" }}>S/N</th>

                    <th>LODGE ID </th>
                    <th>COMPLAIN</th>
                    <th>COMPLAINER</th>
                    <th>PHONE NUMBER</th>
                    <th>ADDRESS</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {CurrentComplains ? (
                    CurrentComplains.map((caseItem, index) => {
                      return (
                        <tr
                          className="table-row"
                          key={caseItem.id}
                          onClick={() => handleRowClick(caseItem)}
                          style={{ cursor: "pointer" }}
                        >
                          <td>{index + 1}</td>

                          <td>{caseItem.lodgeNo}</td>
                          <td>{caseItem.complain}</td>
                          <td>{caseItem.complainer}</td>
                          <td>{caseItem.phone}</td>
                          <td className="destination-wide">
                            {caseItem.address}
                          </td>
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
              <Icon
                className="pages-icon"
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
                      background:
                        pageNumber === currentPage ? "#112240" : "#1122400D",
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
              <Icon
                className="pages-icon"
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
export default ComplainLodge;
