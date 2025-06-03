import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchManifest } from "../Redux/slices/userSlice";

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

const Manifest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const { manifestData, loading, error } = useSelector((state) => state.users);
  console.log(manifestData);

  const manifest = manifestData?.data?.data;

  const handleRowClick = () => {
    // navigate("/users/ridesDetails");
  };
  //   pagination
  useEffect(() => {
    dispatch(fetchManifest());
  }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Pagination Logic
  const totalPages = Math.ceil(manifest?.length / rowsPerPage);
  const indexOfLastCase = currentPage * rowsPerPage;
  const indexOfFirstCase = indexOfLastCase - rowsPerPage;
  const CurrentRides = manifest?.slice(indexOfFirstCase, indexOfLastCase);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const getStatusColor = (status) => {
    if (status === "active") return "#E8A526";
    if (status === "completed") return "#379C0C";
    return "#112240"; // Default color if priority is missing or unrecognized
  };
  const getStatusBackground = (status) => {
    if (status === "active") return "#FDF4E4";
    if (status === "Completed") return "#E8FDE0";
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
                    <th style={{ width: "30px" }}>S/N</th>

                    <th>MANIFEST ID</th>
                    <th>VEHICLE NUMBER</th>
                    <th>VEHICLE NAME</th>
                    <th>VEHICLE MODEL</th>
                    <th>DRIVER NAME</th>
                    <th>DEPARTURE STATE</th>
                    <th>DESTINATION STATE</th>
                    <th>PARK NAME</th>
                    <th>DATE CREATED</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {CurrentRides ? (
                    CurrentRides.map((caseItem, index) => {
                      return (
                        <tr
                          className="table-row"
                          key={caseItem.id}
                          onClick={() => handleRowClick(caseItem)}
                          style={{ cursor: "pointer" }}
                        >
                          <td>{index + 1}</td>

                          <td>{caseItem.manifest_num}</td>
                          <td>{caseItem.vehicle_number}</td>
                          <td>{caseItem.vehicle_name}</td>
                          <td>{caseItem.vehicle_model}</td>
                          <td>{caseItem.driver_name}</td>
                          <td>{caseItem.departure_state}</td>
                          <td>{caseItem.destination_state}</td>
                          <td>{caseItem.park_name}</td>
                          <td>
                            {new Date(caseItem.created_at).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
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
export default Manifest;
